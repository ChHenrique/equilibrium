import React, { useState } from "react";
import "./style.css"

export function Psicologo({ nome, foto, tempConsulta, formação_psicologo, topicos,id }) {


    const [mouseFora, setMouseDentro] = useState(false)

    const [mouseDentroTopico, setMouseDentro_topico] = useState(false)

    const [topico, setTopico] = useState([])

    const nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1)

    const Valor_Topico = (e) => {
        setTopico((prevTopico) => [...prevTopico, e.target.value]);
      };

    const MouseDentro = (e) => {
        e.preventDefault()
        setMouseDentro_topico(!mouseDentroTopico)
    }

    const MouseDentroFormação = (e) => {
        e.preventDefault()
        setMouseDentro(!mouseFora)
    }


    return (
        <div className="w-[75vw] h-auto overflow-y-visible bg-[#F1F5F9] rounded-2xl flex flex-col md:flex-row max-md:flex-row items-center p-4 md:p-6 max-md:w-[87%] max-md:h-36 justify-between max-md:p-5 max-md:space-x-4" draggable="false">

            {/* Div Foto psicologo e info psi */}
            <div className="flex flex-row h-full items-center w-[50%] relative z-40">
                
            {/* Foto Psicólogo */}
            <div className="h-32 w-32 md:h-40 md:w-40 ml-0 md:-ml-2 mb-4 md:mb-0 max-md:h-24 max-md:w-24 max-md:mr-0 flex-shrink-0">
                <img
                    draggable="false"
                    src={foto}
                    className="w-full h-full object-cover rounded-full max-md:mt-2 max-md:-translate-x-3"
                    alt="imagem_psicologo"
                />
            </div>

            {/* Informações Psicólogos */}
            <div className="flex flex-col h-full ml-0 md:ml-4 p-2 md:p-1 mt-0 max-md:ml-2 max-md:p-0 max-md:mb-0 max-md:-translate-x-3">
                <p className="text-xs md:text-md font-poppins font-bold text-[#355081]">Nome</p>
                <h1 className="text-[#355081] -z-10 font-poppins font-semibold text-xl md:text-2xl underline max-md:text-[17px] whitespace-nowrap">
                    Psi. {nomeFormatado}
                </h1>

                <h3 className="mt-1 text-xs md:text-md font-satoshi font-medium text-[#355081] relative max-md:mt-0 ">
                    <a href="#" className="flex items-center cursor-pointer w-fit" onClick={MouseDentroFormação}>
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
                        <div className="w-60 max-w-60 max-md:w-fit h-fit max-md:h-14 max-md:max-h-16 max-md:overflow-y-scroll bg-slate-200 absolute text-[#355081] rounded-md p-1 text-xs font-poppins z-10">
                            {formação_psicologo}
                        </div>
                    )}
                </h3>

                <h3 className="mt-1 text-xs md:text-md font-satoshi font-medium text-[#3c4961] relative whitespace-nowrap">
                    <a href="#" className="flex items-center cursor-pointer w-fit" onClick={MouseDentro}>
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
     <div className="w-96 max-h-20 overflow-x-hidden max-md:max-h-20 overflow-y-auto bg-slate-200 absolute text-[#3c4961] rounded-md p-1 pr-6 text-xs font-poppins z-50 grid gap-1 grid-cols-4 max-md:w-[250px] max-md:grid-cols-2  scrollbar-thin">
     {(Array.isArray(topicos) ? topicos : []).map((topico, index) => (
         <div key={index} className="h-7 w-full border border-slate-600 rounded-xl p-1 text-center mx-3 my-1 max-md:mx-1 max-md:white whitespace-normal">
             {topico}
         </div>
        ))}
    </div>
)}
                </h3>

                <div className="w-fit p-0.5 h-[5vh] bg-[#E0F3E4] mt-3 rounded-md flex flex-col max-md:h-11 max-md:p-0.5 max-md:flex-col max-md:space-x-0 max-md:-translate-y-3 max-md:w-fit max-md:mt-4">
                    <h2 className="text-[#355081] text-xs font-satoshi font-semibold ml-1 max-md:p-0 max-md:text-[11px] max-md:ml-0 ">Duração:</h2>
                    <h3 className="text-[#355081] text-xs font-satoshi font-extrabold underline ml-1 max-md:p-0 whitespace-break-spaces max-md:ml-0 max-md:text-[11px]">{tempConsulta}</h3>
                </div>
            </div>
            </div>

            {/* Botão acessar consultas */}
            <aside className="flex-shrink-0 flex items-center h-full">
                <a href={`/consulta?id=${id}`} className="mt-auto w-[100%] max-md:translate-y-3 max-md:translate-x-4">
                <button
                    className="bg-primary-500 hover:bg-[#19376d] duration-500 text-white font-satoshi font-bold py-2 px-4 rounded-xl mt-auto max-md:w-[100%] max-md:text-[14px] max-md:py-[2px] max-md:px-[3px] whitespace-nowrap min-w-full max-md:overflow-hidden max-md:rounded-md"
                    id="button_acessar_consulta"
                >
                   Agendar Consulta
                </button>
                </a>
            </aside>
        </div>
    );
}
