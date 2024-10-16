import React, { useState} from "react";

export function Psicologo({ nome, foto, tempConsulta, formação_psicologo}) {

    const [mouseFora, setMouseDentro] = useState(false)

    const [mouseDentroTopico, setMouseDentro_topico] = useState(false)

    const [topico, setTopico] = useState([])

    const Valor_Topico = (e) => {
        setTopico((prevTopico) => [...prevTopico, e.target.value]);
      };


    return (
        <div className="w-[75vw] h-auto bg-[#F1F5F9] rounded-2xl flex flex-col md:flex-row items-center p-4 md:p-6" draggable="false">

            {/* Foto Psicologo */}
            <div className="h-32 w-32 md:h-40 md:w-40 ml-0 md:-ml-2 mb-4 md:mb-0">
                <img
                    draggable="false"
                    src={foto}
                    className="w-full h-full object-cover rounded-full"
                    alt="imagem_psicologo"
                />
            </div>

            {/* Informações Psicólogos */}

            <div className="flex flex-col flex-grow h-full ml-0 md:ml-4 p-2 md:p-1 mt-0">

                <p className="text-xs md:text-sm font-poppins font-bold text-[#355081]" draggable="false">Nome</p>

                <h1 className="text-[#355081] font-poppins font-semibold text-xl md:text-2xl underline" draggable="false">
                    Psi. {nome}
                </h1>

                <h3 className="mt-1 text-xs md:text-sm font-satoshi font-medium text-[#355081] relative" draggable="false">
                    <a href="#" draggable="true" className="flex items-center cursor-pointer w-fit"
                        onClick={() => setMouseDentro(!mouseFora)}>
                        Formação <svg
                            className={`w-3 h-3 text-[#355081] ml-1 relative transform -translate-y-1/5 transition-transform duration-300 ${mouseFora ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </a>
                    {mouseFora && (
                        <div className="w-fit h-fit bg-slate-200 absolute text-[#355081] rounded-lg p-1 text-xs font-poppins z-10">
                            {formação_psicologo}
                        </div>
                    )}
                </h3>

                <h3 className="mt-1 text-xs md:text-sm font-satoshi font-medium text-[#3c4961] relative">
                    <a href="#" draggable="false" className="flex items-center cursor-pointer w-fit"
                        onClick={() => setMouseDentro_topico(!mouseDentroTopico)}
                    >
                        Tópicos Abordáveis <svg
                            className={`w-3 h-3 text-[#355081] ml-1 relative transform -translate-y-1/5 transition-transform duration-300 ${mouseDentroTopico ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </a>
                    {mouseDentroTopico && (
                        <div className="w-fit h-9 bg-slate-200 absolute text-[#3c4961] rounded-lg p-1 text-xs font-poppins space-x-4 flex top-full left-0">
                            {topico.map((topico, index) => (
                                <div key={index} onChange={Valor_Topico} className="h-7 w-fit border border-slate-600 rounded-xl p-1 text-center">
                                    {topico}
                                </div>
                            ))}
                        </div>
                    )}
                </h3>

                <div  draggable="true" className="w-full max-w-xs md:w-[6vw] h-[4vh] bg-[#E0F3E4] mt-4 rounded-md flex flex-col ">
                    <h2 className="text-[#355081] text-xs font-satoshi font-semibold ml-1">Duração</h2>
                    <h3 className="text-[#355081] text-xs font-satoshi font-extrabold underline ml-1">{tempConsulta}</h3>
                </div>
            </div>
            
            {/* Botão acessar consultas */}
            <aside className="flex-shrink-0 flex items-center flex-col h-full">
                <a href="/calendario" className="mt-auto relativo">
                <button
                    className="bg-[#355081] hover:bg-[#19376d] text-white font-satoshi font-bold py-2 px-4 rounded-xl mt-auto relativo"
                    id="button_acessar_consulta"
                >
                    Agendar Consulta
                </button>
                </a>
            </aside>
        </div>


    );
}