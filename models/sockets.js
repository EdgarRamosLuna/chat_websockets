

class Sockets{
    constructor( io ){
        this.io = io;
        this.socketEvents();
        /*clients = {
            id:{}
        }*/
    }
    socketEvents(){
        // On Connection
        this.io.on("connection", ( socket ) => {
            
            //Escuchar el evento: mensaje-to-server
            socket.on('msg-to-server', (data) =>{
              console.log(data);
          
              this.io.emit('msg-from-server', data);
            });
        });
    }
}

module.exports = Sockets;