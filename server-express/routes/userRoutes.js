import express from 'express';
import { authenticateToken } from '../middlewares/authenticateToken.js';
import db from '../database/db.js';
import multer from 'multer';
import path from 'path';

const router = express.Router();



// Configuração do multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Diretório onde as imagens serão armazenadas
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname)); // Nome do arquivo com extensão
    }
});

const upload = multer({ storage });

// Rota para upload da foto do psicólogo
router.post('/upload-foto', authenticateToken, upload.single('foto'), async (req, res) => {
    const userId = req.user.id_psi; // O 'id_psi' vem do token JWT para o psicólogo

    if (!req.file) {
        return res.status(400).json({ message: 'Nenhum arquivo foi enviado.' });
    }

    const photoPath = req.file.path; // Caminho do arquivo que foi salvo

    try {
        // Atualiza a tabela do psicólogo com o caminho da foto
        const query = 'UPDATE psicologos SET foto = ? WHERE id_psi = ?';
        await db.query(query, [photoPath, userId]);

        res.status(200).json({ message: 'Foto enviada com sucesso!', photoPath });
    } catch (error) {
        console.error('Erro ao enviar foto:', error);
        return res.status(500).json({ message: 'Erro no servidor' });
    }
});

// Rota para obter a foto do psicólogo
router.get('/psicologos/:id_psi/foto', async (req, res) => {
    const psicologoId = req.params.id_psi;

    try {
        // Busca a foto do psicólogo no banco de dados
        const [results] = await db.query('SELECT foto FROM psicologos WHERE id_psi = ?', [psicologoId]);

        if (results.length === 0) {
            return res.status(404).json({ message: 'Psicólogo não encontrado' });
        }

        const psicologo = results[0];

        // Retorna a URL da foto
        res.json({ foto: psicologo.foto });
    } catch (error) {
        console.error('Erro ao buscar a foto do psicólogo:', error);
        return res.status(500).json({ message: 'Erro no servidor' });
    }
});



// Rota para buscar o nome social do usuário logado
router.get('/me', authenticateToken, async (req, res) => {
    const userId = req.user.id;  // O 'id' vem do token JWT

    try {
        // Busca o nome social do usuário no banco de dados
        const [results] = await db.query('SELECT nome_social FROM pacientes WHERE id = ?', [userId]);

        if (results.length === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        // Retorna o nome social do usuário
        const user = results[0];
        res.json({ nome_social: user.nome_social });
    } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
        return res.status(500).json({ message: 'Erro no servidor' });
    }
});

// Rota para buscar o nome social do psicólogo logado
router.get('/psi', authenticateToken, async (req, res) => {
    const userId = req.user.id_psi;  // O 'id_psi' vem do token JWT para o psicólogo

    try {
        // Busca o nome social do psicólogo no banco de dados
        const [results] = await db.query('SELECT nome_social FROM psicologos WHERE id_psi = ?', [userId]);

        if (results.length === 0) {
            return res.status(404).json({ message: 'Psicólogo não encontrado' });
        }

        // Retorna o nome social do psicólogo
        const user = results[0];
        res.json({ nome_social: user.nome_social });
    } catch (error) {
        console.error('Erro ao buscar dados do psicólogo:', error);
        return res.status(500).json({ message: 'Erro no servidor' });
    }
});

router.get('/pacientes/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        // Busca as informações do usuário no banco de dados
        const [results] = await db.query('SELECT * FROM pacientes WHERE id = ?', [userId]);

        if (results.length === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        // Retorna todas as informações do usuário
        const user = results[0];
        res.json(user);
    } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
        return res.status(500).json({ message: 'Erro no servidor' });
    }
});

router.get('/psicologos/:id_psi', async (req, res) => {
    const psicologoId = req.params.id_psi;

    try {
        // Busca as informações do psicólogo no banco de dados usando "id_psi"
        const [results] = await db.query('SELECT * FROM psicologos WHERE id_psi = ?', [psicologoId]);

        if (results.length === 0) {
            return res.status(404).json({ message: 'Psicólogo não encontrado' });
        }

        // Retorna todas as informações do psicólogo
        const psicologo = results[0];
        res.json(psicologo);
    } catch (error) {
        console.error('Erro ao buscar dados do psicólogo:', error);
        return res.status(500).json({ message: 'Erro no servidor' });
    }
});



router.get('/psicologos', async (req, res) => {
    try {
        // Busca todos os psicólogos cadastrados no banco de dados
        const [results] = await db.query('SELECT * FROM psicologos');

        // Retorna a lista de psicólogos
        res.json(results);
    } catch (error) {
        console.error('Erro ao buscar psicólogos:', error);
        return res.status(500).json({ message: 'Erro no servidor' });
    }
});


export default router;
