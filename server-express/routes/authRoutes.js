import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js'; // Certifique-se de importar corretamente

const router = express.Router();

// Definir a rota de registro de usuário
router.post('/register', registerUser);

// Definir a rota de login de usuário
router.post('/login', loginUser);

export default router;
