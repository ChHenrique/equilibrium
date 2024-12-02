import React, { useState, useEffect } from 'react';


export function Info({ imagem, onChange, num_sesões, diaConta, nome, id_psi, sobrenome, email }) {
  const [selectedImage, setSelectedImage] = useState(imagem);
  const [Email, setEmail] = useState(email || ''); // Usar o email recebido como padrão
  const [Estado, setEstado] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cidade, setCidade] = useState('');
  const [Sobrenome, setSobrenome] = useState('');

  const nomeFormartado = nome.charAt(0).toUpperCase() + nome.slice(1)

  // Função para formatar o telefone
  const formatarTelefone = (valor) => {
    const apenasNumeros = valor.replace(/\D/g, ''); // Remove qualquer caractere que não seja número

    // Aplica a máscara (XX) XXXXX-XXXX
    if (apenasNumeros.length <= 10) {
      return apenasNumeros.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else {
      return apenasNumeros.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      onChange(e);

      const formData = new FormData();
      formData.append("foto", file);

      const token = localStorage.getItem("token");
      try {
        const response = await fetch("http://localhost:3000/user/upload-foto", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`
          },
          body: formData
        });

        if (!response.ok) {
          throw new Error("Erro ao fazer o upload da imagem");
        }
        console.log("Imagem enviada com sucesso!");
      } catch (error) {
        console.error("Erro ao enviar imagem:", error);
      }
    }
  };

  // Pega os dados do psicólogo
  useEffect(() => {
    const idPsi = localStorage.getItem("id");
    if (idPsi) {
      fetch(`http://localhost:3000/user/psicologos/${idPsi}`)
        .then(response => {
          if (!response.ok) throw new Error("Erro ao buscar os dados do psicólogo");
          return response.json();
        })
        .then(data => {
          setEmail(data.email || ''); // Atualiza o email
          setEstado(data.estado || ''); // Atualiza o estado se disponível
          setTelefone(data.telefone || ''); // Atualiza o telefone se disponível
          setSobrenome(data.sobrenome || '');
        })
        .catch(error => console.error("Erro:", error));
    }
  }, []);

  // Pega a foto do psicólogo
  useEffect(() => {
    const idPsi = localStorage.getItem("id");
    if (idPsi) {
      fetch(`http://localhost:3000/user/psicologos/${idPsi}/foto`)
        .then(response => {
          if (!response.ok) throw new Error("Erro ao buscar a imagem");
          return response.json();
        })
        .then(data => {
          const imageUrl = `http://localhost:3000/${data.foto.replace(/\\/g, '/')}`;
          setSelectedImage(imageUrl);
        })
        .catch(error => console.error("Erro:", error));
    }
  }, []);

  const handleSaveChanges = async (e) => {
    const idPsi = localStorage.getItem('id');
    e.preventDefault()
    if (!idPsi) {
        console.error('ID do psicologo não encontrado no localStorage');
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
        const response = await fetch(`http://localhost:3000/infopsi/${idPsi}`, {
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
    <div className="w-full h-[80vh] bg-white rounded-2xl flex items-center max-md:flex-col max-md:scrollbar-thin max-md:overflow-y-scroll max-md:overflow-x-hidden max-md:h-[82vh] max-lg:h-[50vh] max-2xl:max-h-[500px]">

      <h1 className=" max-md:mt-4 whitespace-nowrap font-poppins font-bold text-[23px] max-md:text-[20px] text-primary-700 md:hidden">
                Altere e salve suas Alterações!
            </h1>

      <div className='w-[40%] h-full bg-white flex flex-col items-center rounded-bl-2xl rounded-2xl p-4 relative max-lg:w-[35%]'>
        <div className='h-40 w-40 bg-[#465A7F] mt-7 rounded-full aspect-square relative max-lg:h-32 max-lg:w-32'>
          <div className='flex relative flex-col'>
            <input
              type="file"
              id="image-input"
              accept="image/*"
              onChange={handleImageChange}
              className="flex flex-col translate-y-16 cursor-pointer h-[80%] opacity-0"
            />
          </div>
          <label htmlFor="image-input" className="w-full h-full rounded-full flex justify-center items-center bsolute left-1/2 right-1/2">
            {selectedImage ? (
              <img src={selectedImage} alt="Imagem selecionada" className="h-[102%] w-[102%] rounded-full object-cover -translate-y-[18.5%] cursor-pointer" />
            ) : (
              <span className="text-5xl text-white items-center flex -translate-y-8" draggable="true">+</span>
            )}
          </label>
        </div>

        <h3 className='mt-3 font-poppins text-[#465A7F] text-sm font-medium'>Escolher foto</h3>
        <h2 className="mt-1 font-poppins text-[#000000] text-xl font-medium text-center">{nomeFormartado}</h2>
        <h3 className='mt-1 font-poppins text-[#465A7F] text-sm font-medium'>ID: {id_psi}</h3>
        <h3 className='mt-7 font-poppins text-[#465A7F] text-sm font-medium text-center'>Criação de conta: <span className='font-poppins text-[#6083c4] text-lg font-medium'>{diaConta}</span></h3>
        <hr className='w-60 h-[0.1px] border border-[#1c283d] max-md:hidden max-lg:hidden' />
        <a href='/home/psicologo' className='w-fit flex justify-center'>
          <button className="mt-10 w-fit h-fit bg-[#8CB3FF] hover:bg-[#546481] text-white font-bold py-2 px-4 rounded-xl whitespace-nowrap max-md:hidden duration-500">Ver Consultas</button>
        </a>
        <div className='w-[1px] h-[87%] bg-gray-500 absolute right-0 translate-y-10 max-md:hidden '></div>
      </div>

      {/* Div do componente das alterações */}
      <div className="w-full h-full flex items-center font-poppins font-medium relative">

        <h1 className="absolute top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap font-poppins font-bold text-[23px] text-primary-700 max-md:hidden max-lg:text-[18px]">
          Altere e salve suas Alterações!
        </h1>

          {/* Form dos inputs e labels */}
          <form id="form1" method="post" onSubmit={handleSaveChanges} className="grid max-md:grid-cols-1 grid-cols-2 items-center flex-col  ml-12 w-full space-y-10 place-items-center -translate-y-8 max-md:ml-0 max-md:-translate-y-0 max-md:translate-y-7 max-lg:ml-0 max-xl:ml-3 ">
            {/* Div Nome */}
            
            <div className="flex flex-col w-full ml-8 max-md:ml-0 max-md:justify-center max-md:items-center max-md:relative">
              <label className="text-[#807e7e]">Nome:</label>
              <input
                placeholder={nomeFormartado}
                readOnly
                type="text"
                id="input_name_alterações"
                className="border-b-2 border-[#807e7e] font-satoshi-Regular placeholder:font-poppins placeholder:font-medium outline-none w-3/4 max-md:text-center placeholder:text-slate-900"
              />
            </div>

            {/* Div Email */}
            <div className="flex flex-col w-full ml-8 -translate-y-[19px] max-md:-translate-y-[0px] max-md:ml-0 max-md:justify-center max-md:items-center">
              <label className="text-[#807e7e]">Email:</label>
              <input
                readOnly
                placeholder={email}
                type="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)} // Controlando o email
                id="input_email_alterações"
                className="border-b-2 border-[#807e7e] placeholder:font-poppins placeholder:font-medium outline-none w-3/4 max-md:text-center placeholder:text-slate-900 font-satoshi-Regular"
              />
            </div>

            {/* Div Estado */}
            <div className="flex flex-col w-full ml-8 max-md:ml-0 max-md:justify-center max-md:items-center">
              <label className="text-[#807e7e]">Estado:</label>
              <input
                type="text"
                id="input_estado"
                value={Estado}
                onChange={(e) => setEstado(e.target.value)} // Atualiza o estado
                className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4 max-md:items-center"
              />
            </div>

            {/* Div Sobrenome */}
            <div className="flex flex-col w-full ml-8 max-md:ml-0 max-md:justify-center max-md:items-center">
              <label className="text-[#807e7e]">Sobrenome:</label>
              <input
                placeholder={sobrenome}
                readOnly
                type="text"
                id="input_sobrenome_alterações"
                className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4 placeholder:font-poppins placeholder:font-medium max-md:text-center placeholder:text-slate-900"
              />
            </div>

            {/* Div Telefone */}
            <div className="flex flex-col w-full ml-8 max-md:ml-0 max-md:justify-center max-md:items-center">
              <label className="text-[#807e7e]">Telefone:</label>
              <input
                placeholder="(XX) 99999-9999"
                type="tel"
                maxLength={11}
                value={telefone}
                onChange={(e) => setTelefone(formatarTelefone(e.target.value))} // Formata o telefone
                id="input_telefone"
                className="border-b-2 border-[#807e7e] font-satoshi-Regular placeholder:font-poppins placeholder:font-medium outline-none w-3/4 max-md:text-center placeholder:text-slate-900"
              />
            </div>

            {/* Div Cidade */}
            <div className="flex flex-col w-full ml-8 max-md:ml-0 max-md:justify-center max-md:items-center">
              <label className="text-[#807e7e]">Cidade:</label>
              <input
                placeholder=""
                onChange={(e) => setCidade(e.target.value)}
                value={cidade}
                type="text"
                id="input_cidade"
                className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4 max-md:items-center"
              />
            </div>
                <button className="md:absolute bottom-0 translate-y-16 max-2xl:-translate-x-4 max-2xl:translate-y-28 whitespace-nowrap bg-[#3B82F6] w-1/3 px-2 py-1 font-poppins text-white h-[5vh] rounded-lg hover:bg-primary-700  hover:rounded-xl transition-all duration-300 mb-3 max-md:h-fit max-md:py-2 max-md:-translate-y-2 max-md:translate-x-1 max-md:w-1/2 max-lg:translate-x-0 max-lg:w-1/2 max-lg:py-1 max-lg:px-1 max-lg:h-fit max-xl:w-1/2 max-xl:-translate-x-1 max-xl:bottom-2">
                  Salvar Alterações
                </button>
          </form>
        </div>
      </div>
  );
}
