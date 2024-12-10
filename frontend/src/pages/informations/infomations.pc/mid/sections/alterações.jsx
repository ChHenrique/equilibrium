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

    const formatarTelefone = (valor) => {
        // Remove qualquer caractere que não seja número
        const apenasNumeros = valor.replace(/\D/g, '');
      
        // Aplica a máscara (XX) XXXXX-XXXX
        if (apenasNumeros.length <= 10) {
          return apenasNumeros.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else {
          // Se o número tiver mais de 10 dígitos, formatar com máscara
          return apenasNumeros.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        }
      };
      
      const handleTelefoneChange = (e) => {
        // Captura o valor digitado
        const value = e.target.value;
      
        // Remove qualquer caractere não numérico
        const apenasNumeros = value.replace(/\D/g, '');
      
        // Verifica se o número de dígitos é maior que o limite (10 dígitos)
        if (apenasNumeros.length <= 11) {
          // Atualiza o estado com o valor formatado
          setTelefone(formatarTelefone(value));
        }
      };

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
        <div className="w-full h-full flex flex-col items-center max-md:min-h-fit justify-center font-poppins font-medium relative max-md:rounded-2xl overflow-y-visible overflow-x-hidden">
            <h1 className="absolute top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap font-poppins font-bold text-[23px] text-primary-700 max-md:hidden">
                Altere e salve suas Alterações!
            </h1>

            {/* Formulário com Grid */}
            <form
                id="form1"
                onSubmit={handleSaveChanges}
                method="post"
                className="w-full grid items-center place-items-center grid-cols-1 md:grid-cols-2 space-y-2 gap-8 mt-0 max-md:space-y-0 max-md:translate-y-0 max-md:mt-10 max-lg:mb-10 max-lg:-translate-y-6 max-lg:mr-4 max-2xl:mb-10 max-2xl:-translate-y-6 max-2xl:mr-0  max-lg:h-full max-lg:mt-[30%] max-xl:mt-[20%] relative max-md:ml-4">
                
                {/* Div Nome */}
                <div className="flex flex-col w-full relative justify-center">
                    <label className="text-primary-1200 left-4 max-md:ml-[11%] ml-[10%]">Nome</label>
                    <div className="flex flex-col w-full relative items-center">
                    <input
                    placeholder={nome}
                        readOnly
                        type="text"
                        id="input_name_alterações"
                        className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-[80%] max-md:rounded-lg max-md:px-3 max-md:py-1 max-md:border-none" />
                        </div>
                        </div>
                

                {/* Div Email */}
                <div className="flex flex-col w-full justify-center">
                    <label className="text-primary-1200 max-md:ml-[11%] ml-[10%]">Email</label>
                    <div className="flex flex-col w-full relative items-center">
                    <input
                    placeholder={email}
                        readOnly
                        type="email"
                        id="input_email_alterações"
                        className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-[80%] max-md:rounded-lg max-md:px-3 max-md:py-1 max-md:border-none" />
                </div>
                </div>

                {/* Div Estado */}
                <div className="flex flex-col w-full">
                    <label className="text-primary-1200 max-md:ml-[11%] ml-[10%]">Estado</label>
                    <div className="flex flex-col w-full relative items-center">
                    <input
                    placeholder={Estado}
                        value={Estado}
                        onChange={(e) => setEstado(e.target.value)}
                        type="text"
                        name="estado"
                        id="input_estado"
                        className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-[80%] max-md:rounded-lg max-md:px-3 max-md:py-1 max-md:border-none" />
                    </div>
                </div>

                {/* Div Sobrenome */}
                <div className="flex flex-col w-full">
                    <label className="text-primary-1200 max-md:ml-[11%] ml-[10%]">Sobrenome</label>
                    <div className="flex flex-col w-full relative items-center">
                    <input
                    placeholder={Sobrenome}
                        readOnly
                        type="text"
                        id="input_sobrenome_alterações"
                        className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-[80%] max-md:rounded-lg max-md:px-3 max-md:py-1 max-md:border-none" />
                    </div>
                </div>

                {/* Div Telefone */}
                <div className="flex flex-col w-full">
                    <label className="text-primary-1200 max-md:ml-[11%] ml-[10%]">Telefone</label>
                    <div className="flex flex-col w-full relative items-center">
                    <input
                    
                        value={telefone}
                        onChange={handleTelefoneChange}
                        type="text"
                        name="telefone"
                        id="input_telefone_alterações"
                        className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-[80%] max-md:rounded-lg max-md:px-3 max-md:py-1 max-md:border-none"/>
                    </div>
                </div>

                {/* Div Cidade */}
                <div className="flex flex-col w-full">
                    <label className="text-primary-1200 max-md:ml-[11%] ml-[10%]">Cidade</label>
                    <div className="flex flex-col w-full relative items-center">
                    <input
                    placeholder={cidade}
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                        type="text"
                        name="cidade"
                        id="input_cidade"
                        className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-[80%] max-md:rounded-lg max-md:px-3 max-md:py-1 max-md:border-none" />
                    </div>
                </div>
                <div className='flex justify-center items-center w-full max-md:mt-11 md:hidden h-fit translate-y-7'>
                <button
                    onClick={handleSaveChanges}
                    className="md:absolute md:bottom-4 md:left-1/2 md:-translate-x-1/2 whitespace-nowrap bg-[#3B82F6] w-2/6 font-poppins text-white h-[5vh] rounded-lg hover:bg-primary-700 hover:w-2/5 hover:rounded-xl transition-all duration-300 max-md:w-1/2 max-md:py-2 max-md:-translate-y-3 max-md:h-[5vh]">
                    Salvar Alterações
                </button>
            </div>

            <div className='w-full flex justify-center items-center'>
                 <button
                     type='submit'
                     className=" absolute bottom-0 translate-x-[82%] mr-5 translate-y-28 max-lg:px-1 whitespace-nowrap bg-[#3B82F6] w-2/6 px-3 font-poppins text-white h-[5vh] rounded-lg hover:bg-primary-700 hover:rounded-xl transition-all duration-300 max-md:hidden max-lg:w-2/4 max-lg:translate-y-9 max-xl:translate-y-14 max-2xl:translate-y-24">
                     Salvar Alterações
                </button>
            </div>

            </form>
        
        </div>
    );


}