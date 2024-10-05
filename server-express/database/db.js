import mysql from 'mysql2';
import dotenv from 'dotenv'; 

dotenv.config(); 

// Cria um pool de conexões com suporte a promises
const db = mysql.createPool({
    host: process.env.DATABASE_HOST, 
    user: process.env.DATABASE_USER, 
    password: process.env.DATABASE_PASSWORD, 
    database: process.env.DATABASE
}).promise(); // Suporte a promises

// Função para testar a conexão
async function testConnection() {
    try {
        // Executa uma consulta simples
        await db.query('SELECT 1');
        console.log('Conexão com MySQL estabelecida com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar ao MySQL:', error);
    }
}

// Testa a conexão ao iniciar o módulo
testConnection();

export default db;
