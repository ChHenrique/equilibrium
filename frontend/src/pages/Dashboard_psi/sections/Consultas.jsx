import React, { useState, useEffect } from "react";
import { ConsultasPacientes } from "./Components/consult_user";

export function Consultas() {
  const [consultas, setConsultas] = useState([]);
  const [pesq, setPesq] = useState("");
  const [confirmCancel, setConfirmCancel] = useState(null);  // Estado para controlar a confirmação de cancelamento
  const [consultaCancelada, setConsultaCancelada] = useState(null); // Consulta a ser cancelada

  function pegavalor(e) {
    setPesq(e.target.value);
  }

  const handleConfirmarConsulta = async (consultaId) => {
    try {
      const response = await fetch(`http://localhost:3000/consultas/atualizarstatus/${consultaId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "confirmada" }),
      });

      if (response.ok) {
        // Atualiza a consulta no estado local após a confirmação
        setConsultas((prevConsultas) =>
          prevConsultas.map((consulta) =>
            consulta.id === consultaId ? { ...consulta, status: "confirmada" } : consulta
          )
        );
      } else {
        console.error("Erro ao atualizar o status da consulta.");
      }
    } catch (error) {
      console.error("Erro ao confirmar consulta:", error);
    }
  };

  const handleCancelarConsulta = async (consultaId) => {
    try {
      const response = await fetch(`http://localhost:3000/consultas/atualizarstatus/${consultaId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "cancelada" }),
      });

      if (response.ok) {
        // Atualiza a consulta no estado local após o cancelamento
        setConsultas((prevConsultas) =>
          prevConsultas.map((consulta) =>
            consulta.id === consultaId ? { ...consulta, status: "cancelada" } : consulta
          )
        );
      } else {
        console.error("Erro ao atualizar o status da consulta.");
      }
    } catch (error) {
      console.error("Erro ao cancelar consulta:", error);
    }
  };

  const confirmarCancelamento = () => {
    if (consultaCancelada) {
      handleCancelarConsulta(consultaCancelada);
      setConfirmCancel(null); // Reseta o estado de confirmação
    }
  };

  const cancelarCancelamento = () => {
    setConfirmCancel(null); // Reseta o estado de confirmação
    setConsultaCancelada(null); // Limpa a consulta a ser cancelada
  };

  useEffect(() => {
    async function fetchConsultas() {
      const idPsicologo = localStorage.getItem("id");

      if (!idPsicologo) {
        console.error("ID do psicólogo não encontrado no localStorage.");
        return;
      }

      try {
        const response = await fetch(`http://localhost:3000/consultas/psicologos/${idPsicologo}`);
        const data = await response.json();

        const consultasFormatadas = data.map(consulta => {
          const duracaoFormatada = consulta.duracao.slice(0, 5);
          const horarioFormatado = consulta.horario.slice(0, 5);
          const dataConsulta = new Date(consulta.data);
          const dataAtual = new Date();
          const mesmaData = dataConsulta.toLocaleDateString() === dataAtual.toLocaleDateString();

          let able = 0;
          let accept = 0;

          if (mesmaData) {
            const [horarioHora, horarioMinuto] = consulta.horario.split(":");
            const horarioConsulta = new Date(dataConsulta);
            horarioConsulta.setHours(horarioHora);
            horarioConsulta.setMinutes(horarioMinuto);

            const diffTime = horarioConsulta - dataAtual;
            const diffMinutos = diffTime / 60000;

            if (diffMinutos <= 10) {
              able = 1;
            }
          }

          if (consulta.status === "pendente") {
            accept = 1;
          }

          return {
            ...consulta,
            duracao: duracaoFormatada,
            horario: horarioFormatado,
            able,
            accept,
          };
        });

        // Filtra consultas com status diferente de "cancelada"
        setConsultas(consultasFormatadas.filter(consulta => consulta.status !== "cancelada"));
      } catch (error) {
        console.error("Erro ao buscar consultas:", error);
      }
    }

    fetchConsultas();

    // Atualiza as consultas a cada 30 segundos para verificar mudanças
    const intervalId = setInterval(fetchConsultas, 500); // 30 segundos

    // Limpeza do intervalo ao desmontar o componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full h-full flex items-center flex-col">
      <div className="w-[95%] h-16 flex justify-end m-4">
        <input
          type="text"
          className="w-1/3 h-12 rounded-xl bg-secondary-100 placeholder:text-primary-700 placeholder:p-2 border-none outline-1 outline-slate-300 p-2 placeholder-primary-700"
          placeholder="Pesquisar..."
          value={pesq}
          onChange={pegavalor}
        />
      </div>

      <div className="grid justify-center items-start w-full h-full p-8 overflow-y-scroll grid-cols-5 grid-flow-row">
        {consultas.map((consulta) => (
          <ConsultasPacientes
            key={consulta.id}
            nome={consulta.nome_paciente}
            date={new Date(consulta.data).toLocaleDateString("pt-BR")}
            horario={consulta.horario}
            duracao={consulta.duracao}
            able={consulta.able}  // Passando able como prop
            accept={consulta.accept}  // Passando accept como prop
            onConfirm={() => handleConfirmarConsulta(consulta.id)} // Passando a função para o botão "Sim"
            onCancel={() => {
              // Define a consulta a ser cancelada
              setConsultaCancelada(consulta.id);
              setConfirmCancel(true); // Exibe o modal de confirmação
            }}  // Passando a função para o botão "Não"
          />
        ))}
      </div>

      {/* Modal de confirmação para cancelar a consulta */}
      {confirmCancel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <p>Tem certeza que deseja cancelar essa consulta?</p>
            <div className="flex justify-between mt-4">
              <button onClick={confirmarCancelamento} className="px-4 py-2 bg-red-500 text-white rounded-lg">Sim</button>
              <button onClick={cancelarCancelamento} className="px-4 py-2 bg-gray-500 text-white rounded-lg">Não</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
