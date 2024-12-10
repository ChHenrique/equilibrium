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
    const mes = String(data.getUTCMonth() + 1).padStart(2, '0');
    const ano = data.getUTCFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  const formatarHorario = (horarioString) => {
    return horarioString.substring(0, 5);
  };

  const formatarDuracao = (duracaoString) => {
    const [horas, minutos] = duracaoString.split(':').map(Number);
    return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}`;
  };

  useEffect(() => {
    const fetchConsultas = async () => {
      const idPaciente = localStorage.getItem("id");
  
      try {
        const response = await fetch(`http://localhost:3000/consulta/paciente/${idPaciente}`);
        if (!response.ok) {
          throw new Error("Erro ao buscar consultas.");
        }
  
        const data = await response.json();
  
        const consultasComDetalhes = await Promise.all(data.map(async (consulta) => {
          const psicologoResponse = await fetch(`http://localhost:3000/user/psicologos/${consulta.id_psicologo}`);
          const psicologoData = await psicologoResponse.json();
  
          const fotoResponse = await fetch(`http://localhost:3000/user/psicologos/${consulta.id_psicologo}/foto`);
          const fotoData = await fotoResponse.json(); // Obtem o objeto com a propriedade "foto"
          const fotoPath = fotoData.foto.replace(/\\/g, "/"); // Substitui \ por /
          
  
          return {
            ...consulta,
            psicologoNome: psicologoData.nome,
            fotoPsicologo: fotoPath,
            dataFormatada: formatarData(consulta.data),
            horarioFormatado: formatarHorario(consulta.horario),
            duracaoFormatada: formatarDuracao(consulta.duracao),
          };
        }));
  
        setConsultas(consultasComDetalhes);
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
    <div className="w-full h-full flex items-center flex-col max-md:bg-primary-300 min-w-fit">
      <div className="w-[95%] h-16 flex justify-between max-md:flex-col items-start m-6 ">
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
      <div className="grid justify-center translate-y-10  w-full h-full p-8 max-md:p-0 overflow-x-clip overflow-y-scroll grid-cols-4 max-lg:grid-cols-1 max-xl:grid-cols-2 max-md:grid-cols-1 grid-flow-row max-md:flex max-md:justify-start max-md:items-center max-md:flex-col items-start max-md:gap-2">


        {consultas.length === 0 ? (
          <p>Nenhuma consulta encontrada.</p>
        ) : (
          consultas.map((consulta) => (
            <ConsultasPsicologos
              key={consulta.id}
              nome={`${consulta.psicologoNome}`}
              date={consulta.dataFormatada}
              horario={consulta.horarioFormatado}
              duracao={consulta.duracaoFormatada}
              foto={`http://localhost:3000/${consulta.fotoPsicologo}`} // Caminho correto
            />
          ))
          
          
        )}
      </div>
    </div>
  );
}
