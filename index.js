const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require('cors');

// Database
require('./database/config');

// App de Express
const app = express();

// Iniciamos cors
app.use(cors());

// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');

// Lectura y parseo del Body
app.use(express.json());


// Rutas
app.use('/api/login', require('./routes/auth'));
app.use('/api/pets', require('./routes/pets'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/tariff', require('./routes/tariff'));


// Path público
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));


server.listen(process.env.PORT, (err) => {

    if (err) throw new Error(err);

    console.log('Servidor corriendo en puerto', process.env.PORT);

});