import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Bolas } from "./bolas";
import DatePicker from 'react-datepicker';
import { registerLocale } from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR'; // Importa a localidade brasileira
import { Navigate } from "react-router-dom";

import '../index.css';
import 'react-datepicker/dist/react-datepicker.css';

export function Main() {
  registerLocale('pt-BR', ptBR);
  const Navigate = useNavigate()
  const [hour, setHour] = useState("");
  const [fdate, setfDate] = useState("");
  const id = localStorage.getItem('id');
  const [alerta, setAlerta] = useState({ visivel: false, mensagem: '' }); // Alterado para objeto

  const mostrarAlerta = (mensagem, tipo) => {
    setAlerta({ visivel: true, mensagem }); // Atualiza o estado com a mensagem
    setTimeout(() => 
      setAlerta({ visivel: false, mensagem: '' }, Navigate('/home/paciente')), 3000); // Esconde o alerta após 3 segundos
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [page, setPage] = useState(1);
  const [startDate, setStartDate] = useState(tomorrow);

  const location = useLocation(); // Obtém a localização atual
  const queryParams = new URLSearchParams(location.search);
  const id_psicologo = queryParams.get('id'); // Obtém o id do psicólogo da URL

  async function handleConfirm() {
    const formattedDate = `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()}`;
    const formattedHour = `${startDate.getHours()}:${startDate.getMinutes()}:${startDate.getSeconds()}`;

    if (formattedDate !== "" && formattedHour !== "" && id_psicologo) {
      const id_paciente = localStorage.getItem('id');
      const consultaData = {
        id_paciente,
        data: formattedDate,
        horario: formattedHour,
        status: 'pendente',
      };

      try {
        const response = await fetch(`http://localhost:3000/consulta?id=${id_psicologo}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(consultaData),
        });

        const result = await response.json();
        if (result.success) {
          mostrarAlerta(result.message, "sucesso"); // Exibe o alerta de sucesso
        } else {
          mostrarAlerta(result.message, "erro"); // Exibe o alerta de erro
        }
      } catch (error) {
        console.error('Erro ao agendar consulta:', error);
        mostrarAlerta('Erro ao agendar consulta', "erro"); // Exibe o alerta de erro
      }
    } else {
      mostrarAlerta('Por favor, preencha todos os campos e tente novamente.', "erro"); // Exibe o alerta de erro
    }
  }

  function Render() {
    if (page === 1) {
      return (
        <div className="w-full h-full flex justify-center items-center flex-col pb-[40%] max-md:pb-[60%]">
          <h1 className="font-satoshi-Regular text-3xl font-semibold text-primary-700 pb-16 text-center">Escolha a data de sua consulta</h1>
          <div className="flex flex-row justify-center items-center">
            <DatePicker
              open={true}
              minDate={tomorrow}
              showTimeSelect
              timeIntervals={15}
              timeFormat="HH:mm"
              locale="pt-BR"
              dateFormat="d/MM/y"
              className="items-center flex w-full rounded-xl max-md:bg-white p-1 font-poppins text-2xl border-primary-700 border-2 text-primary-700 outline-1 outline-primary-700"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            <svg className="w-7 p-0 -translate-x-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="w-full h-full p-0 m-0" d="M32 4V12M16 4V12M6 20H42M10 8H38C40.2091 8 42 9.79086 42 12V40C42 42.2091 40.2091 44 38 44H10C7.79086 44 6 42.2091 6 40V12C6 9.79086 7.79086 8 10 8Z" stroke="#46597f" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <button onClick={() => {
              if (startDate.getTime() > new Date().getTime()) {
                setPage(2);
              } else {
                alert("Por favor, selecione um horário futuro.");
              }
            }}>
              <svg className="w-8 max-md:bg-primary-200 text-primary-200 rounded-lg max-md:text-white aspect-square p-1" viewBox="0 0 28 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 41C5 41 23 27.7433 23 23C23 18.2564 5 5 5 5" stroke="currentColor" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </button>
          </div>
        </div>
      );
    } else if(page === 2){
      return (
        <div className="w-full h-full flex justify-center items-center flex-col">
          <h1 className="font-satoshi-Regular text-3xl font-semibold text-primary-700 pb-16 text-center">Você deseja solicitar essa consulta?</h1>
          <h1 className="font-satoshi-Regular text-2xl font-bold text-primary-700 p-2 border-2 border-primary-800 max-md:bg-blue-50 rounded-[16px] m-2 flex-row flex justify-center items-center">
            Data: {startDate.getUTCDate()} / {startDate.getUTCMonth() + 1}
            <svg width="30" height="30" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-4">
              <path d="M28 2V10M12 2V10M2 18H38M6 6H34C36.2091 6 38 7.79086 38 10V38C38 40.2091 36.2091 42 34 42H6C3.79086 42 2 40.2091 2 38V10C2 7.79086 3.79086 6 6 6Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </h1>
          <h1 className="font-satoshi-Regular text-2xl max-md:bg-blue-50 font-bold text-primary-700 p-2 border-2 border-primary-800 rounded-[16px] m-2 flex flex-row justify-center items-center">
            Hora: {startDate.getHours()} : {startDate.getUTCMinutes()}
            <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-4">
              <path d="M24 12V24L32 28M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </h1>
          <div className="w-full flex justify-center relative ">
            <button 
            className="h-fit text-2xl bg-primary-500 max-md:w-fit text-white p-2 rounded-[16px] m-12 font-bold hover:bg-primary-800 duration-300"
            onClick={handleConfirm}
          >
            Confirmar
          </button>

          {/* Exibição do alerta */}
          {alerta.visivel && (
            <div
              className={`p-2 rounded-lg transition-all duration-500 font-poppins absolute bottom-0 translate-y-5 ${alerta.visivel ? "bg-primary-200 text-white opacity-100" : "bg-red-500 text-white opacity-0"}`}
            >
              {alerta.mensagem}
            </div>
          )}
          </div>
        </div>
      );
    }else if(page == 0){
      window.location.href = '/psicologos'
    }
  }

  return (
    <div className="w-full h-full bg-white  max-md:bg-primary-300 rounded-2xl relative font-poppins">
      <Bolas />
      <button 
        className="absolute m-4"
        onClick={() => { if (page !== 0) setPage(page - 1); }}
      >
        <svg className="w-8 max-md:bg-primary-200 text-primary-200 rounded-lg max-md:text-white aspect-square p-1" viewBox="0 0 28 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23 5C23 5 5.00003 18.2567 5 23C4.99997 27.7436 23 41 23 41" stroke="currentColor" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </button>
  
      {Render()}
    </div>
  );
}
