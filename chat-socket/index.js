const app = require('express')();
const http = require('http');
const socketIo = require('socket.io');

const PORT = 3001;
const CHAT_ROUTE = 'algumacoisaseilaoq'; // Defina aqui sua string aleatória ou fixa

const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
    console.log('Usuário conectado!', socket.id);

    // Verifica se a rota de chat é a correta
    socket.on('joinChat', (route) => {
        if (route === CHAT_ROUTE) {
            socket.emit('message', 'Bem-vindo ao chat!'); // Mensagem de boas-vindas
        } else {
            socket.disconnect(); // Desconectar se a rota estiver errada
            console.log('Usuário tentou acessar uma rota inválida!', socket.id);
        }
    });

    socket.on('disconnect', (reason) => {
        console.log('Usuário desconectado!', socket.id);
    });

    socket.on('message', (text) => {
        io.emit('receive_message', {
            text,
            authorId: socket.id,
            author: socket.data.username
        });
    });
});

server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
