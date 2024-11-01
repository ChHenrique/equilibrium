// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require("cors");
const PORT = 5000;


const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: "*", 
      methods: ["GET", "POST"]
    }

    })


io.on('connection', (socket) => {
    console.log('Usuário conectado!', socket.id);

    socket.on('signal', (data) => {
        socket.broadcast.emit('signal', data);
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
