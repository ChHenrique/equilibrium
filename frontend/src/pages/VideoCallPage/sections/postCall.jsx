import { useState } from "react";
import { Bolas } from "../../calendario/sections/bolas";
import Logo from "../../../assets/images/logo-title.svg"
export function PostCall() {
    const [pag, setPag] = useState(1)

    return (
        <div className="h-full w-full flex justify-center items-center font-satoshi text-primary-800 ">
            <div className="w-3/4 h-3/4  flex bg-white relative rounded-2xl -translate-y-[5%] flex-col justify-center items-center">
                {pag ?
                    <div className="h-full w-full flex justify-center items-center">

                        <Bolas />
                        <img src={Logo} alt="" className="flex absolute right-5 bottom-4 w-24 " />

                        <div className=" h-full w-full flex -translate-y-[5%] flex-col justify-center items-center">
                            <h1 className="pb-[10%] font-medium text-3xl">Você gostou da consulta?</h1>
                            <div className="flex flex-row justify-center h-fit w-fit items-center p-1">
                                <a href="home/psicologo" className="w-full h-full  flex justify-center items-center p-1">
                                    <button className="bg-primary-1000 w-full h-full p-1 pl-12 pr-12 rounded-2xl m-2"


                                    >

                                        <svg className="w-full h-full max-w-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M40 12L18 34L8 24" stroke="white" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </a>
                                <div className="w-full h-full  flex justify-center items-center p-1">
                                    <button className="bg-primary-900 w-full h-full  pl-12 pr-12 rounded-2xl m-2"
                                        onClick={() => setPag(0)}

                                    >

                                        <svg className="w-full h-full max-w-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M36 12L12 36M12 12L36 36" stroke="white" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="h-full w-full flex justify-center items-center">

                        <Bolas />
                        <img src={Logo} alt="" className="flex absolute right-5 bottom-4 w-24 " />

                        <div className=" h-full w-full flex -translate-y-[5%] flex-col justify-center items-center">
                            <h1 className=" font-medium text-3xl">Você gostaria de denunciar essa consulta?</h1>
                            <h2 className="pb-[10%] text-xl font-medium">Utilizando a video chamada como prova?</h2>

                            <div className="flex flex-row justify-center h-fit w-fit items-center p-1">
                                <a href="home/psicologo" className="w-full h-full  flex justify-center items-center p-1">
                                    <button className="bg-primary-1000 w-full h-full p-1 pl-12 pr-12 rounded-2xl m-2"


                                    >

                                        <svg className="w-full h-full max-w-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M40 12L18 34L8 24" stroke="white" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                    </a>
                                    <a href="home/psicologo" className="w-full h-full  flex justify-center items-center p-1">
                                        <button className="bg-primary-900 w-full h-full  pl-12 pr-12 rounded-2xl m-2"
                                            onClick={() => setPag(0)}

                                        >

                                            <svg className="w-full h-full max-w-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M36 12L12 36M12 12L36 36" stroke="white" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                    </a>
                            </div>
                        </div>
                    </div>
                }



            </div>



        </div>


    )
}