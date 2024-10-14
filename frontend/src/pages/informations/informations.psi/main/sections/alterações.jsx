import React, { useState } from 'react'
import "../../../infomations.pc/mid/style.css"

export function Alterações() {

    const [abriu, abrir] = useState(false)

    const handleToggle1 = () => abrir(!abriu)

    const [abriu_pais, abrir_pais] = useState(false)

    const [Estado, setEstado] = useState()

    const [selecionar_sexo, setselecionar_sexo] = useState()

    const handleToggle2 = () => abrir_pais(!abriu_pais)

    const [telefone, setTelefone] = useState()

    return (
        // Div do componente das alterções
        <div className="w-full h-full flex items-center font-poppins font-medium relative">
            <h1 className="absolute top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap font-poppins font-bold text-[23px] text-primary-700">
                Altere e salve suas Alterações!
            </h1>

           {/* // Div do Componente das alterações nome, estado, senha e email */}
            <div className="h-full w-1/2 bg-white flex flex-col items-center pt-5">

                {/* Form dos inputs e labels*/}

                <form
                    id="form1"
                    method="post"
                    className="flex items-center flex-col mt-24 ml-12 w-full h-80% space-y-10 ">

                    {/* Div Nome */}
                    <div className="flex flex-col w-full ml-8">

                        <label className="text-[#807e7e]">
                            Nome:
                        </label>
                        <input
                            readOnly
                            type="text"
                            id="input_name_alterações"
                            className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4 " />

                    </div>

                    {/* Div Email */}
                    <div className="flex flex-col w-full ml-8">
                        <label className="text-[#807e7e]">Email:</label>
                        <input
                            readOnly
                            type="email"
                            id="input_email_alterações"
                            className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4 " />
                    </div>

                    {/* Div Estado */}
                    <div className="flex flex-col w-full ml-8">
                        <label className="text-[#807e7e]">Estado:</label>
                        <input
                            value={Estado}
                            type="text"
                            id="input_estado"
                            className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4" />
                    </div>

                    {/* Div Senha */}
                    <div className="flex flex-col w-full ml-8">
                        <label className="text-[#807e7e]">Informar sexo:</label>

                        <div className="relative flex items-center">

                            <select
                                name=""
                                id="selecionar_sexo"
                                value={selecionar_sexo}
                                onClick={handleToggle1}
                                className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4 mt-2 appearance-none">
                                <option value="prefiro_não_informar">Prefiro não informar...</option>
                                <option value="feminino">Feminino</option>
                            </select>

                            <svg
                                className={`relative right-4 top-1/3 transform -translate-y-1/2 w-4 h-4 text-slate-600 transition-transform duration-300 ${abriu ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>

                </form>

            </div>


            {/* Form2 */}
            <div className="h-full w-1/2 bg-white flex flex-col items-center pt-5">
                <form
                    id="form2"
                    method="post"
                    className="flex items-center flex-col mt-24 ml-12 w-full h-80% space-y-10 ">

                    {/* Div Sobrenome */}
                    <div className="flex flex-col w-full ml-8">

                        <label className="text-[#807e7e]">
                            Sobrenome:
                        </label>
                        <input
                            readOnly
                            type="text"
                            id="input_sobrenome_alterações"
                            className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4" />

                    </div>

                    {/* Div Telefone */}
                    <div className="flex flex-col w-full ml-8">
                        <label className="text-[#807e7e]">Telefone:</label>
                        <input
                            value={telefone}
                            type="number"
                            id="input_email_alterações"
                            className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4"
                            placeholder="Obs: Opcional" />
                    </div>

                    {/* Div Cidade */}
                    <div className="flex flex-col w-full ml-8">
                        <label className="text-[#807e7e]">Cidade:</label>
                        <input
                            type="text"
                            id="input_cidade"
                            className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4" />
                    </div>

                    {/* Div Pais */}
                    <div className="flex flex-col w-full ml-8">
                        <label className="text-[#807e7e]">País:</label>
                        <div className="relative flex items-center">

                            <select
                                name=""
                                id="seleção de país"
                                onClick={handleToggle2}
                                className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4 mt-2 appearance-none">
                                <option value="">País</option>
                                <option value="">Brasil</option>
                            </select>
                            <svg
                                className={`relative right-4 top-1/3 transform -translate-y-1/2 w-4 h-4 text-slate-600 transition-transform duration-300 ${abriu_pais ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>

                </form>

            </div>

            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-[#3B82F6] w-2/6 font-poppins text-white h-[5vh] rounded-lg hover:bg-primary-700 hover:w-2/5 hover:rounded-xl transition-all duration-300">Salvar Alterações</button>
        </div>
    )
}