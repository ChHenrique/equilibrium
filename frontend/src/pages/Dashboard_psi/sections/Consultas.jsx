import React, { useState, useEffect } from "react";
import { ConsultasPacientes } from "./Components/consult_user";

export function Consultas() {
  const [consultas, setConsultas] = useState([]);
  const [pesq, setPesq] = useState("");

  function pegavalor(e) {
    setPesq(e.target.value);
  }

  useEffect(() => {
    async function fetchConsultas() {
      const idPsicologo = localStorage.getItem("id"); // Pega o ID do localStorage
      
      if (!idPsicologo) {
        console.error("ID do psicólogo não encontrado no localStorage.");
        return;
      }

      try {
        const response = await fetch(`http://localhost:3000/consultas/psicologos/${idPsicologo}`);
        const data = await response.json();

        // Formatar a duração e horário para cada consulta
        const consultasFormatadas = data.map(consulta => {
          // Manter a duração no formato HH:MM
          const duracaoFormatada = consulta.duracao.slice(0, 5);

          // Formatar o horário para exibir apenas horas e minutos
          const horarioFormatado = consulta.horario.slice(0, 5);

          return {
            ...consulta,
            duracao: duracaoFormatada,
            horario: horarioFormatado
          };
        });

        setConsultas(consultasFormatadas);
      } catch (error) {
        console.error("Erro ao buscar consultas:", error);
      }
    }

    fetchConsultas();
  }, []);


  return (
    <div className="w-full h-full flex items-center flex-col">
      <div className="w-[95%] h-16 flex justify-end m-4">
      <div className="w-[95%] h-16 flex justify-end m-4">
        <input
          type="text"
          className="w-1/3 h-12 rounded-xl bg-secondary-100 placeholder:text-primary-700 placeholder:p-2 border-none outline-1 outline-slate-300 p-2 placeholder-primary-700"
          placeholder="Pesquisar..."
          value={pesq}
          onChange={pegavalor}
        />
        <button className="h-12 w-12 rounded-xl bg-secondary-100 items-center justify-center flex ml-2 text-primary-700 hover:bg-slate-300 duration-300 transition">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
          >
            <path
              d="M32 4V12M16 4V12M6 20H42M10 8H38C40.2091 8 42 9.79086 42 12V40C42 42.2091 40.2091 44 38 44H10C7.79086 44 6 42.2091 6 40V12C6 9.79086 7.79086 8 10 8Z"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      </div>

      <div className="grid justify-center items-start w-full h-full p-8 overflow-y-scroll grid-cols-5 grid-flow-row">


        {consultas.map((consulta) => (
          <ConsultasPacientes
            key={consulta.id}
            nome={consulta.nome_paciente}
            date={new Date(consulta.data).toLocaleDateString("pt-BR")}
            horario={consulta.horario}
            duracao={consulta.duracao}
          />
        ))}
      </div>
    </div>
  );
}
