import { useEffect, useState } from "react";
import { ConsultasPacientes } from "./Components/consult_user";

export function Historico() {
  const [pesq, setPesq] = useState(""); // Para o campo de pesquisa
  const [consultas, setConsultas] = useState([]); // Para armazenar as consultas
  const [fotos, setFotos] = useState({}); // Para armazenar as URLs das fotos dos pacientes

  const idPsicologo = localStorage.getItem("id");

  useEffect(() => {
    async function fetchConsultas() {
      const idPsicologo = localStorage.getItem("id");
  
      if (!idPsicologo) {
        console.error("ID do psicólogo não encontrado no localStorage.");
        return;
      }
  
      try {
        const response = await fetch(`http://localhost:3000/consultas/psicologos/${idPsicologo}`);
        if (!response.ok) {
          throw new Error("Erro ao buscar as consultas");
        }
        const data = await response.json();
  
        const consultasComFotos = await Promise.all(
          data.map(async (consulta) => {
            try {
              const fotoResponse = await fetch(
                `http://localhost:3000/user/pacientes/${consulta.id_paciente}/foto`
              );
              const fotoData = await fotoResponse.json();
        
              // Verifica se há foto e corrige o caminho
              const fotoPath = fotoData.foto
                ? `http://localhost:3000/${fotoData.foto.replace(/\\/g, "/")}`
                : "uploads/user_null.svg";
        
              console.log("Foto para consulta:", {
                consultaId: consulta.id,
                pacienteId: consulta.id_paciente,
                fotoPath,
              });
        
              return {
                ...consulta,
                foto: fotoPath, // Adiciona a URL da foto ao objeto consulta
              };
            } catch (err) {
              console.error(`Erro ao buscar foto do paciente ${consulta.id_paciente}:`, err);
              return {
                ...consulta,
                foto: "uploads/user_null.svg", // Adiciona um fallback em caso de erro
              };
            }
          })
        );
  
        setConsultas(consultasComFotos);
      } catch (error) {
        console.error(error);
      }
    }
  
    fetchConsultas();
  }, []);
  
  function handleSearch(e) {
    setPesq(e.target.value);
  }

  const filteredConsultas = consultas.filter((consulta) => {
    const isValidStatus = consulta.status === "cancelada" || consulta.status === "realizada";
    const matchesSearch = pesq
      ? consulta.nome_paciente?.toLowerCase().includes(pesq.toLowerCase())
      : true;

    return isValidStatus && matchesSearch;
  });

  // Função para formatar os dados
  function formatarData(data) {
    const date = new Date(data);
    return date.toLocaleDateString("pt-BR");
  }

  function formatarHora(horario) {
    return horario.slice(0, 5); // Retorna apenas HH:mm
  }

  function formatarDuracao(duracao) {
    return duracao.slice(0, 5); // Retorna apenas HH:mm
  }

  return (
    <div className="w-full h-full flex items-center flex-col max-md:bg-primary-300">
      <div className="w-[95%] h-16 flex justify-between max-md:flex-col items-start m-6 ">
        <h1 className="text-2xl ml-2 max-md:text-4xl mt-2 max-md:font-bold text-primary-700 font-medium mb-6">
          Histórico
        </h1>
        <div className="w-full flex-row flex max-md:justify-start justify-end items-end max-md:p-2">
          <input
            type="text"
            className="w-1/3 max-md:w-full h-12 max-md:h-10 rounded-xl max-md:bg-white bg-secondary-100 placeholder: text-primary-700 placeholder:p-2 border-none outline-1 outline-slate-300 p-2 placeholder-primary-700"
            placeholder="Pesquisar..."
            value={pesq}
            onChange={handleSearch}
          />
          <button className="h-12 max-md:h-10 aspect-square rounded-xl max-md:bg-white bg-secondary-100 items-center justify-center flex ml-2 text-primary-700 duration-300 transition hover:bg-slate-300">
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
      <div className="grid justify-center items-start w-full h-full p-8 overflow-x-clip overflow-y-scroll grid-cols-4 max-lg:grid-cols-1 max-xl:grid-cols-2 max-md:grid-cols-1 grid-flow-row max-md:flex max-md:justify-start max-md:items-center max-md:flex-col">
  {filteredConsultas.map((consulta) => (
    <ConsultasPacientes
      key={consulta.id}
      nome={consulta.nome_paciente}
      foto={consulta.foto} // Foto do paciente
      date={formatarData(consulta.data)} // Formata a data
      horario={formatarHora(consulta.horario)} // Formata o horário
      duracao={formatarDuracao(consulta.duracao)} // Formata a duração
      // Não passar `able`, `accept`, ou outros aqui
    />
  ))}
</div>

    </div>
  );
}
