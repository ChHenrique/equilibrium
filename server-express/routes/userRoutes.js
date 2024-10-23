import express from 'express';
import { authenticateToken } from '../middlewares/authenticateToken.js';
import db from '../database/db.js';

const router = express.Router();

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
