// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require("cors");



const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: "http://localhost:8888", 
      methods: ["GET", "POST"]
    }

    })


io.on('connection', (socket) => {
    socket.on('signal', (data) => {
        socket.broadcast.emit('signal', data);
    });
});

server.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
