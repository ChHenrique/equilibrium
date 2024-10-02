import { useState } from 'react'

export function Form1(){
    const [abriu, abrir] = useState(false)

    const handleToggle = () => abrir(!abriu)

    return(
        // Div do Componente das alterações nome, estado, senha e email
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
                onClick={handleToggle}
                className = "border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4 mt-0 appearance-none">
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

    )
}