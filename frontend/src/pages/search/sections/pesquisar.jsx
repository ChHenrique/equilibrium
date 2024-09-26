import Pesquisar_logo from "../../../assets/images/pesquisar.svg"; // Importa o logo para o campo de pesquisa
import { useState } from 'react'; // Importa o hook useState do React para gerenciar o estado

export function Pesquisar() {
    // Estado para controlar se o dropdown está aberto ou fechado
    const [isOpen, setIsOpen] = useState(false);

    // Função para alternar o estado do dropdown
    const handleToggle = () => setIsOpen(!isOpen);

    // Função que seleciona o filtrar
    const [selected, setSelected] = useState('');

    return (
        <div className="flex items-center justify-center flex-col">
            {/* Container principal que alinha o input e o dropdown horizontalmente */}
            <div className="mt-5 w-full h-auto flex justify-center items-center space-x-4">
                
                {/* Container para o campo de pesquisa */}
                <div className="flex items-center bg-[#F1F5F9] rounded-[6px] w-[125vh] h-[4vh] p-1">
                    
                    {/* Campo de entrada de texto para pesquisa */}
                    <input
                        type="text"
                        placeholder="Pesquisar..."
                        className="border-none bg-[#F1F5F9] w-full rounded-l-[2xl] text-slate-600 font-poppins-200 text-xs placeholder:text-[#0c1859ea] focus:outline-none"
                    />
                    
                    {/* Ícone do logo de pesquisa */}
                    <img                                                     
                        src={Pesquisar_logo}
                        alt="logo_pesquisar"
                        className="w-5 h-5 ml-2"
                    />
                </div>

                {/* Container para o dropdown */}
                <div className="relative flex items-center">
                    
                    {/* Dropdown para filtrar opções */}
                    <select
                        onClick={handleToggle} // Alterna o estado do dropdown ao clicar
                        className="appearance-none border border-[#F1F5F9] text-slate-600 text-xs h-[4vh] w-[10vw] bg-[#F1F5F9] rounded-[6px] pl-3 pr-10 focus:outline-none"
                    >
                        <option className = "hover:bg-[#1d59cf]" value="">Filtrar por...</option>
                        <option value="psicologo-infantil">Psicólogo Infantil</option>
                        <option value="psicologo-casal">Psicólogo Casal</option>
                        <option value="psicologo-adulto">Psicólogo Adulto</option>
                    </select>
                    
                    {/* Ícone da seta para o dropdown */}
                    <svg
                        className={`absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}
