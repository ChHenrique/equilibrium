const app = require('express')();
const https = require('https');
const socketIo = require('socket.io');
const fs = require('fs');


const PORT = 3001;
const CHAT_ROUTE = 'algumacoisaseilaoq'; // Defina aqui sua string aleatória ou fixa

const server = https.createServer({
    key: fs.readFileSync('../frontend/ssl/key-no-pass.pem'),
    cert: fs.readFileSync('../frontend/ssl/cert.pem'),
  }, app);

const io = socketIo(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
    console.log('Usuário conectado!', socket.id);

    // Verifica se a rota de chat é a correta
    socket.on('joinChat', (route) => {
        if (route === CHAT_ROUTE) {
            socket.emit('message', 'Bem-vindo ao chat!'); // Mensagem de boas-vindas
            // Notifica que um novo usuário entrou
            socket.broadcast.emit('message', 'Um novo usuário entrou no chat!');
        } else {
            socket.disconnect(); // Desconectar se a rota estiver errada
            console.log('Usuário tentou acessar uma rota inválida!', socket.id);
        }
    });

    socket.on('disconnect', (reason) => {
        console.log('Usuário desconectado!', socket.id);
        // Notifica os outros usuários que alguém saiu
        socket.broadcast.emit('message', 'Um usuário saiu do chat.');
    });

    socket.on('message', (text) => {
        // Envia a mensagem para todos os usuários conectados
        io.emit('receive_message', {
            text,
            authorId: socket.id,
            author: socket.data.username || 'Usuário' // Nome padrão se o username não estiver definido
        });
    });
});

server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
