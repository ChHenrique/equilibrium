// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authenticateToken = require('../middleware/authMiddleware');

// Rota de login
router.post('/login_pc', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ msg: 'Usuário não encontrado!' });

  const checkPassword = await bcrypt.compare(password, user.passwordHash);
  if (!checkPassword) return res.status(422).json({ msg: 'Senha inválida' });

  const token = jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: '1h' });
  res.status(200).json({ msg: 'Autenticação realizada com sucesso!', token });
});

// Rota protegida
router.get('/protected', authenticateToken, (req, res) => {
  res.status(200).json({ msg: 'Você está autenticado!', user: req.user });
});

module.exports = router;
