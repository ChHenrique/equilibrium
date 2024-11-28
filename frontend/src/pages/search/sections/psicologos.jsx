import React, { useEffect, useState, useContext } from "react";
import { Psicologo } from "../componente_psicologos/info_psicologo1";
import { SearchContext } from "./seach_provider";
import Pesquisar_logo from "../../../assets/images/pesquisar.svg"; // Certifique-se de que o caminho está correto
import { Footer_Mobile } from "../../../components/footer_mobile"

export function Seach_psicologos() {
    const { psicologos, loading, error, setPsicologos, setError } = useContext(SearchContext);
    const [inputSearch, setInputSearch] = useState('');
    const [selected, setSelected] = useState('nome'); // Valor padrão para o filtro
    const [isOpen, setIsOpen] = useState(false);

    // Filtrando psicólogos com base na pesquisa e na seleção
    const filteredPsicologos = psicologos.filter(psicologo => {
        if (inputSearch === '') {
            return true; // Retorna todos se não houver pesquisa
        }

        const valueToCheck = psicologo[selected.toLowerCase()];

        // Verifica se o valor existe e se inclui a pesquisa
        return valueToCheck && valueToCheck.toString().toLowerCase().includes(inputSearch.toLowerCase());
    });

    useEffect(() => {
        const fetchPsicologos = async () => {
            try {
                const response = await fetch("http://localhost:3000/user/psicologos");
                if (!response.ok) {
                    throw new Error("Erro ao buscar psicólogos");
                }
                const data = await response.json();
                setPsicologos(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchPsicologos();
    }, [setPsicologos, setError]);

    if (loading) return <div>Carregando psicólogos...</div>;
    if (error) return <div>Erro: {error}</div>;

    const formatarDuracao = (duracao) => {
        if (!duracao || typeof duracao !== 'string') {
            return 'Duração não disponível';
        }
        
        const [horas, minutos] = duracao.split(':').map(Number);
        
        if (isNaN(horas) || isNaN(minutos)) {
            return 'Duração inválida';
        }
    
        if (horas > 0) {
            return minutos > 0 
                ? `${horas} hora${horas > 1 ? 's' : ''} e ${minutos} min${minutos > 1 ? '' : ''}` 
                : `${horas} hora${horas > 1 ? 's' : ''}`;
        } else {
            return `${minutos} min${minutos > 1 ? '' : ''}`;
        }
    };

    return (
        <section className="flex flex-col items-center space-y-10 w-[85vw] h-[80vh] mt-10 px-4 md:px-8 max-md:w-[100vw] relative">
            <div className="flex items-center justify-center flex-col w-full">
                <div className="w-full h-auto flex justify-center items-center space-x-4">
                    <div className="flex items-center bg-[#F1F5F9] rounded-[6px] w-[68vw] h-[4vh] p-1 max-xl:w-[60vw]  max-2xl:w-[80%] max-md:h-9 ">
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

                    <div className="relative flex items-center">
                        <select
                            onClick={() => setIsOpen(!isOpen)}
                            onChange={(e) => {
                                setSelected(e.target.value);
                                setInputSearch(''); // Limpa a pesquisa ao mudar o filtro
                            }}
                            className="appearance-none border w-full border-[#F1F5F9] text-slate-600 text-xs h-[4vh]  bg-[#F1F5F9] rounded-[6px] pl-3 pr-10 focus:outline-none max-md:w-28 max-md:mr-1  max-lg: max-md:h-9"
                        >
                            <option value="">Filtrar por...</option>
                            <option value="nome">Nome</option>
                            <option value="topicos">Tópicos</option>
                            <option value="formacao">Formação</option>
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

                <div className="space-y-6 mt-5 flex flex-col items-center overflow-y-hidden">
                    {filteredPsicologos.length > 0 ? (
                        filteredPsicologos.map(psicologo => (
                            <Psicologo
                                key={psicologo.id_psi}
                                id={psicologo.id_psi}
                                nome={psicologo.nome}
                                foto={`http://localhost:3000/${psicologo.foto ? psicologo.foto.replace(/\\/g, '/') : 'uploads/user_null.svg'}`}
                                tempConsulta={formatarDuracao(psicologo.duracao || '0:0')}
                                formação_psicologo={psicologo.formacao}
                                topicos={psicologo.topicos}
                            />
                        ))
                    ) : (
                        <div className="text-md text-gray-600">Nenhum psicólogo encontrado.</div>
                    )}

                </div>
                <div className="h-[10vh]"></div>
            </div>
                    
                <Footer_Mobile className="fixed"/>
        </section>
    );
}
