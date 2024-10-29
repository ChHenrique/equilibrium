import React, { useEffect, useState, useContext, createContext } from "react";
import { Psicologo } from "../componente_psicologos/info_psicologo1";
import { SearchContext } from "./seach_provider";

export const Search = createContext();

export function Seach_psicologos() {
    const [psicologos, setPsicologos] = useState([]); // Acessando psicólogos do contexto
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPsicologos = async () => {
            try {
                const response = await fetch("http://localhost:3000/user/psicologos");
                if (!response.ok) {
                    throw new Error("Erro ao buscar psicólogos");
                }
                const data = await response.json();
                console.log(data); // Verifique o que está sendo retornado
                setPsicologos(data); // Atualiza o contexto com os psicólogos
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPsicologos();
    }, [setPsicologos]);

    if (loading) {
        return <div>Carregando psicólogos...</div>;
    }

    if (error) {
        return <div>Erro: {error}</div>;
    }

    const formatarDuracao = (duracao) => {
        if (!duracao || typeof duracao !== 'string') {
            return 'Duração não disponível'; // ou algum valor padrão
        }

        const [horas, minutos] = duracao.split(':').map(Number);

        if (isNaN(horas) || isNaN(minutos)) {
            return 'Duração inválida';
        }

        if (horas > 0) {
            return minutos > 0 
                ? `${horas} hora${horas > 1 ? 's' : ''} e ${minutos} minuto${minutos > 1 ? 's' : ''}` 
                : `${horas} hora${horas > 1 ? 's' : ''}`;
        } else {
            return `${minutos} minuto${minutos > 1 ? 's' : ''}`;
        }
    };

    return (
        <section className="flex flex-col items-center space-y-10 w-[75vw] h-[80vh] mt-10 px-4 md:px-8">
            {psicologos.map(psicologo => {
                const formattedFotoUrl = psicologo.foto ? `http://localhost:3000/${psicologo.foto.replace(/\\/g, '/')}` : '';
                const duracaoFormatada = formatarDuracao(psicologo.duracao || '0:0'); // Usar '0:0' como padrão se duracao não estiver presente
                
                return (
                    <Psicologo
                        id={psicologo.id_psi}
                        key={psicologo.id_psi}
                        nome={psicologo.nome}
                        foto={formattedFotoUrl}
                        tempConsulta={duracaoFormatada}
                        formação_psicologo={psicologo.formacao}
                        topicos={psicologo.topicos}
                    />
                );
            })}
        </section>
    );
}
