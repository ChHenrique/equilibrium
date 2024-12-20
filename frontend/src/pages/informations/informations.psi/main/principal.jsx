import React, { useState, useEffect } from 'react';
import { Info } from "./sections/infomações_pessoais.jsx";
import { InfoPsi } from "./sections/infomações_psicologo.jsx";
import { Footer_MobilePsi } from "../../../../components/Fotter_M_Psi.jsx"
import { useLocation } from 'react-router-dom'

// Array de botões com ícones SVG
const button = [
    {
        id: 1,
        nome: "Informações Pessoais",
        img: (
            <svg width="24" height="30" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34 38V34C34 31.8783 33.1571 29.8434 31.6569 28.3431C30.1566 26.8429 28.1217 26 26 26H10C7.87827 26 5.84344 26.8429 4.34315 28.3431C2.84285 29.8434 2 31.8783 2 34V38M26 10C26 14.4183 22.4183 18 18 18C13.5817 18 10 14.4183 10 10C10 5.58172 13.5817 2 18 2C22.4183 2 26 5.58172 26 10Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        id: 2,
        nome: "Informações Psicólogo",
        img: (
            <svg width="24" height="30" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                <path d="M22 36.6667L31.7778 26.8889L28.3556 23.4667L24.4444 27.3778V17.1111H19.5556V27.3778L15.6444 23.4667L12.2222 26.8889L22 36.6667ZM4.88889 12.2222V39.1111H39.1111V12.2222H4.88889ZM4.88889 44C3.54444 44 2.38333 43.5315 1.40556 42.5944C0.468519 41.6167 0 40.4556 0 39.1111V8.61667C0 8.0463 0.081482 7.4963 0.244445 6.96667C0.448149 6.43704 0.733334 5.94815 1.1 5.5L4.15556 1.77222C4.6037 1.20185 5.1537 0.774074 5.80555 0.488888C6.49815 0.162963 7.21111 0 7.94444 0H36.0556C36.7889 0 37.4815 0.162963 38.1333 0.488888C38.8259 0.774074 39.3963 1.20185 39.8444 1.77222L42.9 5.5C43.2667 5.94815 43.5315 6.43704 43.6944 6.96667C43.8981 7.4963 44 8.0463 44 8.61667V39.1111C44 40.4556 43.5111 41.6167 42.5333 42.5944C41.5963 43.5315 40.4556 44 39.1111 44H4.88889ZM5.86667 7.33333H38.1333L36.0556 4.88889H7.94444L5.86667 7.33333Z" stroke="currentColor" fill="currentColor" strokeWidth="0.5" />
            </svg>
        )
    }
];

const nome = localStorage.getItem('usuarioNome') || "Usuário";
const id = localStorage.getItem('id');

export function Principal() {
    const [idAtivado, SetIdAtivado] = useState(1);
    const [imagem, setImagem] = useState(null);
    const [dataCriacaoConta, setDataCriacaoConta] = useState('');
    const Location = useLocation()

    // Função para formatar a data em dd/mm/yyyy
    const formatarData = (dataString) => {
        const data = new Date(dataString);
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0'); // Os meses começam em 0
        const ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    };

    // Função para buscar dados do psicólogo
    useEffect(() => {
        const fetchDadosPsicologo = async () => {
            try {
                const response = await fetch(`http://localhost:3000/user/psicologos/${id}`);
                const data = await response.json();

                // Verifica se a data_criacao existe e é um valor válido
                if (data.data_criacao) {
                    const dataFormatada = formatarData(data.data_criacao);
                    setDataCriacaoConta(dataFormatada);
                } else {
                    console.error("Campo data_criacao não encontrado na resposta da API.");
                }
            } catch (error) {
                console.error("Erro ao buscar dados do psicólogo:", error);
            }
        };

        fetchDadosPsicologo();
    }, []);

    const handleImageChange = (e) => { setImagem(e.target.files[0]); };

    useEffect(() => {
        if (Location.state && Location.state.idAtivado){
            SetIdAtivado(Location.state.idAtivado)
        }
    }, [Location.state])

    const renderContent = () => {
        switch (idAtivado) {
            case 1:
                return <Info imagem={imagem} onChange={handleImageChange} nome={nome} id_psi={` ${id}`} diaConta={dataCriacaoConta} />;
            case 2:
                return <InfoPsi imagem={imagem} onChange={handleImageChange} nome={nome} id_psi={` ${id}`}/>; 
            default:
                return null;
        }
    };

    return (
        <div className="w-[90vw] h-[80vh] flex justify-center items-center space-x-5 mt-2 max-md:w-full max-md:h-full max-md:mr-[50%] max-md:ml-[45%] max-md:mt-8 max-lg:w-[97vw] max-lg:h-[43vh] max-2xl:h-[560px] overflow-visible max-md:overflow-y-visible max-md:min-h-fit">
            <div className="w-fit h-full bg-white mr-auto rounded-2xl flex flex-col items-center max-md:hidden p-1 max-lg:h-full max-xl:h-full " id="barra">
                {button.map((botao) => (
                    <button key={botao.id} className="w-full ml-5" onClick={() => SetIdAtivado(botao.id)}>
                        <div className={`bg-[#8CB3FF] w-11/12 h-12 mt-3 rounded-xl flex justify-evenly items-center font-poppins text-[#465A7F] font-medium text-sm transition-colors duration-300 ease-in-out transform p-1 text-nowrap ${idAtivado === botao.id
                            ? "bg-primary-200 text-white"
                            : "bg-white text-primary-700 hover:bg-primary-300 hover:text-white"
                        }`}>
                            {botao.img} <span className="ml-4 max-lg:ml-1">{botao.nome}</span>
                        </div>
                    </button>
                ))}
            </div>

            <div className="h-full w-[100%] bg-white rounded-2xl flex items-center max-lg:h-[70%]">
                {renderContent()}
            </div>
            <Footer_MobilePsi />
        </div>
    );
}
