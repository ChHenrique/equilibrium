import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Chats } from './Chats.jsx';
import { Consultas } from "./Consultas.jsx";
import { Historico } from "./Historico.jsx";

const botoes = [
    {
        id: 1,
        nome: "Consultas",
        img: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full aspect-square">
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
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full aspect-square">
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
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full aspect-square">
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

const botoesMobile = [
    {
        id: 0,
        img: (
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.9964 27.8036C25.7716 28.5787 27.0284 28.5787 27.8036 27.8036C28.5787 27.0284 28.5787 25.7716 27.8036 24.9964L19.7118 16.9047C20.2215 16.1963 20.6323 15.4043 20.9456 14.5314C21.3162 13.499 21.5 12.404 21.5 11.25C21.5 8.39549 20.5057 5.96113 18.5223 3.9777C16.5389 1.99426 14.1045 1 11.25 1C8.39549 1 5.96113 1.99426 3.9777 3.9777C1.99426 5.96113 1 8.39549 1 11.25C1 14.1045 1.99426 16.5389 3.9777 18.5223C5.96113 20.5057 8.39549 21.5 11.25 21.5C12.404 21.5 13.499 21.3162 14.5314 20.9456C15.4043 20.6323 16.1963 20.2215 16.9047 19.7118L24.9964 27.8036ZM15.6777 15.6777C14.46 16.8954 12.9939 17.5 11.25 17.5C9.50609 17.5 8.03997 16.8954 6.8223 15.6777C5.60464 14.46 5 12.9939 5 11.25C5 9.50609 5.60464 8.03997 6.8223 6.8223C8.03997 5.60464 9.50609 5 11.25 5C12.9939 5 14.46 5.60464 15.6777 6.8223C16.8954 8.03997 17.5 9.50609 17.5 11.25C17.5 12.9939 16.8954 14.46 15.6777 15.6777Z" fill="currentColor" stroke="currentColor" />
            </svg>
        )
    },

    {
        id: 3,
        img: (
            <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.2663 14C26.0513 14 26.6948 13.3621 26.619 12.5808C26.399 10.3134 25.6541 8.12896 24.4406 6.22202C22.9755 3.91973 20.8931 2.12532 18.4568 1.06569C16.0204 0.00606593 13.3395 -0.271181 10.7531 0.269012C8.16672 0.809205 5.79094 2.14258 3.92624 4.10051C2.06154 6.05845 0.791668 8.55301 0.277198 11.2687C-0.237271 13.9845 0.0267732 16.7994 1.03594 19.3576C2.04511 21.9157 3.75408 24.1022 5.94673 25.6406C7.77449 26.9229 9.86983 27.7068 12.0441 27.9323C12.7651 28.007 13.3543 27.4124 13.3543 26.6876C13.3543 25.9627 12.762 25.3837 12.0499 25.2482C10.4372 24.9415 8.88731 24.1138 7.52608 23.1587C5.80091 21.9484 4.45631 20.228 3.6623 18.2153C2.8683 16.2026 2.66055 13.9878 3.06533 11.8511C3.47011 9.71434 4.46924 7.75164 5.93637 6.21115C7.40351 4.67066 9.27275 3.62157 11.3077 3.19655C13.3427 2.77153 15.452 2.98967 17.3689 3.82337C19.2858 4.65708 20.9242 6.06891 22.0769 7.88034C22.9779 9.29609 23.5505 10.9062 23.7577 12.5822C23.854 13.3613 24.4813 14 25.2663 14Z" fill="currentColor" />
                <path d="M12.6665 16.1L12.6665 6.29997" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
                <path d="M12.6665 16.1H17.9998" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
                <path d="M25.3447 14.7095L28.0002 11.2" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
                <path d="M24.9399 14.3908L22.0002 11.9" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
            </svg>
        )
    },

    {
        id: 1,
        img: (
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M25.4702 5.66667H0.529112C0.733431 3.93314 1.15063 2.72579 2.0025 1.80485C3.67199 0 6.35899 0 11.733 0H14.2663C19.6403 0 22.3274 0 23.9969 1.80485C24.8487 2.72579 25.2659 3.93314 25.4702 5.66667ZM0.333008 12.3243C0.333008 10.5055 0.333008 8.97143 0.384229 7.66667H25.6151C25.6663 8.97143 25.6663 10.5055 25.6663 12.3243V13.0091C25.6663 18.8188 25.6663 21.7236 23.9969 23.5285C22.3274 25.3333 19.6403 25.3333 14.2663 25.3333H11.733C6.35899 25.3333 3.67199 25.3333 2.0025 23.5285C0.333008 21.7236 0.333008 18.8188 0.333008 13.0091V12.3243ZM7.66644 12.3332C7.11416 12.3332 6.66644 12.7809 6.66644 13.3332C6.66644 13.8855 7.11416 14.3332 7.66644 14.3332H7.67842C8.2307 14.3332 8.67842 13.8855 8.67842 13.3332C8.67842 12.7809 8.2307 12.3332 7.67842 12.3332H7.66644ZM11.6664 12.3332C11.1142 12.3332 10.6664 12.7809 10.6664 13.3332C10.6664 13.8855 11.1142 14.3332 11.6664 14.3332H18.3331C18.8854 14.3332 19.3331 13.8855 19.3331 13.3332C19.3331 12.7809 18.8854 12.3332 18.3331 12.3332H11.6664ZM7.66644 17.6665C7.11416 17.6665 6.66644 18.1142 6.66644 18.6665C6.66644 19.2188 7.11416 19.6665 7.66644 19.6665H14.3331C14.8854 19.6665 15.3331 19.2188 15.3331 18.6665C15.3331 18.1142 14.8854 17.6665 14.3331 17.6665H7.66644ZM18.3211 17.6665C17.7688 17.6665 17.3211 18.1142 17.3211 18.6665C17.3211 19.2188 17.7688 19.6665 18.3211 19.6665H18.3331C18.8854 19.6665 19.3331 19.2188 19.3331 18.6665C19.3331 18.1142 18.8854 17.6665 18.3331 17.6665H18.3211Z" fill="currentColor" />
            </svg>
        )
    },

    {
        id: 2,
        img: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.13159 25.3331C6.3981 25.1626 5.0995 24.6419 4.2286 23.771C2.6665 22.209 2.6665 19.6947 2.6665 14.6665V13.9998C2.6665 8.97148 2.6665 6.45733 4.2286 4.89522C5.7907 3.33313 8.30485 3.33313 13.3332 3.33313H18.6665C23.6948 3.33313 26.209 3.33313 27.771 4.89522C29.3332 6.45733 29.3332 8.97148 29.3332 13.9998V14.6665C29.3332 19.6947 29.3332 22.209 27.771 23.771C26.209 25.3331 23.6948 25.3331 18.6665 25.3331C17.9192 25.3498 17.324 25.4066 16.7393 25.5398C15.1414 25.9077 13.6618 26.7253 12.1997 27.4383C10.1162 28.4542 9.07451 28.9622 8.42076 28.4866C7.17009 27.5551 8.39256 24.669 8.66651 23.3331" fill="currentColor" />
            </svg>
        )
    },

    {
        id: 4,
        img: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M33 17.9996C33 26.2839 26.2843 32.9996 18 32.9996C9.71573 32.9996 3 26.2839 3 17.9996C3 9.71536 9.71573 2.99963 18 2.99963C26.2843 2.99963 33 9.71536 33 17.9996ZM15.2318 14.2496C15.2318 12.7322 16.4642 11.4996 17.9871 11.4996C19.5103 11.4996 20.7425 12.7322 20.7425 14.2496C20.7425 15.7671 19.5103 16.9996 17.9871 16.9996C16.4642 16.9996 15.2318 15.7671 15.2318 14.2496ZM17.9871 9.49965C15.3623 9.49965 13.2318 11.625 13.2318 14.2496C13.2318 16.8743 15.3623 18.9996 17.9871 18.9996C20.6121 18.9996 22.7425 16.8743 22.7425 14.2496C22.7425 11.6249 20.6121 9.49965 17.9871 9.49965ZM11.9732 26.1902C15.0957 22.9197 20.8935 22.7909 24.0146 26.1774C24.3888 26.5835 25.0215 26.6093 25.4276 26.235C25.8337 25.8607 25.8595 25.2281 25.4852 24.8219C21.5359 20.5368 14.3992 20.753 10.5266 24.8091C10.1452 25.2085 10.1599 25.8415 10.5593 26.2229C10.9588 26.6043 11.5918 26.5897 11.9732 26.1902Z" fill="currentColor" />
            </svg>
        )
    }
]

