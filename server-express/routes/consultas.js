import express from 'express';
import { consulta, getConsultasPorPaciente, getConsultasPorPsicologo, atualizarStatusConsulta } from '../controllers/consultaController.js';

const router = express.Router();

router.post('/consulta', consulta);
router.get('/consulta/paciente/:id', getConsultasPorPaciente); // Nova rota
router.get('/consultas/psicologos/:id', getConsultasPorPsicologo)
router.put('/consultas/atualizarstatus/:id', atualizarStatusConsulta)

export default router;
 