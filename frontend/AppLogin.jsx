import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login_cliente from './Telas/login_cliente/login_cliente.jsx';
import Registrar_Cliente from './Telas/registrar_cliente/registrar_cliente.jsx';
import Registrar_psicologo from './Telas/registrar_psicologo/registrar_psicologo.jsx';
import Login_psicologo from './Telas/login_psicologo/login_psicologo.jsx';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/registrar-cliente" element={<Registrar_Cliente />} />
      <Route path="/registrar-psicologo" element={<Registrar_psicologo />} />
      <Route path="/login-psicologo" element={<Login_psicologo />} />
      <Route path="/" element={<Login_cliente />} />
    </Routes>
  );
}

export default App;
