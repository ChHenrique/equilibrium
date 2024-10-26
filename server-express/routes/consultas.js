// routes/consultas.js
import express from 'express';
import { consulta } from '../controllers/consultaController.js';

const router = express.Router();

router.post('/consulta', consulta);

export default router;
