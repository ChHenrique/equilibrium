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
        await db.query('INSERT INTO pacientes (nome, sobrenome, nome_social, data_nasc, email, senha, data_criacao) VALUES (?, ?, ?, ?, ?, ?, NOW())', 
            [nome, sobrenome, nome_social, data_nasc, email, hashedsenha]);
        
        return res.status(201).json({ message: 'Usuário registrado com sucesso' });
    } catch (error) {
        console.error('Erro no registro do usuário:', error);
        return res.status(500).json({ message: 'Erro no servidor' });
    }
};

export const registerPs = async (req, res) => {
    const { nome, sobrenome, nome_social, data_nasc, email, senha, confirmarsenha, cpf, crp } = req.body;

    // Verificação dos campos
    if (!nome || !sobrenome || !nome_social || !data_nasc || !email || !senha || !confirmarsenha || !cpf || !crp) {
        return res.status(400).json({ message: 'Por favor, preencha todos os campos' });
    }

    // Verificação se as senhas são iguais
    if (senha !== confirmarsenha) {
        return res.status(400).json({ message: 'As senhas não coincidem' });
    }

    try {
        // Checa se o email já está sendo usado
        const [results] = await db.query('SELECT email FROM psicologos WHERE email = ?', [email]);

        if (results.length > 0) {
            return res.status(400).json({ message: 'Esse email já está em uso' });
        }

        // Se o email for único ele continua com a criação do usuário
        let hashedsenha = await bcrypt.hash(senha, 8);

        // Inserir o novo usuário no banco de dados
        await db.query('INSERT INTO psicologos (nome, sobrenome, nome_social, data_nasc, email, senha, cpf, crp, data_criacao) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())', 
            [nome, sobrenome, nome_social, data_nasc, email, hashedsenha, cpf, crp]);
        


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
        return res.status(200).json({ message: 'Login realizado com sucesso', token, data_criacao: user.data_criacao, id: user.id });

    } catch (error) {
        console.error('Erro no login do usuário:', error);
        return res.status(500).json({ message: 'Erro no servidor' });
    }
};

export const loginPs = async (req, res) => {
    const { email, cpf, senha } = req.body;

    // Verifica os campos obrigatórios
    if (!email || !senha || !cpf) {
        return res.status(400).json({ message: 'Por favor, preencha todos os campos' });
    }

    try {
        // Verifica se o usuário existe
        const [results] = await db.query('SELECT * FROM psicologos WHERE email = ?', [email]);

        if (results.length === 0) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        const user = results[0];

        // Verifica se a senha está correta
        const isPasswordValid = await bcrypt.compare(senha, user.senha);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        // Gera um token JWT usando a chave secreta do .env e o campo id_psi
        const token = jwt.sign({ id_psi: user.id_psi, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Envia o token para o frontend
        return res.status(200).json({ message: 'Login realizado com sucesso', token, data_criacao: user.data_criacao, id: user.id_psi });

    } catch (error) {
        console.error('Erro no login do psicologo:', error);
        return res.status(500).json({ message: 'Erro no servidor' });
    }
};

export const infoPc = async (req, res) => {
    const { telefone, cidade, estado } = req.body;
    const { id } = req.params;  


    try {
        // Atualizar as informações do paciente com base no `id`
        const result = await db.query(
            'UPDATE pacientes SET telefone = ?, cidade = ?, estado = ? WHERE id = ?',
            [telefone, cidade, estado, id]
        );

        // Verificar se algum registro foi alterado
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Paciente não encontrado' });
        }

        return res.status(200).json({ message: 'Informações alteradas com sucesso' });
    } catch (error) {
        console.error('Erro ao atualizar as informações', error);
        return res.status(500).json({ message: 'Erro no servidor' });
    }
};

export const infoPsi = async (req, res) => {
    const { telefone, cidade, estado } = req.body;
    const { id } = req.params;  


    try {
        // Atualizar as informações do paciente com base no `id`
        const result = await db.query(
            'UPDATE psicologos SET telefone = ?, cidade = ?, estado = ? WHERE id_psi = ?',
            [telefone, cidade, estado, id]
        );

        // Verificar se algum registro foi alterado
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Paciente não encontrado' });
        }

        return res.status(200).json({ message: 'Informações alteradas com sucesso' });
    } catch (error) {
        console.error('Erro ao atualizar as informações', error);
        return res.status(500).json({ message: 'Erro no servidor' });
    }
};

// Rota para atualizar a duração de um psicólogo
export const updateDuracaoPsicologo = async (req, res) => {
    const { duracao } = req.body;
    const { id } = req.params;  

    try {
        // Atualizar a duração do psicólogo com base no `id`
        const result = await db.query(
            'UPDATE psicologos SET duracao = ? WHERE id_psi = ?',
            [duracao, id]
        );

        // Verificar se algum registro foi alterado
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Psicólogo não encontrado' });
        }

        return res.status(200).json({ message: 'Duração atualizada com sucesso' });
    } catch (error) {
        console.error('Erro ao atualizar a duração', error);
        return res.status(500).json({ message: 'Erro no servidor' });
    }
};

export const updateTopicosFormacaoPsicologo = async (req, res) => {
    const { topicos, formacao } = req.body;
    const { id } = req.params;

    try {
        // Verifique se `topicos` é um array, caso contrário, lance um erro
        if (!Array.isArray(topicos)) {
            return res.status(400).json({ message: 'Topicos deve ser um array' });
        }

        // Converta o array para string JSON antes de salvar no banco
        const topicosJSON = JSON.stringify(topicos);

        const result = await db.query(
            'UPDATE psicologos SET topicos = ?, formacao = ? WHERE id_psi = ?',
            [topicosJSON, formacao, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Psicólogo não encontrado' });
        }

        return res.status(200).json({ message: 'Tópicos e formação atualizados com sucesso' });
    } catch (error) {
        console.error('Erro ao atualizar os tópicos e formação', error);
        return res.status(500).json({ message: 'Erro no servidor' });
    }
};



