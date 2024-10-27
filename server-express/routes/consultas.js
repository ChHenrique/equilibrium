import express from 'express';
import { consulta, getConsultasPorPaciente } from '../controllers/consultaController.js';

const router = express.Router();

router.post('/consulta', consulta);
router.get('/consulta/paciente/:id', getConsultasPorPaciente); // Nova rota

export default router;
