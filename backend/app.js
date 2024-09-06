require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const User = require('./models/User');

// Configuração do CORS
app.use(cors({
  origin: 'http://localhost:5173', // Substitua pelo URL do seu frontend se necessário
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Bem vindo a API!" });
});

app.get("/user/:id", checkToken, async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id, "-passwordHash");
  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado!" });
  }
  res.status(200).json({ user });
});

function checkToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "Acesso negado!" });

  try {
    const secret = process.env.SECRET;
    if (!secret) {
      throw new Error("Secret key not found");
    }
    jwt.verify(token, secret);
    next();
  } catch (err) {
    res.status(400).json({ msg: "O Token é inválido!", error: err.message });
  }
}

// Registro de usuário
app.post("/registro_pc", async (req, res) => {
  const { name, email, password, confirmpassword } = req.body;
  if (!name) return res.status(422).json({ msg: "O nome é obrigatório!" });
  if (!email) return res.status(422).json({ msg: "O email é obrigatório!" });
  if (!password) return res.status(422).json({ msg: "A senha é obrigatória!" });
  if (password !== confirmpassword) {
    return res.status(422).json({ msg: "A senha e a confirmação precisam ser iguais!" });
  }

  const userExists = await User.findOne({ email });
  if (userExists) return res.status(422).json({ msg: "Por favor, utilize outro e-mail!" });

  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  const user = new User({ name, email, passwordHash });

  try {
    await user.save();
    res.status(201).json({ msg: "Usuário criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// Login do paciente
app.post("/login_pc", async (req, res) => {
  const { email, password } = req.body;
  if (!email) return res.status(422).json({ msg: "O email é obrigatório!" });
  if (!password) return res.status(422).json({ msg: "A senha é obrigatória!" });

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ msg: "Usuário não encontrado!" });

  const checkPassword = await bcrypt.compare(password, user.passwordHash);
  if (!checkPassword) return res.status(422).json({ msg: "Senha inválida" });

  try {
    const secret = process.env.SECRET;
    if (!secret) {
      throw new Error("Secret key not found");
    }
    const token = jwt.sign({ id: user._id }, secret, { expiresIn: '1h' });
    res.status(200).json({ msg: "Autenticação realizada com sucesso!", token });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

mongoose.connect(
  `mongodb+srv://${dbUser}:${dbPassword}@users.3iivquk.mongodb.net/Users?retryWrites=true&w=majority&appName=Users`
)
.then(() => {
  console.log("Conectou ao banco!");
  app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
  });
})
.catch(err => console.log(err));
