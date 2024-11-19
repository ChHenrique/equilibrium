import React from "react";
import nullimg from '../../../../assets/images/user_null.svg'
import { useState } from "react";


export function ConsultasPacientes({ nome, date, horario, duracao,able,accept }) {
    const [able, setAble] = useState(1) 
    const [accept, setacceptance] = useState(0) 

    //quando accept = 1 e able = 0 mostra o aceitar/recusar
    //quando accept = 0 e able = 1 mostra o juntar-se a chamada
    //quando accept = 0 e able = 0 não mostra nada

    return (



        <div className="min-w-fit  h-fit flex flex-col bg-[#F1F5F9] font-poppins justify-center items-center rounded-2xl m-2 max-w-fit ">
        <img src={nullimg} alt="" className="w-24 rounded-full m-2" />
        <div className="flex flex-col text-2xl justify-center items-center h-full p-2 w-full ">
            <h1 className=" text-primary-700 text-2xl font-medium mb-4">{nome}</h1>
            <div className="flex flex-row justify-center items-center w-full h-fit">
                <h2 className=" text-primary-700 text-base font-light bg-primary-300  whitespace-nowrap  flex text-nowrap items-center justify-center p-[2px] rounded-lg">
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

                <h2 className="ml-2 text-primary-700 text-base font-light bg-primary-300  whitespace-nowrap  flex text-nowrap items-center justify-center p-[2px] rounded-lg">
                    <svg className="h-5 w-5" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.99902 3.5V6.5L7.99902 7.5M10.999 6.5C10.999 9.26142 8.76045 11.5 5.99902 11.5C3.2376 11.5 0.999023 9.26142 0.999023 6.5C0.999023 3.73858 3.2376 1.5 5.99902 1.5C8.76045 1.5 10.999 3.73858 10.999 6.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {horario}
                </h2>

                <h2 className="ml-2 text-primary-700 text-base font-light bg-primary-300  whitespace-nowrap  flex text-nowrap items-center justify-center p-[2px] rounded-lg">
                    <svg className="h-5 w-5" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.99902 3.5V6.5L7.99902 7.5M10.999 6.5C10.999 9.26142 8.76045 11.5 5.99902 11.5C3.2376 11.5 0.999023 9.26142 0.999023 6.5C0.999023 3.73858 3.2376 1.5 5.99902 1.5C8.76045 1.5 10.999 3.73858 10.999 6.5Z" stroke="#355081" strokeLinecap="round" strokeLinejoin="round" />
                        <line x1="2.64645" y1="3.35355" x2="1.64645" y2="2.35355" stroke="#355081" />
                        <line x1="2.35596" y1="1.35113" x2="0.443444" y2="3.28993" stroke="#355081" />
                    </svg>
                    {duracao}
                </h2>
            </div>




                {accept ?
                    <div className="h-fit w-full justify-center items-center flex-row  flex mt-2 space-x-4">
                        <button className="h-fit w-fit flex-row text-white text-lg bg-[#73d79b] rounded-2xl flex p-1 pl-2 pr-2 justify-center items-center cursor-pointer font-bold hover:bg-[#63c189] duration-500"
                        >
                            Aceitar
                        </button>

                        <button className="ml-1 h-fit w-fit flex-row text-white text-lg bg-primary-900 rounded-2xl flex p-1 pl-2 pr-2 justify-center items-center cursor-pointer font-bold mr-auto hover:bg-[#dc7070] duration-500" >
                            Recusar
                        </button>

                    </div>
                    :
                    able ? (
                        <a href="http://localhost:8888/chat?peer1" className="w-fit">
                            <button className="w-full h-fit mb-4 bg-primary-200 text-white text-base rounded-2xl p-2 mt-4 cursor-pointer duration-150 hover:bg-primary-500">
                                Juntar-se a chamada
                            </button>
                        </a>
                    ) : (
                        <div className="w-fit">
                        <button className="w-full h-fit mb-4 bg-primary-300 text-slate-500 text-base rounded-2xl p-2 mt-4 cursor-default ">
                            Juntar-se a chamada
                        </button>
                        </div>
        
                    )

                }


            </div>
        </div>
    )
}