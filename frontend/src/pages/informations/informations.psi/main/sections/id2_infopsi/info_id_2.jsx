import React, { useState } from 'react';
import { Alterações_Pessoais } from './informações_pessoais';

export function InfoPsi({ imagem, onChange, nome, id_psi }) {
  const [selectedImage, setSelectedImage] = useState(imagem);

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

          {/* Input de arquivo para selecionar a imagem */}
          <input
            type="file"
            id="image-input"
            accept="imagem/*"
            onChange={handleImageChange}
            className="absolute top-1/3 ml-4 mt-3 opacity-0 z-10"
          />

          {/* Label que contém a imagem ou o símbolo de adição */}
          <label htmlFor="image-input" className="w-full h-full rounded-full flex justify-center items-center">

            {/* Se a imagem foi selecionada, exibimos a imagem */}
            {selectedImage ? (
              <img src={URL.createObjectURL(selectedImage)} alt="Imagem selecionada" className="h-full w-full rounded-full object-cover" />
            ) : (
              // Se a imagem não foi selecionada, não exibimos a imagem
              <span className="text-5xl text-white items-center flex mb-2" draggable="true">+</span>
            )}
          </label>
        </div>

        <h3 className='mt-3 font-poppins text-[#465A7F] text-sm font-medium'>Escolher foto</h3>
        <h2 className="mt-1 font-poppins text-[#000000] text-xl font-medium whitespace-break-spaces break-all text-center">{nome}
        </h2>
        <h3 className='mt-1 font-poppins text-[#465A7F] text-sm font-medium'>ID:{id_psi}</h3>

        <a href='/homepage-pc' className='w-fit h-fit flex justify-center mt-7'>
          <button
            className=" w-fit bg-[#8CB3FF] hover:bg-[#546481] text-white font-bold py-2 px-4 rounded-xl ">
            Ver Histórico
          </button>
        </a>
        <div className='w-[1px] h-[87%] bg-gray-500 absolute right-0 translate-y-10'></div>

      </div>

      <Alterações_Pessoais />
    </div>
  )
}