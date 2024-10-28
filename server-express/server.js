// importações
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors'
import userRoutes from './routes/userRoutes.js';
import consultaRoutes from './routes/consultas.js';
import path from 'path';
import { fileURLToPath } from 'url';



dotenv.config(); // Carrega variáveis de ambiente do arquivo .env

const app = express();
app.use(express.json()); // Permite que o express leia json
app.use(cors())


// Obtém o diretório atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve arquivos estáticos do diretório 'uploads'
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/', authRoutes); // Usando as rotas com prefixo "/"
app.use('/user', userRoutes);  // Nova rota de dados do usuário
app.use('/', consultaRoutes);

const PORT = process.env.PORT || 3000; // Permite definir a porta via variável de ambiente

// Roda o servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});
