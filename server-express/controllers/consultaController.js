// controllers/consultaController.js
import db from '../database/db.js';



export const consulta = async (req, res) => {
  const { id_paciente, data, horario, status = 'pendente' } = req.body;
  const id_psicologo = req.query.id; // Pega o ID do psicólogo dos query parameters

  if (!id_psicologo) {
    return res.status(400).json({ success: false, message: 'ID do psicólogo é obrigatório' });
  }

  try {
    const query = `
      INSERT INTO consultas (id_paciente, id_psicologo, data, horario, status)
      VALUES (?, ?, ?, ?, ?)
    `;
    const [result] = await db.execute(query, [id_paciente, id_psicologo, data, horario, status]);
    res.status(201).json({ success: true, consultaId: result.insertId, message: 'Consulta agendada com sucesso!' });
  } catch (error) {
    console.error('Erro ao agendar consulta:', error);
    res.status(500).json({ success: false, message: 'Erro ao agendar consulta' });
  }
};


// Função para buscar consultas por paciente
export const getConsultasPorPaciente = async (req, res) => {
  const pacienteId = req.params.id;

  try {
    const query = `
      SELECT consultas.*, psicologos.nome AS nome_psicologo 
      FROM consultas 
      JOIN psicologos ON consultas.id_psicologo = psicologos.id_psi 
      WHERE consultas.id_paciente = ?
    `;
    const [results] = await db.query(query, [pacienteId]);

    if (results.length === 0) {
      return res.status(404).json({ message: 'Consultas não encontradas para este paciente' });
    }

    res.json(results);
  } catch (error) {
    console.error('Erro ao buscar consultas do paciente:', error);
    return res.status(500).json({ message: 'Erro no servidor' });
  }
};

export const getConsultasPorPsicologo = async (req, res) => {
  const psicologoId = req.params.id;

  try {
    const query = `
      SELECT consultas.*, pacientes.nome AS nome_paciente 
      FROM consultas 
      JOIN pacientes ON consultas.id_paciente = pacientes.id 
      WHERE consultas.id_psicologo = ?
    `;
    const [results] = await db.query(query, [psicologoId]);

    if (results.length === 0) {
      return res.status(404).json({ message: 'Consultas não encontradas para este psicólogo' });
    }

    res.json(results);
  } catch (error) {
    console.error('Erro ao buscar consultas do psicólogo:', error);
    return res.status(500).json({ message: 'Erro no servidor' });
  }
};

