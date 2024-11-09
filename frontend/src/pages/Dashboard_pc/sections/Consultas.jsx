import { useEffect, useState } from "react";
import { ConsultasPsicologos } from "./Components/consult_user";

export function Consultas() {
  const [consultas, setConsultas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pesq, setPesq] = useState("");

  function pegavalor(e) {
    setPesq(e.target.value);
  }

  const formatarData = (dataString) => {
    const data = new Date(dataString);
    const dia = String(data.getUTCDate()).padStart(2, '0');
    const mes = String(data.getUTCMonth() + 1).padStart(2, '0'); // Mês começa em 0
    const ano = data.getUTCFullYear();
    return `${dia}/${mes}/${ano}`; // Modificado para usar '/' em vez de '-'
};


  const formatarHorario = (horarioString) => {
    return horarioString.substring(0, 5); // Pega apenas hh:mm
  };

  const formatarDuracao = (duracaoString) => {
    const partes = duracaoString.split(':');
    const minutos = parseInt(partes[0]) * 60 + parseInt(partes[1]);
    return `${minutos} minutos`;
  };

  useEffect(() => {
    const fetchConsultas = async () => {
      const idPaciente = localStorage.getItem("id");

      try {
        const response = await fetch(`http://localhost:3000/consulta/paciente/${idPaciente}`);
        if (!response.ok) {
          throw new Error("");
        }

        const data = await response.json();
        // Agora vamos buscar os nomes dos psicólogos para cada consulta
        const consultasComPsicologo = await Promise.all(data.map(async (consulta) => {
          const psicologoResponse = await fetch(`http://localhost:3000/user/psicologos/${consulta.id_psicologo}`);
          const psicologoData = await psicologoResponse.json();
          return {
            ...consulta,
            psicologoNome: psicologoData.nome,
            dataFormatada: formatarData(consulta.data),
            horarioFormatado: formatarHorario(consulta.horario),
            duracaoFormatada: formatarDuracao(consulta.duracao),
          };
        }));

        setConsultas(consultasComPsicologo);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchConsultas();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

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
      <div className="grid justify-start items-start w-full h-full p-8 overflow-x-clip overflow-y-scroll grid-cols-5 grid-flow-row">

  
        {consultas.length === 0 ? (
          <p>Nenhuma consulta encontrada.</p>
        ) : (
          consultas.map((consulta) => (
            <ConsultasPsicologos
              key={consulta.id}
              nome={`Psi. ${consulta.psicologoNome}`}
              date={consulta.dataFormatada} // Usando a data formatada
              horario={consulta.horarioFormatado} // Usando o horário formatado
              duracao={consulta.duracaoFormatada} // Usando a duração formatada
            />
          ))
        )}
      </div>
    </div>
  );
}
