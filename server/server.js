const express = require('express');

const path = require('path');
const socketIO = require('socket.io'); //importamos
const http = require('http');  //viene con node para levantar un servidor

const app = express();
let server = http.createServer(app);  //Creamos el servidor usando http pero le pasamos el app que contiene las configuración de express

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//Io nos hace la conexion soxket del backend
//let io = socketIO(server);  se va a convetir en un export para poder separar la implementación en otro archivo 
module.exports.io = socketIO(server);
require('./sockets/socket.js');  //importamos la implementación de los sockets, al no asignarlo a varibale es como que simplemente se ejecute aquí, nota que node se exporto nada desde el archivo socket




server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});