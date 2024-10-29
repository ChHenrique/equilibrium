import React, { useContext, useState } from "react";
import { Psicologo } from "../componente_psicologos/info_psicologo1";
import { SearchContext } from "./seach_provider";

export function Seach_psicologos() {
    const { psicologos, loading, error } = useContext(SearchContext);
    const [inputSearch, setInputSearch] = useState('');
    const [selected, setSelected] = useState('');

    // Aplicando o filtro com base no input e seleção
    const filteredPsicologos = psicologos.filter(psicologo => {
        const matchesNome = psicologo.nome.toLowerCase().includes(inputSearch.toLowerCase());
        
        let matchesFiltro = true;
        if (selected === "tópicos") {
            matchesFiltro = psicologo.topicos.some(topico => 
                topico.toLowerCase().includes(inputSearch.toLowerCase())
            );
        } else if (selected === "tempo") {
            matchesFiltro = psicologo.tempConsulta;
        } else if (selected === "formação") {
            matchesFiltro = psicologo.formacao.toLowerCase() === inputSearch.toLowerCase();
        }

        return matchesNome && matchesFiltro;
    });

    const formatarDuracao = (duracao) => {
        const [horas, minutos] = duracao ? duracao.split(':').map(Number) : [0, 0];
        if (horas > 0) {
            return minutos > 0 
                ? `${horas} hora${horas > 1 ? 's' : ''} e ${minutos} minuto${minutos > 1 ? 's' : ''}` 
                : `${horas} hora${horas > 1 ? 's' : ''}`;
        }
        return `${minutos} minuto${minutos > 1 ? 's' : ''}`;
    };

    if (loading) return <div>Carregando psicólogos...</div>;
    if (error) return <div>Erro: {error}</div>;

    return (
        <section className="flex flex-col items-center space-y-10 w-[75vw] h-[80vh] mt-10 px-4 md:px-8">
            {/* Campo de pesquisa e dropdown */}
            <div className="w-full h-auto flex justify-center items-center space-x-4 mb-5">
                <input
                    type="text"
                    placeholder="Pesquisar..."
                    className="border bg-[#F1F5F9] w-full rounded-[6px] h-[4vh] pl-2 text-[#0c1859ea]"
                    onChange={(e) => setInputSearch(e.target.value)}
                />
                <select
                    onChange={(e) => setSelected(e.target.value)}
                    className="border border-[#F1F5F9] text-slate-600 h-[4vh] w-[10vw] bg-[#F1F5F9] rounded-[6px] pl-3"
                >
                    <option value="">Filtrar por...</option>
                    <option value="tópicos">Tópicos</option>
                    <option value="tempo">Tempo de Consulta</option>
                    <option value="formação">Formação</option>
                </select>
            </div>

            {/* Renderização dos componentes Psicologo filtrados */}
            {filteredPsicologos.map(psicologo => (
                <Psicologo
                    key={psicologo.id_psi}
                    id={psicologo.id_psi}
                    nome={psicologo.nome}
                    foto={`http://localhost:3000/${psicologo.foto.replace(/\\/g, '/')}`}
                    tempConsulta={formatarDuracao(psicologo.duracao || '0:0')}
                    formação_psicologo={psicologo.formacao}
                    topicos={psicologo.topicos}
                />
            ))}
        </section>
    );
}
