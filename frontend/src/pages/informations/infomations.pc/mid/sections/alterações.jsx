import React, { useState, useEffect } from 'react';
import "../../mid/style.css";

export function Alterações() {
    const [abriu, abrir] = useState(false);
    const [abriu_pais, abrir_pais] = useState(false);
    const [Estado, setEstado] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cidade, setCidade] = useState(''); 
    const [nome, setNome] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [Sobrenome, setSobrenome] = useState('');

    const handleToggle1 = () => abrir(!abriu);
    const handleToggle2 = () => abrir_pais(!abriu_pais);

      // Pega os dados do paciente
  useEffect(() => {
    const idPaciente = localStorage.getItem("id");
    if (idPaciente) {
      fetch(`http://localhost:3000/user/pacientes/${idPaciente}`)
        .then(response => {
          if (!response.ok) throw new Error("Erro ao buscar os dados do psicólogo");
          return response.json();
        })
        .then(data => {
          setEmail(data.email || ''); // Atualiza o email
          setEstado(data.estado || ''); // Atualiza o estado se disponível
          setTelefone(data.telefone || ''); // Atualiza o telefone se disponível
          setSobrenome(data.sobrenome || '');
          setNome(data.nome || '');
          setCidade(data.cidade || '');
        })
        .catch(error => console.error("Erro:", error));
    }
  }, []);

    const handleSaveChanges = async (e) => {
        const pacienteId = localStorage.getItem('id');
        e.preventDefault()
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

        console.log('Dados a serem enviados:', dados);
    
        try {
            // Envia os dados para o backend
            const response = await fetch(`http://localhost:3000/infopc/${pacienteId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dados),  // Os dados estão sendo passados aqui
            });

            if (response.ok) {
                console.log('Informações atualizadas com sucesso:');
            } else {
                console.error('Erro ao salvar as alterações:', response);
            }
        } catch (error) {
            console.error('Erro ao enviar os dados para o servidor:', error);
        }
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center font-poppins font-medium relative max-md:rounded-2xl  overflow-x-hidden">
            <h1 className="absolute top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap font-poppins font-bold text-[23px] text-primary-700 max-md:hidden">
                Altere e salve suas Alterações!
            </h1>

            {/* Formulário com Grid */}
            <form
                id="form1"
                onSubmit={handleSaveChanges}
                method="post"
                className="w-[100%] grid grid-cols-1 md:grid-cols-2 gap-8 mt-24 max-md:space-y-2 max-md:translate-y-0 max-md:mt-16 max-lg:mb-10 max-lg:-translate-y-6 max-lg:ml-4 max-lg:mr-4  max-2xl:mb-10 max-2xl:-translate-y-6 max-2xl:ml-4 max-2xl:mr-0 place-items-center max-lg:h-full max-lg:mt-[30%] max-xl:mt-0 relative ">
                
                {/* Div Nome */}
                <div className="flex flex-col w-full max-md:ml-16 md:ml-8 ">
                    <label className="text-[#807e7e]">Nome:</label>
                    <input
                    placeholder={nome}
                        readOnly
                        type="text"
                        id="input_name_alterações"
                        className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-[80%]" />
                </div>

                {/* Div Email */}
                <div className="flex flex-col w-full max-md:ml-16 md:ml-8">
                    <label className="text-[#807e7e]">Email:</label>
                    <input
                    placeholder={email}
                        readOnly
                        type="email"
                        id="input_email_alterações"
                        className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-[80%]" />
                </div>

                {/* Div Estado */}
                <div className="flex flex-col w-full max-md:ml-16 md:ml-8">
                    <label className="text-[#807e7e]">Estado:</label>
                    <input
                    placeholder={Estado}
                        value={Estado}
                        onChange={(e) => setEstado(e.target.value)}
                        type="text"
                        name="estado"
                        id="input_estado"
                        className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-[80%]" />
                </div>

                {/* Div Sobrenome */}
                <div className="flex flex-col w-full max-md:ml-16 md:ml-8">
                    <label className="text-[#807e7e]">Sobrenome:</label>
                    <input
                    placeholder={Sobrenome}
                        readOnly
                        type="text"
                        id="input_sobrenome_alterações"
                        className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-[80%]" />
                </div>

                {/* Div Telefone */}
                <div className="flex flex-col w-full max-md:ml-16 md:ml-8">
                    <label className="text-[#807e7e]">Telefone:</label>
                    <input
                    
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        type="number"
                        name="telefone"
                        id="input_telefone_alterações"
                        className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-[80%]"/>
                </div>

                {/* Div Cidade */}
                <div className="flex flex-col w-full max-md:ml-16  md:ml-8">
                    <label className="text-[#807e7e]">Cidade:</label>
                    <input
                    placeholder={cidade}
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                        type="text"
                        name="cidade"
                        id="input_cidade"
                        className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-[80%]" />
                </div>
                <div className='flex justify-center items-center w-full max-md:mt-11 md:hidden h-fit translate-y-7'>
                <button
                    onClick={handleSaveChanges}
                    className="md:absolute md:bottom-4 md:left-1/2 md:-translate-x-1/2 whitespace-nowrap bg-[#3B82F6] w-2/6 font-poppins text-white h-[5vh] rounded-lg hover:bg-primary-700 hover:w-2/5 hover:rounded-xl transition-all duration-300 max-md:w-1/2 max-md:py-2 max-md:-translate-y-3 max-md:h-[3vh]">
                    Salvar Alterações
                </button>
            </div>

            <div className='w-fit flex justify-center items-center 2xl:hidden'>
                 <button
                     type='submit'
                     className=" absolute bottom-0 translate-x-[50%] translate-y-4 max-lg:px-1 whitespace-nowrap bg-[#3B82F6] w-3/6 px-3 font-poppins text-white h-[5vh] rounded-lg hover:bg-primary-700 hover:rounded-xl transition-all duration-300 max-md:hidden max-lg:w-2/4 max-lg:translate-y-9 max-xl:translate-y-14 max-2xl:translate-y-24">
                     Salvar Alterações
                </button>
            </div>

            </form>
        
        </div>
    );
}
