import express from 'express';
import { registerUser, loginUser, registerPs } from '../controllers/authController.js'; // Certifique-se de importar corretamente

const router = express.Router();

// Definir a rota de registro de usuário
router.post('/register', registerUser);

router.post('/registerps', registerPs);

// Definir a rota de login de usuário
router.post('/login', loginUser);
router.post('/loginps', loginUser);

export default router;
