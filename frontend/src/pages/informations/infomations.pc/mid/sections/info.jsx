import React, { useState } from 'react';
import { Alterações } from './alterações';

export function Info({ imagem, onChange, num_sesões, diaConta, nome, id_pc }) {
  const [selectedImage, setSelectedImage] = useState(imagem);

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
    onChange(e);
  };

  return (
    <div className="w-[90vw] h-[80vh] bg-white rounded-lg flex items-center relative max-md:flex-col">

      {/* Div que contém a imagem e o input de arquivo */}
      
      <div className='w-[25vw] h-full max-md:h-fit max-md:p-2 bg-white flex flex-col items-center border-r-2 max-md:border-0 border-[#6b6b6b] max-md:w-full relative z-10 max-md:rounded-tr-2xl max-md:rounded-tl-2xl'>

      <h1 className=" max-md:mt-4 whitespace-nowrap font-poppins font-bold text-[23px] max-md:text-[20px] text-primary-700 md:hidden">
                Altere e salve suas Alterações!
            </h1>

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
        <h2 className="mt-1 max-md:mt-0 font-poppins text-[#000000] text-xl font-medium whitespace-break-spaces break-all text-center max-md:whitespace-nowrap">{nome}
        </h2>
        <h3 className='mt-1 max-md:mt-0 font-poppins text-[#465A7F] text-sm font-medium'>ID:{id_pc}</h3>

        <h3 className='mt-7 max-md:mt-4 font-poppins max-md:border-b-1 max-md:border-b-primary-800 text-[#465A7F] text-sm font-medium mr-2'>Criação de conta: <span className='font-poppins text-[#6083c4] text-lg font-medium'>{diaConta}</span>
        </h3>
        <hr className='w-60 h-[0.1px] border border-[#1c283d] max-md:hidden' />

        <a href='/home/paciente' className='w-fit flex justify-center'>
          <button
            className="mt-10 w-full bg-[#8CB3FF] hover:bg-[#546481] max-md:hidden text-white font-bold py-2 px-4 rounded-xl">
            Ver Consultas
          </button>
        </a>
      </div>

      <Alterações/>
    </div>
  )
}