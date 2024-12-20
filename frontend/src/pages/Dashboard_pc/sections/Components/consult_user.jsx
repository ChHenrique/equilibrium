import React from "react";
import nullimg from '../../../../assets/images/user_null.svg';
import { useState } from "react";

export function ConsultasPsicologos({ able,nome, date, horario, duracao, foto }) {
   //const [able, setAble] = useState(0); Se =1 e entravel na secção, se 0 não


    return (
      
        <div className="min-w-fit  h-fit flex flex-col max-md:w-full max-md:flex-row bg-[#F1F5F9] font-poppins justify-center items-center shadow-[0px_4px_20px_#CED9EE]  max-sm:m-0 rounded-2xl m-2 max-w-fit max-md:max-w-[80%] ">
                           <div 
                        className="w-32 max-md:w-28 max-sm:w-28 ml-1 aspect-square rounded-full cursor-pointer flex overflow-hidden bg-center bg-cover" 
                        style={{ backgroundImage: `url(${foto})` }}
                    ></div>
        <div className="flex flex-col text-2xl max-md:text-xl justify-center items-center h-full p-2 w-full ">
            <h1 className=" text-primary-700 text-2xl font-medium max-md:text-xl  mb-4 max-md:mb-0 max-md:text-3xl"> Psi. {nome}</h1>
            <div className="flex flex-row justify-center items-center w-full h-fit">
                <h2 className=" text-primary-700 text-base font-light bg-primary-300  whitespace-nowrap  max-sm:text-sm flex text-nowrap items-center justify-center p-[2px] rounded-lg">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                        <path d="M32 4V12M16 4V12M6 20H42M10 8H38C40.2091 8 42 9.79086 42 12V40C42 42.2091 40.2091 44 38 44H10C7.79086 44 6 42.2091 6 40V12C6 9.79086 7.79086 8 10 8Z"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    {date}
                </h2>

                <h2 className="ml-2 text-primary-700 text-base font-light bg-primary-300  whitespace-nowrap  flex text-nowrap items-center justify-center p-[2px] rounded-lg max-sm:text-sm">
                    <svg className="h-5 w-5" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.99902 3.5V6.5L7.99902 7.5M10.999 6.5C10.999 9.26142 8.76045 11.5 5.99902 11.5C3.2376 11.5 0.999023 9.26142 0.999023 6.5C0.999023 3.73858 3.2376 1.5 5.99902 1.5C8.76045 1.5 10.999 3.73858 10.999 6.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {horario}
                </h2>

                <h2 className="ml-2 text-primary-700 text-base font-light bg-primary-300  whitespace-nowrap  flex text-nowrap max-sm:text-sm items-center justify-center p-[2px] rounded-lg">
                    <svg className="h-5 w-5" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.99902 3.5V6.5L7.99902 7.5M10.999 6.5C10.999 9.26142 8.76045 11.5 5.99902 11.5C3.2376 11.5 0.999023 9.26142 0.999023 6.5C0.999023 3.73858 3.2376 1.5 5.99902 1.5C8.76045 1.5 10.999 3.73858 10.999 6.5Z" stroke="#355081" strokeLinecap="round" strokeLinejoin="round" />
                        <line x1="2.64645" y1="3.35355" x2="1.64645" y2="2.35355" stroke="#355081" />
                        <line x1="2.35596" y1="1.35113" x2="0.443444" y2="3.28993" stroke="#355081" />
                    </svg>
                    {duracao}
                </h2>
            </div>

                {able ? (
        <a href="https://localhost:8888/chat?peer1" className="w-fit">
            <button className="w-full h-fit mb-4 bg-primary-200 text-white text-base rounded-2xl p-2 mt-4 cursor-pointer duration-150 hover:bg-primary-500">
                Juntar-se a chamada
            </button>
        </a>
    ) : (
        <div className="w-fit">
        <button className="w-full h-fit mb-4 bg-primary-300 text-slate-500 text-base rounded-2xl p-2 mt-4 cursor-default ">
            Indisponivel
        </button>
        </div>

    )}
            </div>
        </div>
    );
}
