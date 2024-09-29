export function Form1(){
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
                    type="text"
                    id="input_name_alterações"
                    className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4" />

            </div>

            {/* Div Email */}
            <div className="flex flex-col w-full ml-8">
                <label className="text-[#807e7e]">Email:</label>
                <input
                    type="email"
                    id="input_email_alterações"
                    className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4" />
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
                <label className="text-[#807e7e]">Senha:</label>
                <input
                    type="password"
                    id="input_senha_alterações"
                    minLength={8}
                    className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4" />
            </div>

        </form>

    </div>

    )
}