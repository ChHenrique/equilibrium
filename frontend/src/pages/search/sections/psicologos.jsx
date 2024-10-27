import React, { useEffect, useState } from "react";
import { Psicologo } from "../componente_psicologos/info_psicologo1";

export function Seach_psicologos() {
    const [psicologos, setPsicologos] = useState([]); // armazenar os psicólogos
    const [loading, setLoading] = useState(true); // controle no carregamento
    const [error, setError] = useState(null); // erros

    useEffect(() => {
        const fetchPsicologos = async () => {
            try {
                const response = await fetch("http://localhost:3000/user/psicologos");
                if (!response.ok) {
                    throw new Error("Erro ao buscar psicólogos");
                }
                const data = await response.json();
                setPsicologos(data); // armazena os dados
            } catch (err) {
                setError(err.message); // armazena a mensagem de erro
            } finally {
                setLoading(false); // remove o carregamento
            }
        };

        fetchPsicologos();
    }, []); // chama a função uma vez quando o componente for montado

    if (loading) {
        return <div>Carregando psicólogos...</div>; // mensagem de carregamento
    }

    if (error) {
        return <div>Erro: {error}</div>; // mensagem de erro
    }

    return (
        <section className="flex flex-col items-center space-y-10 w-[75vw] h-[80vh] mt-10 px-4 md:px-8">
            {psicologos.map(psicologo => (
                <Psicologo
                    key={psicologo.id_psi} 
                    nome={psicologo.nome} 
                    foto={psicologo.foto} 
                    tempConsulta={psicologo.tempConsulta} 
                    formação_psicologo={psicologo.formação} 
                    topico1={psicologo.topico1}
                    topico2={psicologo.topico2}
                />
            ))}
        </section>
    );
}
