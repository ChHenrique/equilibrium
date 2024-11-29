import React, { useState } from 'react';
import "../../mid/style.css";

export function Alterações() {
    const [abriu, abrir] = useState(false);
    const [abriu_pais, abrir_pais] = useState(false);
    const [Estado, setEstado] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cidade, setCidade] = useState('');

    const handleToggle1 = () => abrir(!abriu);
    const handleToggle2 = () => abrir_pais(!abriu_pais);


    const handleSaveChanges = async () => {
        const pacienteId = localStorage.getItem('id');
        
        if (!pacienteId) {
            console.error('ID do paciente não encontrado no localStorage');
            return;
        }
    
        // Monta os dados que serão enviados
        const dados = {
            telefone,
            cidade,
            estado: Estado,
        };
    
    
        try {
            // Envia os dados para o backend
            const response = await fetch(`http://localhost:3000/infopc/${pacienteId}`, {
                method: 'POST',  // ou 'POST', dependendo da sua rota
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dados),  // Os dados estão sendo passados aqui
            });

    
            // Se a resposta foi bem-sucedida, continue o processo
            if (response.ok) {
                console.log('Informações atualizadas com sucesso:');
                // adicionar alguma mensagem de alteração depois
            } else {
                console.error('Erro ao salvar as alterações:', result);
            }
        } catch (error) {
            console.error('Erro ao enviar os dados para o servidor:', error);
        }
    };
    
    

    return (
        <div className="w-full h-full flex items-center font-poppins font-medium relative max-sm:flex-col max-sm:rounded-2xl">
            <h1 className="absolute top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap font-poppins font-bold text-[23px] text-primary-700 max-sm:hidden ">
                Altere e salve suas Alterações!
            </h1>

            {/* Div do Componente das alterações nome, estado, senha e email */}
            <div className=''>
            <div className="h-full w-1/2 bg-white flex flex-col items-center pt-5 max-sm:w-full max-sm:pt-0">
                <form
                    id="form1"
                    method="post"
                    className="flex items-center flex-col mt-24 ml-4 w-full h-80% space-y-10 translate-y-0 max-sm:space-y-8 max-sm:translate-y-0 max-sm:mt-4 max-xl:mt-0 ">
                    {/* Div Nome */}
                    <div className="flex flex-col w-full ml-8">
                        <label className="text-[#807e7e]">Nome:</label>
                        <input
                            readOnly
                            type="text"
                            id="input_name_alterações"
                            className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4" />
                    </div>

                    {/* Div Email */}
                    <div className="flex flex-col w-full ml-8">
                        <label className="text-[#807e7e]">Email:</label>
                        <input
                            readOnly
                            type="email"
                            id="input_email_alterações"
                            className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4" />
                    </div>

                    {/* Div Estado */}
                    <div className="flex flex-col w-full ml-8">
                        <label className="text-[#807e7e]">Estado:</label>
                        <input
                            value={Estado}
                            onChange={(e) => setEstado(e.target.value)}
                            type="text"
                            name="estado"
                            id="input_estado"
                            className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4" />
                    </div>
                </form>
            </div>

            {/* Form2 */}
            <div className="h-full w-1/2 bg-white flex flex-col items-center pt-5 max-sm:w-full max-sm:pt-0 max-sm:rounded-br-2xl max-sm:rounded-bl-2xl rounded-tr-2xl rounded-br-2xl">
                <form
                    id="form2"
                    method="post"
                    className="flex items-center flex-col mt-24 w-full ml-4 h-80% space-y-10 translate-y-0 max-sm:space-y-8 max-sm:translate-y-0 max-sm:mt-4 max-xl:mt-0">
                    {/* Div Sobrenome */}
                    <div className="flex flex-col w-full ml-8 max-sm:mt-5">
                        <label className="text-[#807e7e]">Sobrenome:</label>
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
                            onChange={(e) => setTelefone(e.target.value)}
                            type="number"
                            name="telefone"
                            id="input_telefone_alterações"
                            className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4" />
                    </div>

                    {/* Div Cidade */}
                    <div className="flex flex-col w-full ml-8">
                        <label className="text-[#807e7e]">Cidade:</label>
                        <input
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                            type="text"
                            name="cidade"
                            id="input_cidade"
                            className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4" />
                    </div>
                </form>

                <div className='flex justify-center items-center w-full max-sm:mt-11 sm:hidden h-fit'>
                <button
                    onClick={handleSaveChanges}
                    className="sm:absolute sm:bottom-4 sm:left-1/2 sm:-translate-x-1/2 whitespace-nowrap bg-[#3B82F6] w-2/6 font-poppins text-white h-[5vh] rounded-lg hover:bg-primary-700 hover:w-2/5 hover:rounded-xl transition-all duration-300 max-sm:w-1/2 max-sm:py-2 max-sm:-translate-y-3">
                        Salvar Alterações
                </button>
                </div>
            </div>
            </div>
            <button
                onClick={handleSaveChanges}
                className="sm:absolute sm:bottom-4 sm:left-1/2 sm:-translate-x-1/2 whitespace-nowrap bg-[#3B82F6] w-3/6 px-3 font-poppins text-white h-[5vh] rounded-lg hover:bg-primary-700 hover:w-2/5 hover:rounded-xl transition-all duration-300 max-sm:hidden max-lg:w-full max-xl:w-3/">
                Salvar Alterações
            </button>
        </div>
    );
}
