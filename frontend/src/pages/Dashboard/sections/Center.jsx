import React, { useState } from "react";
import { Chats } from './Chats.jsx';
import { Consultas } from "./Consultas.jsx";
import { Historico } from "./Historico.jsx";

const botoes = [
    {
        id: 1,
        nome: "Consultas",
        img: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <path d="M32 4V12M16 4V12M6 20H42M10 8H38C40.2091 8 42 9.79086 42 12V40C42 42.2091 40.2091 44 38 44H10C7.79086 44 6 42.2091 6 40V12C6 9.79086 7.79086 8 10 8Z" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                />
            </svg>
        )
    },
    {
        id: 2,
        nome: "Chats",
        img: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <path d="M4 44V8C4 6.9 4.39167 5.95833 5.175 5.175C5.95833 4.39167 6.9 4 8 4H40C41.1 4 42.0417 4.39167 42.825 5.175C43.6083 5.95833 44 6.9 44 8V32C44 33.1 43.6083 34.0417 42.825 34.825C42.0417 35.6083 41.1 36 40 36H12L4 44ZM10.3 32H40V8H8V34.25L10.3 32Z" 
                    fill="currentColor" 
                />
            </svg>
        )
    },
    {
        id: 3,
        nome: "Histórico",
        img: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <path d="M30.8835 10.5L32.2025 9.77739L32.1408 9.6677L32.0614 9.56971L30.8835 10.5ZM33.001 16.4329C33.8025 16.6599 34.6376 16.2024 34.8663 15.411L38.5924 2.5145C38.821 1.72311 38.3566 0.897536 37.5551 0.670533C36.7535 0.443531 35.9184 0.901061 35.6897 1.69246L32.3777 13.156L20.7671 9.86784C19.9656 9.64083 19.1304 10.0984 18.9018 10.8898C18.6731 11.6812 19.1376 12.5067 19.9391 12.7337L33.001 16.4329ZM28.8582 7.99972L30.0362 7.06943L29.9311 6.93978L29.7999 6.83608L28.8582 7.99972ZM29.5646 11.2226L32.096 15.7226L34.734 14.2774L32.2025 9.77739L29.5646 11.2226ZM25.3851 7.16343L27.9166 9.16336L29.7999 6.83608L27.2684 4.83615L25.3851 7.16343ZM27.6803 8.93001L29.7056 11.4303L32.0614 9.56971L30.0362 7.06943L27.6803 8.93001Z" 
                    fill="currentColor" 
                />
                <path d="M33.1974 10.9788C31.298 7.61388 28.3273 4.96202 24.7462 3.43449C21.1651 1.90695 17.1737 1.58912 13.391 2.53027C9.60832 3.47142 6.24582 5.61897 3.82501 8.63983C1.4042 11.6607 0.0603862 15.386 0.00198707 19.238C-0.056412 23.09 1.17387 26.8534 3.50202 29.9445C5.83016 33.0356 9.12606 35.2816 12.8785 36.3341C16.6309 37.3867 20.6302 37.187 24.256 35.7661C30.3532 33.5 32.9086 29 32.9086 26L30.8835 28C28.352 30 26.0145 31.6171 23.0549 32.7769C20.0954 33.9368 16.8311 34.0998 13.7682 33.2406C10.7053 32.3815 8.01511 30.5482 6.11479 28.0252C4.21448 25.5021 3.21028 22.4303 3.25795 19.2862C3.30561 16.142 4.40248 13.1013 6.37843 10.6356C8.35438 8.16982 11.099 6.41692 14.1865 5.64872C17.2741 4.88052 20.532 5.13995 23.455 6.38677C26.3781 7.6336 28.8028 9.79814 30.3532 12.5447L33.1974 10.9788Z" 
                    fill="currentColor" 
                />
            </svg>
        
        )
    }
];

export function Camp_Dash() {
    const [activeId, setActiveId] = useState(1);
    const [isHovered, setIsHovered] = useState(false);

    const renderContent = () => {
        switch (activeId) {
            case 1:
                return <Consultas />;
            case 2:
                return <Chats />;
            case 3:
                return <Historico />;
            default:
                return null;
        }
    };
    

    return (
        <div className="w-10/12 h-[85vh] flex justify-evenly flex-row items-center rounded-2xl mb-24">
            <div 
                className="h-full w-fit bg-white rounded-2xl p-2 flex flex-col items-center transition-colors duration-300"
                id="barra" 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
            >
                {botoes.map((botao) => (
                    <button 
                        id="button"
                        key={botao.id} 
                        onClick={() => setActiveId(botao.id)}  
                        className={`flex flex-row items-center border-none text-xl h-10 p-1 w-full text-center rounded-xl transition-colors duration-300 ease-in-out transform ${
                            activeId === botao.id
                                ? "bg-primary-200 text-white"
                                : "bg-white text-primary-700 hover:bg-primary-300 hover:text-white"
                        }`}
                    >
                      <div className="h-10 w-8 flex justify-center items-center ">  {botao.img} </div>
                      <span className="ml-4 hidden">{botao.nome}</span>
                        {isHovered && <span className="ml-4">{botao.nome}</span>}
                    </button>
                ))}
            </div>

            <div className="h-full w-full bg-white rounded-2xl ml-2">
                {renderContent()}
            </div>
        </div>
    );
}
