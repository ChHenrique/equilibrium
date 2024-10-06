import jwt from 'jsonwebtoken';

// Middleware para verificar o token JWT
export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];  // O formato do token será 'Bearer TOKEN'

    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    // Verifica e decodifica o token JWT
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token inválido' });
        }
        req.user = user;  // Anexa o payload do token ao req
        next();  // Continua para a próxima função
    });
};
