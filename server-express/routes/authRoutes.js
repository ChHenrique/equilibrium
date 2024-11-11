import express from 'express';
import { registerUser, loginUser, registerPs, loginPs, infoPc } from '../controllers/authController.js'; 

const router = express.Router();

// Definir as rotas de registro
router.post('/registerpc', registerUser);
router.post('/registerps', registerPs);
router.post('/infopc/:id', infoPc);

// Definir a rotas de login
router.post('/loginpc', loginUser);
router.post('/loginps', loginPs);


export default router;
