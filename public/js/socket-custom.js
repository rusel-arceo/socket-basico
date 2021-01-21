var socket = io(); //cargamos la libreria
    //.on es para escuchar
    socket.on ('connect', function(){  //hacemos la coneccion con el servidor y el front ahora estará pendiente  de cambios en el server
        console.log (`Conectado al Servidor`);
    });
    
    socket.on('disconnect', function(){
        console.log('Perdimos coneccion con el servidor');
    });

    //.emit es para enviar información
    //Se puede mandar un cadena pero se acostumbre enviar objetos socket.emit('enviarMensaje', '123');
    socket.emit('enviarMensaje', {
        usuario: 'Arceo',
        mensaje: 'Hola Mundo'
    },
     function (resp){
         console.log(resp);
        }
    );

    socket.on('enviarMensaje', function (mensaje){
        console.log(mensaje);
    });
