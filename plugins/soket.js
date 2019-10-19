import io from 'socket.io-client';

const socket = io('http://localhost');

socket.on("connect", function(){
    console.log("test:"+socket.id);
   /* $("#link").text("http://localhost:3000/alici/" + socket.id);
    $("#link").attr("href", "http://localhost:3000/alici/" + socket.id)*/
});
/*
socket.on("girisKontrol", (id) => {
    $(location).attr('href', 'http://localhost:3000/gonderen/' + id);
});*/