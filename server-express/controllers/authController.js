import db from '../database/db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res) => {
    const { nome, sobrenome, nome_social, data_nasc, email, senha, confirmarsenha } = req.body;

    // Verificação dos campos
    if (!nome || !sobrenome || !nome_social || !data_nasc || !email || !senha || !confirmarsenha) {
        return res.status(400).json({ message: 'Por favor, preencha todos os campos' });
    }

    // Verificação se as senhas são iguais
    if (senha !== confirmarsenha) {
        return res.status(400).json({ message: 'As senhas não coincidem' });
    }

    try {
        // Checa se o email já está sendo usado
        const [results] = await db.query('SELECT email FROM pacientes WHERE email = ?', [email]);

        if (results.length > 0) {
            return res.status(400).json({ message: 'Esse email já está em uso' });
        }

        // Se o email for único ele continua com a criação do usuário
        let hashedsenha = await bcrypt.hash(senha, 8);

        // Inserir o novo usuário no banco de dados
        await db.query('INSERT INTO pacientes (nome, sobrenome, nome_social, data_nasc, email, senha) VALUES (?, ?, ?, ?, ?, ?)', 
            [nome, sobrenome, nome_social, data_nasc, email, hashedsenha]);

        return res.status(201).json({ message: 'Usuário registrado com sucesso' });
    } catch (error) {
        console.error('Erro no registro do usuário:', error);
        return res.status(500).json({ message: 'Erro no servidor' });
    }
};

export const loginUser = async (req, res) => {
    const { email, senha } = req.body;

    // Verifica os campos obrigatórios
    if (!email || !senha) {
        return res.status(400).json({ message: 'Por favor, preencha todos os campos' });
    }

    try {
        // Verifica se o usuário existe
        const [results] = await db.query('SELECT * FROM pacientes WHERE email = ?', [email]);

        if (results.length === 0) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        const user = results[0];

        // Verifica se a senha está correta
        const isPasswordValid = await bcrypt.compare(senha, user.senha);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        // Gera um token JWT usando a chave secreta do .env
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Envia o token para o frontend
        return res.status(200).json({ message: 'Login realizado com sucesso', token });
    } catch (error) {
        console.error('Erro no login do usuário:', error);
        return res.status(500).json({ message: 'Erro no servidor' });
    }
};