export function Camp_Dash() {
    const location = useLocation();
    const [activeId, setActiveId] = useState(1);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        // Verifica se há um estado passado na navegação
        if (location.state && location.state.activeId) {
            setActiveId(location.state.activeId); // Define o activeId com o valor do estado
        }
    }, [location.state]);
    
    const renderContent = () => {
        switch (activeId) {
            case 0:
                window.location.href = '/psicologos'
            case 1:
                return <Consultas />;
            case 2:
                return <Chats />;
            case 3:
                return <Historico />;
            case 4: 
                window.location.href = "/info/paciente"
            default:
                return null;
        }
    };



    return (
        <div className="w-full h-full flex justify-evenly max-md:h-screen flex-row items-center rounded-2xl mb-24 max-md:mb-0 max-md:flex-col-reverse max-md:justify-start">
            
            <div 
                className="max-md:flex-row max-md:justify-evenly flex-col h-full mb-0 max-md:mt-4 max-md:rounded-none max-md:h-[10%]  max-md:w-full w-fit bg-white rounded-2xl p-2 flex items-center transition-colors duration-300"
                id="barra" 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
            >
                {botoes.map((botao) => (
                    <button 
                        id="button"
                        key={botao.id} 
                        onClick={() => setActiveId(botao.id)}  
                        className={`flex max-md:hidden  items-center border-none text-xl mt-1 h-10 p-1 w-full max-md:w-fit text-center rounded-xl transition-colors duration-300 ease-in-out transform ${
                            activeId === botao.id
                                ? "bg-primary-200 text-white max-md:bg-white max-md:text-primary-700"
                                : "bg-white text-primary-700  hover:bg-primary-300 hover:text-white max-md:text-primary-200"
                        }`}
                    >
                      <div className="h-10 w-8 max-md:h-14 max-md:w-10 aspect-square flex justify-center items-center ">  {botao.img} </div>
                      <span className="ml-4 hidden max-md:hidden">{botao.nome}</span>
                        {isHovered && <span className="ml-4 max-md:hidden">{botao.nome}</span>}
                    </button>
                ))}


{botoesMobile.map((botao) => (
                    <button 
                        id="button"
                        key={botao.id} 
                        onClick={() => setActiveId(botao.id)}  
                        className={`flex md:hidden  items-center border-none text-xl mt-1 h-10 p-1 w-full max-md:w-fit text-center rounded-xl transition-colors duration-300 ease-in-out transform ${
                            activeId === botao.id
                                ? "bg-primary-200 text-white max-md:bg-white max-md:text-primary-700"
                                : "bg-white text-primary-700  hover:bg-primary-300 hover:text-white max-md:text-primary-200"
                        }`}
                    >
                      <div className="h-10 w-8 max-md:h-14 max-md:w-10 aspect-square flex justify-center items-center ">  {botao.img} </div>
                    </button>
                ))}
            </div>

            <div className="h-full max-md:h-full w-full bg-white rounded-2xl m-2 max-md:m-0">
                {renderContent()}
            </div>
        </div>
    );
}
