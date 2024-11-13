import React, { useState, useEffect } from 'react';

export function Info({ imagem, onChange, num_sesões, diaConta, nome, id_psi, sobrenome, email }) {
  const [selectedImage, setSelectedImage] = useState(imagem);
  const [Email, setEmail] = useState(email || ''); // Usar o email recebido como padrão
  const [Estado, setEstado] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cidade, setCidade ] = useState('')
  const [Sobrenome, setSobrenome ] = useState()


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


  //pega os dados do psicologo
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
          setSobrenome(data.sobrenome || '')
        })
        .catch(error => console.error("Erro:", error));
    }
  }, []);


  //pega a foto do psicologo
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

  return (
    <div className="w-full h-[80vh] bg-white rounded-2xl flex items-center">
      <div className='w-[40%] h-full bg-white flex flex-col items-center rounded-bl-2xl rounded-tl-2xl p-4 relative'>
        <div className='h-40 w-40 bg-[#465A7F] mt-7 rounded-full aspect-square relative'>
          <div className='flex relative flex-col'>
            <input
              type="file"
              id="image-input"
              accept="image/*"
              onChange={handleImageChange}
              className="flex flex-col translate-y-16 cursor-pointer h-[80%] opacity-0"
            />
          </div>
          <label htmlFor="image-input" className="w-full h-full rounded-full flex justify-center items-center">
            {selectedImage ? (
              <img src={selectedImage} alt="Imagem selecionada" className="h-[102%] w-[102%] rounded-full object-cover -translate-y-[18.5%] cursor-pointer" />
            ) : (
              <span className="text-5xl text-white items-center flex mb-2" draggable="true">+</span>
            )}
          </label>
        </div>

        <h3 className='mt-3 font-poppins text-[#465A7F] text-sm font-medium'>Escolher foto</h3>
        <h2 className="mt-1 font-poppins text-[#000000] text-xl font-medium text-center">{nome}</h2>
        <h3 className='mt-1 font-poppins text-[#465A7F] text-sm font-medium'>ID: {id_psi}</h3>
        <h3 className='mt-7 font-poppins text-[#465A7F] text-sm font-medium'>Criação de conta: <span className='font-poppins text-[#6083c4] text-lg font-medium'>{diaConta}</span></h3>
        <hr className='w-60 h-[0.1px] border border-[#1c283d]' />
        <a href='/home/psicologo' className='w-full flex justify-center'>
          <button className="mt-10 w-2/4 bg-[#8CB3FF] hover:bg-[#546481] text-white font-bold py-2 px-4 rounded-xl whitespace-nowrap">Ver Histórico</button>
        </a>
        <div className='w-[1px] h-[87%] bg-gray-500 absolute right-0 translate-y-10'></div>
      </div>

      {/* Div do componente das alterações */}
      <div className="w-full h-full flex items-center font-poppins font-medium relative">
        <h1 className="absolute top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap font-poppins font-bold text-[23px] text-primary-700">
          Altere e salve suas Alterações!
        </h1>

        <div className="h-full w-1/2 bg-white flex flex-col items-center pt-5">
          {/* Form dos inputs e labels */}
          <form id="form1" method="post" className="flex items-center flex-col mt-24 ml-12 w-full h-80% space-y-10 translate-y-14">
            {/* Div Nome */}
            <div className="flex flex-col w-full ml-8">
              <label className="text-[#807e7e] placeholder:font-poppins placeholder:font-semibold">Nome:</label>
              <input
                placeholder={nome}
                readOnly
                type="text"
                id="input_name_alterações"
                className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4"
              />
            </div>

            {/* Div Email */}
            <div className="flex flex-col w-full ml-8">
              <label className="text-[#807e7e]">Email:</label>
              <input
                placeholder={Email}
                type="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)} // Controlando o email
                id="input_email_alterações"
                className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4"
              />
            </div>

            {/* Div Estado */}
            <div className="flex flex-col w-full ml-8">
              <label className="text-[#807e7e]">Estado:</label>
              <input
                placeholder={Estado}
                type="text"
                id="input_estado"
                value={Estado}
                onChange={(e) => setEstado(e.target.value)} // Atualiza o estado
                className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4"
              />
            </div>
          </form>
        </div>

        {/* Form2 */}
        <div className="h-full w-1/2 bg-white flex flex-col items-center pt-5">
          <form id="form2" method="post" className="flex items-center flex-col mt-24 ml-12 w-full h-80% space-y-10 translate-y-14">
            {/* Div Sobrenome */}
            <div className="flex flex-col w-full ml-8">
              <label className="text-[#807e7e]">Sobrenome:</label>
              <input
                placeholder={Sobrenome}
                readOnly
                type="text"
                id="input_sobrenome_alterações"
                className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4"
              />
            </div>

            {/* Div Telefone */}
            <div className="flex flex-col w-full ml-8">
              <label className="text-[#807e7e]">Telefone:</label>
              <input
                placeholder='(XX) 99999-9999'
                type="tel"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)} // Controla o telefone
                id="input_telefone"
                className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4"
              />
            </div>

            {/* Div Cidade */}
            <div className="flex flex-col w-full ml-8">
              <label className="text-[#807e7e]">Cidade:</label>
              <input
                placeholder=''
                onChange={((e)=>{
                  setCidade(e.target.value)
                })}
                value={cidade}
                type="text"
                id="input_cidade"
                className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4"
              />
            </div>
          </form>
        </div>

        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-[#3B82F6] w-2/6 font-poppins text-white h-[5vh] rounded-lg hover:bg-primary-700 hover:w-2/5 hover:rounded-xl transition-all duration-300 mb-3">Salvar Alterações</button>
      </div>
    </div>
  );
}
