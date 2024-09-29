export function Form2() {
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
                        <label className="text-[#807e7e]">Confirmar Senha:</label>
                        <input
                            type="password"
                            id="input_confirmarSenha_alterações"
                            minLength={8}
                            className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4" />
                    </div>

                </form>

            </div>
    )
}