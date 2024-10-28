import React, { useState, useEffect } from 'react';
import "../sections/animate.css";

export function InfoPsi({ onChange, nome}) {
  const [TextArea, SetTextArea] = useState("");
  const [Topicos, SetTopicos] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

 

  // Função para atualizar o estado da TextArea
  function PegarValorTextArea(e) {
    SetTextArea(e.target.value);
  }

  // Adiciona o valor da TextArea a Topicos
  function ValorTopicos() {
    if (TextArea.trim() !== "" && TextArea.length <= 32 && Topicos.length <= 10) {
      SetTopicos([...Topicos, TextArea]);
    }
    SetTextArea('');
  }

  // Função que exclui um tópico
  function ExcluirTopicos(index) {
    const ValorTopicosNew = Topicos.filter((_, i) => i !== index);
    SetTopicos(ValorTopicosNew);
  }

  const idPsi = localStorage.getItem("id"); 

  // useEffect para buscar a imagem do psicólogo
  useEffect(() => {
// Recupera o ID do psicólogo
  
    if (idPsi) {
      fetch(`http://localhost:3000/user/psicologos/${idPsi}/foto`) // Requisição para obter a imagem
        .then(response => {
          if (!response.ok) throw new Error("Erro ao buscar a imagem");
          return response.json();
        })
        .then(data => {
          const imageUrl = `http://localhost:3000/${data.foto.replace(/\\/g, '/')}`; // Formata a URL
          setSelectedImage(imageUrl); // Armazena a URL da imagem no estado
          console.log(imageUrl); // Log da URL formatada
        })
        .catch(error => console.error("Erro:", error));
    }
  }, []);
  

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
    onChange(e);
  };

  return (
    <div className="w-[100%] h-[80vh] bg-white rounded-2xl flex items-center">
      {/* Div que contém a imagem e o input de arquivo */}
      <div className='w-[35%] h-full bg-white flex flex-col items-center relative rounded-bl-2xl rounded-tl-2xl border-[#6b6b6b]'>
        {/* Div que contém a imagem */}
        <div className='h-40 w-40 bg-[#465A7F] mt-7 rounded-full aspect-square relative'>
          <input
            type="file"
            id="image-input"
            accept="image/*"
            onChange={handleImageChange}
            className="absolute top-1/3 ml-4 mt-3 opacity-0 z-10"
          />
          <label htmlFor="image-input" className="w-full h-full rounded-full flex justify-center items-center">
            {selectedImage ? (
              <img src={selectedImage} alt="Imagem do psicólogo" className="h-full w-full rounded-full object-cover" />
            ) : (
              <span className="text-5xl text-white items-center flex mb-2" draggable="true">+</span>
            )}
          </label>
        </div>
        <h3 className='mt-3 font-poppins text-[#465A7F] text-sm font-medium'>Escolher foto</h3>
        <h2 className="mt-1 font-poppins text-[#000000] text-xl font-medium whitespace-break-spaces break-all text-center">{nome}</h2>
        <h3 className='mt-1 font-poppins text-[#465A7F] text-sm font-medium'>ID:{` ${idPsi}`}</h3>
        <a href='/homepage-pc' className='w-fit h-fit flex justify-center mt-7'>
          <button className="w-fit bg-[#8CB3FF] hover:bg-[#546481] text-white font-bold py-2 px-4 rounded-xl ">
            Ver Histórico
          </button>
        </a>
        <div className='w-[1px] h-[87%] bg-gray-500 absolute right-0 translate-y-10'></div>
      </div>
      {/* Div do componente das alterações */}
      <div className="w-full h-full flex items-center justify-center flex-col font-poppins font-medium relative rounded-tl-2xl p-6 space-y-10">
        <h1 className='absolute top-10 font-poppins font-semibold text-[25px] text-primary-700'>Defina seus tópicos e suas formações</h1>

        <div className='flex flex-col w-[95%] h-[37%] relative'>
          <h1 className='font-poppins font-bold text-[23px] text-primary-700 ml-2 mb-2'>Tópicos</h1>
          <div className='w-full h-full relative whitespace-normal'>
            <div className='absolute top-3 left-3 flex flex-wrap space-x-2 w-full h-fit max-w-[98%]'>
              {Topicos.map((item, index) => (
                <div key={index} className='canela flex items-center h-fit space-x-3 bg-[#9FB9EB] pl-2 p-1 pr-2 rounded-lg mb-2'>
                  <h3 id='letra' className='font-poppins text-[#121926] break-words'>{item}</h3>
                  <div onClick={() => ExcluirTopicos(index)} className='xis h-full justify-center items-center'>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-0.5 text-[#121926] scale-125 duration-300 cursor-pointer'>
                      <path d="M1 9L9 1" stroke="currentColor" strokeWidth="2" />
                      <path d="M9 9L1 1" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            <textarea
              className='w-full h-full rounded-2xl p-4 pl-4 outline-none resize-none bg-[#C9D4E9]'
              onChange={PegarValorTextArea}
              value={TextArea}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key == 13) {
                  ValorTopicos();
                  e.preventDefault();
                }
              }}
            />

            <button className='absolute right-6 bottom-4' onClick={ValorTopicos}>
              <svg width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d=" M43.6667 2L20.75 24.9167M43.6667 2L29.0833 43.6667L20.75 24.9167M43.6667 2L2 16.5833L20.75 24.9167" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

          </div>

        </div>

        <div className='flex flex-col w-[95%] h-[37%] relative'>
          <h1 className='font-poppins font-bold text-[23px] text-primary-700 ml-2 mb-2'>Formação</h1>

          <textarea className='w-full h-full bg-[#C9D4E9] rounded-2xl p-2 pl-4 outline-none resize-none'>
          </textarea>

          <button className='absolute right-6 bottom-4'>
            <svg
              width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M43.6667 2L20.75 24.9167M43.6667 2L29.0833 43.6667L20.75 24.9167M43.6667 2L2 16.5833L20.75 24.9167" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </button>
        </div>
      </div>

    </div>
  )
}