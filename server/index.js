const express = require('express')
const consola = require('consola')
const {
  Nuxt,
  Builder
} = require('nuxt')
const app = express()


//========= Socket.io Başlangıç ===========//
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on("connection", (socket) => {
  socket.on('disconnect', function () {
    socket.leaveAll();
  });

  socket.on("mesajGonder", (roomID, mesaj, ID) => {
    socket.broadcast.to(roomID).emit("mesajAl", mesaj, ID); // Diğer kişiler
    io.sockets.to(ID).emit("mesaj", mesaj); // Bu kişi
  });

  socket.on("sayacBaslat", (roomID, sure) => {
    setTimeout(() => {
      let sayac = sure;

      let tekrar = setInterval(() => {
        sayac--;
        io.sockets.in(roomID).emit("sayac", sayac);

        if (sayac == 0) {
          clearInterval(tekrar);
          io.sockets.in(roomID).emit("sureDoldu");

          io.sockets.adapter.rooms[roomID].sockets = {
            bir: true,
            iki: true
          }
        }
      }, 1000)
    }, 1)
  });
  let kisiSayisi;
  socket.on("girisKontrol", (roomID) => {
    io.sockets.in(roomID).emit("girisKontrol", roomID);
    kisiSayisi = io.sockets.adapter.rooms[roomID].length; // roomID odasındaki kişi sayısı
  });

  socket.on("odayaGir", (roomID, ID) => {
    kisiSayisi = 0;
    if (io.sockets.adapter.rooms[roomID] != null) {
      kisiSayisi = io.sockets.adapter.rooms[roomID].length;
    }

    if (kisiSayisi < 2) {
      socket.join(roomID);
    } else if (io.sockets.adapter.rooms[roomID].sockets.bir == true) {
      io.to(ID).emit("sureDoldu")
    } else if (kisiSayisi == 2) {
      io.to(ID).emit("odaDolu")
    } else {
      console.error("bilinmeyen bir hata oldu")
    }
  });
});
//========= Socket.io Bitiş ===========//


// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host,
    port
  } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  http.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
