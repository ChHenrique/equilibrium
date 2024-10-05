// importações
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors'

dotenv.config(); // Carrega variáveis de ambiente do arquivo .env

const app = express();
app.use(express.json()); // Permite que o express leia json
app.use(cors())

app.use('/', authRoutes); // Usando as rotas com prefixo "/"

const PORT = process.env.PORT || 3000; // Permite definir a porta via variável de ambiente

// Roda o servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});
