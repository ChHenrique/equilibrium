import db from '../database/db.js';

export const consulta = async (req, res) => {
  const { id_paciente, id_psicologo, data, horario, status = 'pendente' } = req.body;

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
