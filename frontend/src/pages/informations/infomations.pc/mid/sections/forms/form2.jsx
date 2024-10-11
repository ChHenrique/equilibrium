import { useState } from 'react'

export function Form2() {

    const [abriu_pais, abrir_pais] = useState(false)

    const handleToggle = () => abrir_pais(!abriu_pais)

    return(
        // Form 2
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
                            type="number"
                            id="input_email_alterações"
                            className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4" 
                            placeholder="Obs: Opcional"/>
                    </div>

                    {/* Div Cidade */}
                    <div className="flex flex-col w-full ml-8">
                        <label className="text-[#807e7e]">Cidade:</label>
                        <input
                            type="text"
                            id="input_cidade"
                            className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4" />
                    </div>

                    {/* Div Confirmar Senha */}
                    <div className="flex flex-col w-full ml-8">
                        <label className="text-[#807e7e]">País:</label>
                        <div className = "relative flex items-center">

                        <select 
                        name="" 
                        id="seleção de país" 
                        onClick={handleToggle}
                        className = "border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4  appearance-none mt-2">
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
    )
}