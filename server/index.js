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
  console.log("biri girdi");
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

  //====== Socket.io sever portu
  http.listen(3001, () => {
    console.log("socket.io başlatıldı. http://localhost:3001");
  });

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
