const { io } = require('../server.js') //importamos io del server porque es la configuración del socket
/* levantamos el socket para que este pendiente de la conexiones que viene del cliente */

io.on('connection',( client)=>{  //La logica de la conexion va dentro, una vez que el usuario se ha conectado
    //El client contiene toda la info de la conexion entrante
      console.log("Usuario conectado");  
    
      //Enviando información al cliente
      client.emit('enviarMensaje', 
      {usuario:'Administrador',
      mensaje: 'Bienvenido chato'});
    
      //Esuchamos si el usuario se desconecto
      client.on ('disconnect', ()=>{
          console.log('Usuario desconectado');
      });
    
      //Escuchar el cliente
      //enviarMensaje es el nombre o cabecerá con que enviamos el mensaje en el front, y mensaje recibe lo enviado
      client.on('enviarMensaje', (data, callback)=>{
        console.log(data);

        //Si queremos que lo que envier un cliente lo vean los demas, debe ser recibido por el servidor y emitido nuevamente y para que sea a todos en lugar de usar client.emit usaremos client.broadcast.emit();
        client.broadcast.emit('enviarMensaje',data);
        //En lugar de data podemos enviar un objeto que extrae la información deseada pero como queremos mandarlo todo usamos el mismo data
        
        // if(mensaje.usuario)
        // {
        //   callback('TODO BIEN!!!');
        // }
        // else{
        //   callback('ALGO SALIÓ MAL!!');
        // }
      });
    
    });