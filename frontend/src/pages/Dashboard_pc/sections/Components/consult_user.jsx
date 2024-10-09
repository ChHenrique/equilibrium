import React from "react";
import nullimg from '../../../../assets/images/user_null.svg'


export function ConsultasPsicologos({ nome, date, horario }) {
    return (

        <div className="w-min-content pr-8 h-32 flex bg-secondary-100 font-poppins justify-start items-center rounded-2xl m-2">
            <img src={nullimg} alt="" className="h-24 w-24 rounded-full m-2" />
            <div className="flex flex-col text-2xl justify-center items-start h-32 w-auto">
                <h1 className=" text-primary-700 text-2xl font-medium">{nome}</h1>
                <div className="flex flex-row justify-center items-center">
                    <h2 className=" text-primary-700 text-base font-light bg-primary-300 p-px rounded-sm whitespace-nowrap  flex text-nowrap items-center justify-center">
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                            <path d="M32 4V12M16 4V12M6 20H42M10 8H38C40.2091 8 42 9.79086 42 12V40C42 42.2091 40.2091 44 38 44H10C7.79086 44 6 42.2091 6 40V12C6 9.79086 7.79086 8 10 8Z"
                                stroke="currentColor"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>


                        {date}</h2>

                    <h2 className="ml-2 text-primary-700 text-base font-light bg-primary-300 p-px rounded-sm whitespace-nowrap  flex text-nowrap items-center justify-center">
                        <svg className="h-5 w-5" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.99902 3.5V6.5L7.99902 7.5M10.999 6.5C10.999 9.26142 8.76045 11.5 5.99902 11.5C3.2376 11.5 0.999023 9.26142 0.999023 6.5C0.999023 3.73858 3.2376 1.5 5.99902 1.5C8.76045 1.5 10.999 3.73858 10.999 6.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>



                        {horario}</h2>
                </div>
            </div>
        </div>
    )
}