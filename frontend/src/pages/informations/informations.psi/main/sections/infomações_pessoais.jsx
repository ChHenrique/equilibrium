import React, { useState, useEffect } from 'react';

export function Info({ imagem, onChange, num_sesões, diaConta, nome, id_psi }) {
  const [selectedImage, setSelectedImage] = useState(imagem);
  const [abriu, abrir] = useState(false);
  const [abriu_pais, abrir_pais] = useState(false);
  const [Estado, setEstado] = useState('');
  const [selecionar_sexo, setselecionar_sexo] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleToggle1 = () => abrir(!abriu);
  const handleToggle2 = () => abrir_pais(!abriu_pais);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Cria um URL para o arquivo e atualiza o estado
      onChange(e);
    }
  };

  // useEffect para buscar a imagem do psicólogo
  useEffect(() => {
    const idPsi = localStorage.getItem("id"); // Recupera o ID do psicólogo
    if (idPsi) {
      fetch(`http://localhost:3000/user/psicologos/${idPsi}/foto`) // Requisição para obter a imagem
        .then(response => {
          if (!response.ok) throw new Error("Erro ao buscar a imagem");
          return response.json();
        })
        .then(data => {
          const imageUrl = `http://localhost:3000/${data.foto.replace(/\\/g, '/')}`; // Formata a URL
          setSelectedImage(imageUrl); // Armazena a URL da imagem no estado
        })
        .catch(error => console.error("Erro:", error));
    }
  }, []);

  return (
    <div className="w-[100%] h-[80vh] bg-white rounded-2xl flex items-center">
      {/* Div que contém a imagem e o input de arquivo */}
      <div className='w-[40%] h-full bg-white flex flex-col items-center rounded-bl-2xl rounded-tl-2xl p-4 relative'>
        {/* Div que contém a imagem */}
        <div className='h-40 w-40 bg-[#465A7F] mt-7 rounded-full aspect-square relative'>
          <div className='flex relative flex-col'>
            <input
              type="file"
              id="image-input"
              accept="image/*" // Corrigido para "image/*"
              onChange={handleImageChange}
              className="flex flex-col translate-y-16 cursor-pointer h-[80%] opacity-0"
            />
          </div>
          {/* Label que contém a imagem ou o símbolo de adição */}
          <label htmlFor="image-input" className="w-full h-full rounded-full flex justify-center items-center">
            {selectedImage ? (
              <img src={selectedImage} alt="Imagem selecionada" className="h-full w-full rounded-full object-cover -translate-y-7" />
            ) : (
              <span className="text-5xl text-white items-center flex mb-2" draggable="true">+</span>
            )}
          </label>
        </div>

        <h3 className='mt-3 font-poppins text-[#465A7F] text-sm font-medium'>Escolher foto</h3>
        <h2 className="mt-1 font-poppins text-[#000000] text-xl font-medium whitespace-break-spaces break-all text-center">{nome}</h2>
        <h3 className='mt-1 font-poppins text-[#465A7F] text-sm font-medium'>ID:{id_psi}</h3>
        <h3 className='mt-7 font-poppins text-[#465A7F] text-sm font-medium mr-2'>Número de sessões: <span className='font-poppins text-[#6083c4] text-lg font-medium'>{num_sesões}</span></h3>
        <hr className='w-60 h-[0.1px] border border-[#1c283d]' />
        <h3 className='mt-7 font-poppins text-[#465A7F] text-sm font-medium mr-2'>Criação de conta: <span className='font-poppins text-[#6083c4] text-lg font-medium'>{diaConta}</span></h3>
        <hr className='w-60 h-[0.1px] border border-[#1c283d]' />
        <a href='/home/psicologo' className='w-full flex justify-center'>
          <button className="mt-10 w-2/4 bg-[#8CB3FF] hover:bg-[#546481] text-white font-bold py-2 px-4 rounded-xl whitespace-nowrap">Ver Histórico</button>
        </a>
        <div className='w-[1px] h-[87%] bg-gray-500 absolute right-0 translate-y-10'></div>
      </div>

      {/* Div do componente das alterações */}
      <div className="w-full h-full flex items-center font-poppins font-medium relative">
        <h1 className="absolute top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap font-poppins font-bold text-[23px] text-primary-700">Altere e salve suas Alterações!</h1>
        {/* Formulário para as alterações */}
        <div className="h-full w-1/2 bg-white flex flex-col items-center pt-5">
          <form id="form1" method="post" className="flex items-center flex-col mt-24 ml-12 w-full h-80% space-y-10">
            <div className="flex flex-col w-full ml-8">
              <label className="text-[#807e7e]">Nome:</label>
              <input readOnly type="text" id="input_name_alterações" className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4" />
            </div>
            <div className="flex flex-col w-full ml-8">
              <label className="text-[#807e7e]">Email:</label>
              <input readOnly type="email" id="input_email_alterações" className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4" />
            </div>
            <div className="flex flex-col w-full ml-8">
              <label className="text-[#807e7e]">Estado:</label>
              <input value={Estado} type="text" id="input_estado" className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4" />
            </div>
            <div className="flex flex-col w-full ml-8">
              <label className="text-[#807e7e]">Informar sexo:</label>
              <div className="relative flex items-center">
                <select id="selecionar_sexo" value={selecionar_sexo} onClick={handleToggle1} className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4 mt-2 appearance-none">
                  <option value="prefiro_não_informar">Prefiro não informar...</option>
                  <option value="feminino">Feminino</option>
                </select>
                <svg className={`relative right-4 top-1/3 transform -translate-y-1/2 w-4 h-4 text-slate-600 transition-transform duration-300 ${abriu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </form>
        </div>

        {/* Formulário para outros dados */}
        <div className="h-full w-1/2 bg-white flex flex-col items-center pt-5">
          <form id="form2" method="post" className="flex items-center flex-col mt-24 ml-12 w-full h-80% space-y-10">
            <div className="flex flex-col w-full ml-8">
              <label className="text-[#807e7e]">Sobrenome:</label>
              <input readOnly type="text" id="input_sobrenome_alterações" className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4" />
            </div>
            <div className="flex flex-col w-full ml-8">
              <label className="text-[#807e7e]">Telefone:</label>
              <input value={telefone} type="number" id="input_telefone_alterações" className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4" />
            </div>
            <div className="flex flex-col w-full ml-8">
              <label className="text-[#807e7e]">Cidade:</label>
              <input type="text" id="input_cidade" className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4" />
            </div>
            <div className="flex flex-col w-full ml-8">
              <label className="text-[#807e7e]">País:</label>
              <div className="relative flex items-center">
                <select id="seleção de país" onClick={handleToggle2} className="border-b-2 border-[#807e7e] font-satoshi-Regular outline-none w-3/4 mt-2 appearance-none">
                  <option value="">País</option>
                  <option value="">Brasil</option>
                </select>
                <svg className={`relative right-4 top-1/3 transform -translate-y-1/2 w-4 h-4 text-slate-600 transition-transform duration-300 ${abriu_pais ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </form>
        </div>

        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-[#3B82F6] w-2/6 font-poppins text-white h-[5vh] rounded-lg hover:bg-primary-700 hover:w-2/5 hover:rounded-xl transition-all duration-300">Salvar Alterações</button>
      </div>
    </div>
  );
}
