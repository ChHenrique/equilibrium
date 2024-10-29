import React, { useState, useEffect } from "react";
import { ConsultasPacientes } from "./Components/consult_user";

export function Consultas() {
  const [consultas, setConsultas] = useState([]);

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
          // Formatar a duração
          const [hours, minutes] = consulta.duracao.split(":").map(Number);
          const duracaoFormatada =
            hours > 0
              ? `${hours} hora${hours > 1 ? "s" : ""} e ${minutes} minuto${minutes > 1 ? "s" : ""}`
              : `${minutes} minuto${minutes > 1 ? "s" : ""}`;
          
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
        {/* Aqui você pode adicionar o campo de pesquisa */}
      </div>
      <div className="grid justify-start items-start w-full h-full p-8 overflow-y-scroll grid-cols-3 grid-flow-row">
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
