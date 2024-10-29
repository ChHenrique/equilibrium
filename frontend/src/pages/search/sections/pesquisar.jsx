import Pesquisar_logo from "../../../assets/images/pesquisar.svg";
import { useState, useContext } from 'react'; 
import { SearchContext } from "./seach_provider"; // Certifique-se de que o caminho está correto

export function Pesquisar() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('');
    const [inputSearch, setInputSearch] = useState('');

    // Informação do psicólogo do contexto
    const { psicologos } = useContext(SearchContext);

    // Filtrando psicólogos com base na pesquisa e na seleção
    const filteredPsicologos = psicologos.filter(psicologo => {
        const matchesNome = psicologo.nome.toLowerCase().includes(inputSearch.toLowerCase());
        
        let matchesFiltro = true;

        // Filtragem com base na seleção
        if (selected === "tópicos") {
            matchesFiltro = psicologo.topicos.some(topico => 
                topico.toLowerCase().includes(inputSearch.toLowerCase())
            );
        } else if (selected === "tempo") {
            matchesFiltro = psicologo.tempConsulta
        } else if (selected === "formação") {
            matchesFiltro = psicologo.formacao.toLowerCase() === inputSearch.toLowerCase();
        }

        return matchesNome && matchesFiltro;
    });

    return (
        <div className="flex items-center justify-center flex-col">
            {/* Container que alinha o input e o dropdown horizontalmente */}
            <div className="w-full h-auto flex justify-center items-center space-x-4">
                {/* Campo de pesquisa */}
                <div className="flex items-center bg-[#F1F5F9] rounded-[6px] w-[125vh] h-[4vh] p-1">
                    <input
                        type="text"
                        placeholder="Pesquisar..."
                        className="border-none bg-[#F1F5F9] w-full rounded-l-[2xl] text-[#0c1859ea] font-poppins-200 text-xs placeholder:text-[#0c1859ea] placeholder:font-medium focus:outline-none pl-2 font-poppins font-semibold"
                        onChange={(e) => setInputSearch(e.target.value)}
                    />
                    <img
                        src={Pesquisar_logo}
                        alt="logo_pesquisar"
                        className="w-5 h-5 ml-2"
                    />
                </div>

                {/* Dropdown para seleção do filtro */}
                <div className="relative flex items-center">
                    <select
                        onClick={() => setIsOpen(!isOpen)}
                        onChange={(e) => setSelected(e.target.value)}
                        className="appearance-none border border-[#F1F5F9] text-slate-600 text-xs h-[4vh] w-[10vw] bg-[#F1F5F9] rounded-[6px] pl-3 pr-10 focus:outline-none"
                    >
                        <option value="">Filtrar por...</option>
                        <option value="tópicos">Tópicos</option>
                        <option value="tempo">Tempo de Consulta</option>
                        <option value="formação">Formação</option>
                    </select>
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
            <div className="mt-3">
                {filteredPsicologos.length > 0 ? (
                    filteredPsicologos.map(psicologo => (
                        <div key={psicologo.id_psi} className="bg-gray-100 p-2 rounded-md my-2 shadow">
                            <h3 className="text-sm font-bold">{psicologo.nome}</h3>
                            <p className="text-xs text-gray-600">{psicologo.formacao}</p>
                        </div>
                    ))
                ) : (
                    <div className="text-sm text-gray-600">Nenhum psicólogo encontrado.</div>
                )}
            </div>
        </div>
    );
}
