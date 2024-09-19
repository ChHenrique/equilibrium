import Dhamyla_psicologa from "../../../assets/images/dhamyla_ivina.png";

export function Dhamyla_ivina(nome,foto,tempConsulta) {
    return(
        <div className="w-[75vw] h-auto bg-[#F1F5F9] rounded-2xl flex flex-col md:flex-row items-center p-4 md:p-6">

                <div className="h-32 w-32 md:h-40 md:w-40 ml-0 md:-ml-2 mb-4 md:mb-0">
                    <img
                        src={foto}
                        className="w-full h-full object-cover rounded-full"
                        alt="imagem_psicologo"
                    />
                </div>                                                                                   
                  
                <div className="flex flex-col flex-grow h-full ml-0 md:ml-4 p-2 md:p-1 mt-0">

                    <p className="text-xs md:text-sm font-poppins font-bold text-[#355081]">Nome</p>

                    <h1 className="text-[#355081] font-poppins font-semibold text-xl md:text-2xl underline">
                        Psi. {nome}
                    </h1>

                    <h3 className="mt-1 text-xs md:text-sm font-satoshi font-medium text-[#355081]">
                        <a href="#" className="flex items-center cursor-pointer">
                            Formação <svg
                                className="w-3 h-3 text-[#355081] ml-1"
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
                    </h3>

                    <h3 className="mt-1 text-xs md:text-sm font-satoshi font-medium text-[#355081]">
                        <a href="#" className="flex items-center cursor-pointer">
                            Tópicos Abordáveis <svg
                                className="w-3 h-3 text-[#355081] ml-1"
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
                    </h3>

                    <div className="w-full max-w-xs md:w-[6vw] h-[4vh] bg-[#E0F3E4] mt-4 rounded-md flex flex-col">
                        <h2 className="text-[#355081] text-xs font-satoshi font-semibold ml-1">Duração</h2>
                        <h3 className="text-[#355081] text-xs font-satoshi font-extrabold underline ml-1">{tempConsulta}</h3>
                    </div>
                </div>

                <aside className="flex-shrink-0 mt-auto ml-auto">
                    <button className="w-full max-w-xs md:w-[14vw] h-[4vh] bg-[#3B82F6] text-white rounded-lg font-poppins border border-[#85c9cd] hover:bg-[#24989e]">
                        Agendar consulta
                    </button>
                </aside>

            </div>
    )
}