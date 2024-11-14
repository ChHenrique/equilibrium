import express from 'express';
import { registerUser, loginUser, registerPs, loginPs, infoPc, updateDuracaoPsicologo } from '../controllers/authController.js'; 

const router = express.Router();

// Definir as rotas de registro
router.post('/registerpc', registerUser);
router.post('/registerps', registerPs);
router.post('/infopc/:id', infoPc);

// Definir a rotas de login
router.post('/loginpc', loginUser);
router.post('/loginps', loginPs);
router.post('/updateduracaopsicologo/:id', updateDuracaoPsicologo);


export default router;
