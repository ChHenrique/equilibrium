const express = require('express');
const https = require('https');
const fs = require('fs');
const { Server } = require('socket.io');
const cors = require('cors');
const PORT = 5000;

const app = express();
app.use(cors());

const server = https.createServer({
  key: fs.readFileSync('../frontend/ssl/key-no-pass.pem'),
  cert: fs.readFileSync('../frontend/ssl/cert.pem'),
}, app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on('connection', (socket) => {
  console.log('Usuário conectado!', socket.id);

  socket.on('signal', (data) => {
    socket.broadcast.emit('signal', data);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`);
});