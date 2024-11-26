
import React, { useState } from "react";

export function Psicologo({ nome, foto, tempConsulta, formação_psicologo, topicos,id }) {


    const [mouseFora, setMouseDentro] = useState(false)

    const [mouseDentroTopico, setMouseDentro_topico] = useState(false)

    const [topico, setTopico] = useState([])

    const nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1)

    const Valor_Topico = (e) => {
        setTopico((prevTopico) => [...prevTopico, e.target.value]);
      };


    return (
        <div className="w-[75vw] h-auto bg-[#F1F5F9] rounded-2xl flex flex-col md:flex-row max-sm:flex-row items-center p-4 md:p-6 max-sm:w-[87%] max-sm:h-[33%] justify-between max-sm:p-5 max-sm:space-x-4" draggable="false">

            {/* Div Foto psicologo e info psi */}
            <div className="flex flex-row h-full items-center w-[50%]">
                
            {/* Foto Psicólogo */}
            <div className="h-32 w-32 md:h-40 md:w-40 ml-0 md:-ml-2 mb-4 md:mb-0 max-sm:h-24 max-sm:w-24 max-sm:mr-0 flex-shrink-0">
                <img
                    draggable="false"
                    src={foto}
                    className="w-full h-full object-cover rounded-full max-sm:mt-2 max-sm:-translate-x-3"
                    alt="imagem_psicologo"
                />
            </div>

            {/* Informações Psicólogos */}
            <div className="flex flex-col h-full ml-0 md:ml-4 p-2 md:p-1 mt-0 max-sm:ml-2 max-sm:p-0 max-sm:mb-5 max-sm:-translate-x-3">
                <p className="text-xs md:text-sm font-poppins font-bold text-[#355081]">Nome</p>
                <h1 className="text-[#355081] font-poppins font-semibold text-xl md:text-2xl underline max-sm:text-[17px] whitespace-nowrap">
                    Psi. {nomeFormatado}
                </h1>

                <h3 className="mt-1 text-xs md:text-sm font-satoshi font-medium text-[#355081] relative max-sm:mt-0 ">
                    <a href="#" className="flex items-center cursor-pointer w-fit" onClick={() => setMouseDentro(!mouseFora)}>
                        Formação <svg
                            className={`w-3 h-3 text-[#355081] ml-1 relative transform -translate-y-1/5 transition-transform duration-300 ${mouseFora ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>
                    {mouseFora && (
                        <div className="w-fit h-fit bg-slate-200 absolute text-[#355081] rounded-lg p-1 text-xs font-poppins z-10">
                            {formação_psicologo}
                        </div>
                    )}
                </h3>

                <h3 className="mt-1 text-xs md:text-sm font-satoshi font-medium text-[#3c4961] relative whitespace-nowrap">
                    <a href="#" className="flex items-center cursor-pointer w-fit" onClick={() => setMouseDentro_topico(!mouseDentroTopico)}>
                        Tópicos Abordáveis <svg
                            className={`w-3 h-3 text-[#355081] ml-1 relative transform -translate-y-1/5 transition-transform duration-300 ${mouseDentroTopico ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>
                    {mouseDentroTopico && (
    <div className="w-fit h-fit  bg-slate-200 absolute text-[#3c4961] rounded-lg p-1 pr-6 text-xs font-poppins z-30 grid gap-1 grid-cols-4 max-sm:w-60">
        {(Array.isArray(topicos) ? topicos : []).map((topico, index) => (
            <div key={index} className="h-7 w-full border border-slate-600 rounded-xl p-1 text-center mx-3 my-1">
                {topico}
            </div>
        ))}
    </div>
)}
                </h3>

                <div className="w-full md:w-[6vw] h-[5vh] bg-[#E0F3E4] mt-3 rounded-md flex flex-col max-sm:h-fit max-sm:p-[0px] max-sm:flex-row max-sm:space-x-0 max-sm:-translate-y-3 max-sm:w-fit max-sm:mt-4">
                    <h2 className="text-[#355081] text-xs font-satoshi font-semibold ml-1 max-sm:p-1 max-sm:text-[11px] max-sm:ml-0 ">Duração:</h2>
                    <h3 className="text-[#355081] text-xs font-satoshi font-extrabold underline ml-1 max-sm:p-1 whitespace-nowrap max-sm:ml-0 max-sm:text-[11px]">{tempConsulta}</h3>
                </div>
            </div>
            </div>

            {/* Botão acessar consultas */}
            <aside className="flex-shrink-0 flex items-center h-full relativo">
                <a href={`/consulta?id=${id}`} className="mt-auto relativo w-[100%] max-sm:translate-y-3 max-sm:translate-x-4 z-10">
                <button
                    className="bg-primary-500 hover:bg-[#19376d] duration-500 text-white font-satoshi font-bold py-2 px-4 rounded-xl mt-auto max-sm:w-[100%] max-sm:text-[14px] max-sm:py-[2px] max-sm:px-[3px] whitespace-nowrap min-w-full max-sm:overflow-hidden max-sm:rounded-lg"
                    id="button_acessar_consulta"
                >
                   Agendar Consulta
                </button>
                </a>
            </aside>
        </div>
    );
}
