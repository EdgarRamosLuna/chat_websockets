const Server= require('./models/server');
require('dotenv').config();

const server = new Server();

server.execute();

/*const express = require('express');
// Servidor Express
const app = express();

// Servidor de sockets
const server = require("http").createServer(app);

// Configuracion del socket server
const io = require("socket.io")(server);

// Desplegar el directorio publico
app.use( express.static( __dirname + '/public'));


io.on("connection", ( socket ) => {
  //console.log(socket.id);
  /*socket.emit('mensaje-bienvenida', {
    msg: 'Bienvenido al server',
    date: new Date,
  });

  //Escuchar el evento
  socket.on('msg-to-server', (data) =>{
    console.log(data);

    io.emit('msg-from-server', data);
  });
});



server.listen(8080, () =>{
    console.log("Server running on port 8080");
});
*/