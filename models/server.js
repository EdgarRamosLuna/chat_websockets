
const express = require('express');
const http = require("http");
const socketio = require("socket.io");
const path = require('path');
const cors = require('cors');
const Sockets = require('./sockets');

class Server{
    constructor(){
        this.app = express();
       // this.port = 3000;
        this.port = process.env.PORT;

        this.server = http.createServer(this.app);
        this.io = socketio(this.server, { 

            cors: {
            
                methods: ["GET", "POST"],
                allowedHeaders: ["my-custom-header"],
                credentials: true
            }

        });
        // Configuracion del socket server
        //Https server

        //Configuraciones de sockets

    }


    middlewares(){
        // Desplegar el directorio publico
        this.app.use(express.static( path.resolve(__dirname, '../public')));
        // this.app.use( express.static( path.resolve(__dirname, '../public/')));
        // CORS
        this.app.use( cors() );
    }
    configurarSockets(){
        new Sockets(this.io);
    }
    execute(){
        //Inicializar middlewares
        this.middlewares();

        // Inicializar configuraciones
        this.configurarSockets();

        //Inicializar server
        this.server.listen(this.port, () =>{
            console.log("Server corriendo en puerto:", this.port);
        });
        
    }
}

module.exports = Server;