import Pesquisar_logo from "../../../assets/images/pesquisar.svg";
import { useState, useContext } from 'react'; 
import { SearchContext } from "./seach_provider"; // Certifique-se de que o caminho está correto

export function Pesquisar() {
    // Estado para controlar se o dropdown está aberto ou fechado
    const [isOpen, setIsOpen] = useState(false);

    // Função para alternar o estado do dropdown
    const handleToggle = () => setIsOpen(!isOpen);

    // Estado para o filtro selecionado e o input de pesquisa
    const [selected, setSelected] = useState('');
    const [inputSearch, setInputSearch] = useState('');

    // Informação do psicólogo do contexto
    const { psicologos } = useContext(SearchContext);

    // Filtrando psicólogos com base na pesquisa e na seleção
    const filteredPsicologos = psicologos.filter(psicologo => {
        const matchesNome = psicologo.nome.toLowerCase().includes(inputSearch.toLowerCase());
        
        let matchesFiltro = true; // Inicialmente verdadeiro

        // Se um filtro for selecionado
        if (selected === "tópicos") {
            matchesFiltro = psicologo.topicos.some(topico => 
                topico.toLowerCase().includes(inputSearch.toLowerCase())
            );
        } else if (selected === "tempo") {
            // Exemplo: filtrando por tempo de consulta, se necessário
            matchesFiltro = psicologo.tempConsulta
        } else if (selected === "formação") {
            // Exemplo: filtrando por formação, se necessário
            matchesFiltro = psicologo.formacao.toLowerCase() === inputSearch.toLowerCase();
        }

        return matchesNome && matchesFiltro;
    });

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
                        className="border-none bg-[#F1F5F9] w-full rounded-l-[2xl] text-[#0c1859ea] font-poppins-200 text-xs placeholder:text-[#0c1859ea] placeholder:font-medium focus:outline-none pl-2 font-poppins font-semibold "
                        onChange={(e) => setInputSearch(e.target.value)}
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
                        onChange={(e) => setSelected(e.target.value)} // Atualiza o filtro selecionado
                        className="appearance-none border border-[#F1F5F9] text-slate-600 text-xs h-[4vh] w-[10vw] bg-[#F1F5F9] rounded-[6px] pl-3 pr-10 focus:outline-none"
                    >
                        <option className="hover:bg-[#1d59cf]" value="">Filtrar por...</option>
                        <option value="tópicos">Tópicos</option>
                        <option value="tempo">Tempo de Consulta</option>
                        <option value="formação">Formação</option>
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

            {/* Exibir psicólogos filtrados */}
            <div className="mt-5">
                {filteredPsicologos.length > 0 ? (
                    filteredPsicologos.map(psicologo => (
                        <div key={psicologo.id_psi}>{psicologo.nome} - {psicologo.formacao}</div>
                    ))
                ) : (
                    <div>Nenhum psicólogo encontrado.</div>
                )}
            </div>
        </div>
    );
}
