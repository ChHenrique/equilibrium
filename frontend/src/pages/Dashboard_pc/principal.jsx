import React, { useEffect, useState, useContext } from "react";
import { Camp_Dash } from "./sections/Center.jsx";
import { Footer } from "../../components/footer.jsx";
import { HeaderLog } from "../../components/headerLog.jsx";
import { Footer_Mobile } from "../../components/footer_mobile.jsx";


import axios from "axios";


export function Dashboard() {
    const [pagstate,setPag] = useState(0)

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
        
        <div className="w-full h-[120vh] max-md:h-screen bg-primary-300 justify-between max-md:justify-end flex items-center flex-col font-poppins overflow-x-hidden scrollbar-thin">
            <div className="w-full h-fit flex justify-center items-center m-4 max-md:hidden ">
                {loading ? (
                    <p className="mt-8 text-xl font-poppins text-slate-700">Carregando...</p> // Exibe uma mensagem de carregamento
                ) : (
                    <HeaderLog className="overflow-hidden w-full" /> // Renderiza HeaderLog apenas quando não está carregando
                )}
            </div>
            <div className="w-10/12 max-md:w-full h-[80vh] max-md:h-screen flex justify-center items-center mt-8 max-md:pt-0">
                <Camp_Dash pagstate={pagstate} setPage={setPag} className="overflow-hidden"/>
            </div>
            <div className="w-10/12 h-fit flex justify-center items-center max-md:hidden">
                <Footer className="overflow-hidden"/>
            </div>
            <div className={`flex h-fit w-screen ${pagstate ? "hidden" : ""}`}>
            <Footer_Mobile/>
            </div>
        </div>
    );
}
