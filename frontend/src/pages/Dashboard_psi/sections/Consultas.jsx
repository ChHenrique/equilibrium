import React, { useState, useEffect } from "react";
import { ConsultasPacientes } from "./Components/consult_user";
import nullimg from '../../../assets/images/user_null.svg';


export function Consultas() {
  const [consultas, setConsultas] = useState([]);
  const [pesq, setPesq] = useState("");
  const [confirmCancel, setConfirmCancel] = useState(null); // Estado para controlar a confirmação de cancelamento
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
            // Atualiza diretamente o estado sem necessidade de recarregar
            setConsultas((prevConsultas) =>
                prevConsultas.map((consulta) =>
                    consulta.id === consultaId
                        ? { ...consulta, status: "confirmada", accept: 0 } // Atualiza o status e remove a possibilidade de aceitar novamente
                        : consulta
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
      setConfirmCancel(null);
    }
  };

  const cancelarCancelamento = () => {
    setConfirmCancel(null);
    setConsultaCancelada(null);
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
  
        const consultasComFotos = await Promise.all(
          data.map(async (consulta) => {
            try {
              const fotoResponse = await fetch(
                `http://localhost:3000/user/pacientes/${consulta.id_paciente}/foto`
              );
              const fotoData = await fotoResponse.json();
        
              const fotoPath = fotoData.foto
  ? `http://localhost:3000/${fotoData.foto.replace(/\\/g, "/")}`
  : nullimg;

        
              const duracaoFormatada = consulta.duracao.slice(0, 5);
              const horarioFormatado = consulta.horario.slice(0, 5);
              const dataConsulta = new Date(consulta.data);
              const dataAtual = new Date();
              const mesmaData = dataConsulta.toLocaleDateString() === dataAtual.toLocaleDateString();

              console.log("Foto path:", fotoPath);
              console.log("Foto data:", fotoData);


        
              let able = 0;
              let accept = 0;
              let join = 1;
        
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
                fotoPaciente: fotoPath,
                able,
                accept,
                join
              };
            } catch (err) {
              console.error(`Erro ao buscar foto do paciente ${consulta.id_paciente}:`, err);
              return {
                ...consulta,
                fotoPaciente: nullimg, // Define a imagem padrão em caso de erro
              };
            }
          })
        );
        
  
        setConsultas(consultasComFotos);
      } catch (error) {
        console.error("Erro ao buscar consultas:", error);
      }
    }
  
    fetchConsultas();

    
  
    const intervalId = setInterval(fetchConsultas, 30000);
  
    return () => clearInterval(intervalId);
  }, []);
  


// Filtro para o campo de pesquisa
const consultasFiltradas = consultas.filter((consulta) => {
  const nomePaciente = consulta.nome_paciente?.toLowerCase() || "";
  const pesquisa = pesq.toLowerCase();
  // Filtra consultas com status diferente de "cancelada" e "realizada"
  return nomePaciente.includes(pesquisa) && !["cancelada", "realizada"].includes(consulta.status);
});


  return (
    <div className="w-full h-full flex items-center flex-col max-md:bg-primary-300 min-w-fit ">
      <div className="w-[95%] h-16 flex justify-between max-md:flex-col items-start m-6 max-md:bg-primary-300 ">
        <h1 className="text-2xl ml-2 mt-2  max-md:text-4xl max-md:font-bold  text-primary-700 font-medium mb-6">Consultas</h1>
        <div className=" w-full flex-row flex mac-md:justify-start justify-end items-end max-md:p-2">
        <input
          type="text"
          className="max-md:w-full w-1/2 h-12 max-md:h-10 rounded-xl bg-secondary-100 max-md:bg-white placeholder:text-primary-700 placeholder:p-2 border-none outline-1 outline-slate-300 p-2 placeholder-primary-700"
          placeholder="Pesquisar..."
          value={pesq}
          onChange={pegavalor}
        />
        <button className="h-12 aspect-square max-md:h-10 rounded-xl max-md:bg-white  bg-secondary-100 items-center justify-center flex ml-2 text-primary-700 hover:bg-slate-300 duration-300 transition">
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
      <div className="grid justify-center  place-items-center max-md:translate-y-10  items-start w-full h-full  max-md:p-0
      px-2 overflow-x-clip overflow-y-scroll grid-cols-4 max-lg:grid-cols-1 max-xl:grid-cols-2 max-md:grid-cols-1 grid-flow-row max-md:flex max-md:justify-start max-md:items-center max-md:flex-col gap-2">
        {consultasFiltradas.map((consulta) => (
          <ConsultasPacientes
          key={consulta.id}
          nome={consulta.nome_paciente}
          date={new Date(consulta.data).toLocaleDateString("pt-BR")}
          horario={consulta.horario}
          duracao={consulta.duracao}
          foto={consulta.fotoPaciente || nullimg} // Fallback redundante para segurança
          able={consulta.able}
          accept={consulta.accept}
          join={consulta.join}
          onConfirm={() => handleConfirmarConsulta(consulta.id)}
          onCancel={() => {
            setConsultaCancelada(consulta.id);
            setConfirmCancel(true);
          }}
        />
        
        ))}
      </div>

      {confirmCancel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <p>Tem certeza que deseja cancelar essa consulta?</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={confirmarCancelamento}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Sim
              </button>
              <button
                onClick={cancelarCancelamento}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg"
              >
                Não
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="h-14"></div>
    </div>
  );
}
