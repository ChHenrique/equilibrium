import React, { useEffect, useState } from "react";
import { Camp_Dash } from "./sections/Center.jsx";
import { Footer } from "../../components/footer.jsx";
import { HeaderLog } from "../../components/headerLog.jsx";
import axios from "axios";

export function Dashboard() {
    const [loading, setLoading] = useState(true); // Estado para controle de carregamento

    // Função para buscar o nome social do usuário
    const fetchNomeSocial = async () => {
        const token = localStorage.getItem('token'); // Pega o token do localStorage
        if (!token) {
            console.error("Erro: Nenhum token encontrado.");
            setLoading(false); // Define loading como false se não houver token
            return;
        }

        try {
            const response = await axios.get('http://localhost:3000/user/me', {
                headers: {
                    Authorization: `Bearer ${token}` // Adiciona o token no cabeçalho
                }
            });
            const nomeSocialCompleto = response.data.nome_social;
            const primeiroNome = nomeSocialCompleto.split(' ')[0];

            // Armazena o primeiro nome no localStorage
            localStorage.setItem('usuarioNome', primeiroNome);

            console.log('Nome Social Completo:', nomeSocialCompleto); // Debug
            console.log('Primeiro Nome:', primeiroNome); // Debug
        } catch (error) {
            console.error("Erro ao buscar nome social:", error.response ? error.response.data : error.message);
        } finally {
            setLoading(false); // Certifique-se de definir loading como false no final
        }
    };

    useEffect(() => {
        fetchNomeSocial();
    }, []);

    return (
        <div className="w-screen h-[120vh] bg-primary-300 justify-between flex items-center flex-col font-poppins overflow-x-hidden scrollbar-thin">
            <div className="w-screen h-fit flex justify-center items-center">
                {loading ? (
                    <p>Carregando...</p> // Exibe uma mensagem de carregamento
                ) : (
                    <HeaderLog /> // Renderiza HeaderLog apenas quando não está carregando
                )}
            </div>
            <div className="w-screen h-[70vh] flex justify-center items-center">
                <Camp_Dash />
            </div>
            <div className="w-screen h-fit flex justify-center items-center">
                <Footer />
            </div>
        </div>
    );
}
