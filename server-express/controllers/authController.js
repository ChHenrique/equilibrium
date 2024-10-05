import db from '../database/db.js';
import bcrypt from 'bcryptjs';

export const registerUser = async (req, res) => {
    const { nome, sobrenome, nome_social, data_nasc, email, senha, confirmarsenha } = req.body;

    // Verificação se os campos obrigatórios estão presentes
    if (!nome || !sobrenome || !nome_social || !data_nasc || !email || !senha || !confirmarsenha) {
        return res.status(400).send('Por favor, preencha todos os campos');
    }

    // Verificação se as senhas são iguais
    if (senha !== confirmarsenha) {
        return res.status(400).send('As senhas não coincidem');
    }

    try {
        // Checar se o email já está em uso
        const [results] = await db.query('SELECT email FROM pacientes WHERE email = ?', [email]);

        if (results.length > 0) {
            return res.status(400).send('Esse email já está em uso');
        }

        // Se o email for único, prossiga com a criação do usuário
        let hashedsenha = await bcrypt.hash(senha, 8);

        // Inserir o novo usuário no banco de dados
        await db.query('INSERT INTO pacientes (nome, sobrenome, nome_social, data_nasc, email, senha) VALUES (?, ?, ?, ?, ?, ?)', 
            [nome, sobrenome, nome_social, data_nasc, email, hashedsenha]);

        return res.status(201).send('Usuário registrado com sucesso');
    } catch (error) {
        console.error(error);
        return res.status(500).send('Erro no servidor');
    }
};

export const loginUser = async (req, res) => {
    // Implementação para login
};
