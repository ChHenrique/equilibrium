import React, { useState, useEffect } from 'react';

export function Alterações_Pessoais() {
  // Valor do text area
  const [TextArea, SetTextArea] = useState("");

  // Valor da Array
  const [Array, SetArray] = useState([]);

  // Função para atualizar o estado da TextArea
  function PegarValorTextArea(e) {
    const inputText = e.target.value;
    const wordCount = inputText.trim().split(/\s+/).length; // Conta as palavras

    // Verifica se o número de palavras é menor ou igual a 30
    if (wordCount <= 30) {
      SetTextArea(inputText); // Atualiza o estado se não exceder 30 palavras
    }
  }

  // Função para adicionar o valor da TextArea a Array
  function ValorArray() {
    if (TextArea.trim() !== "") {
      SetArray([...Array, TextArea]);
      SetTextArea(''); // Limpa a TextArea
    }
  }

  // Função que excluir a array
  function ExcluirArray(index) {
    const ValorArrayNew = Array.filter((_, i) => i !== index); // Exclui o valor da Array, de acordo com o index
    SetArray(ValorArrayNew); // Atualiza o valor da Array, excluindo o antigo.
  }

  // useEffect para ver a mudança da array, e atualizar ela
  useEffect(() => {
    console.log("Array de valores atualizada:", Array);
  }, [Array]); // Executará assim que a Array mudar.

  return (
    // Div do componente das alterações
    <div className="w-full h-full flex items-center justify-center flex-col font-poppins font-medium relative rounded-tl-2xl p-6 space-y-10">
      <h1 className='absolute top-10 font-poppins font-semibold text-[25px] text-primary-700'>Defina seus tópicos e suas formações</h1>

      <div className='flex flex-col w-[95%] h-[37%] relative'>
        <h1 className='font-poppins font-bold text-[23px] text-primary-700 ml-2 mb-2'>Tópicos</h1>
        <div className='w-full h-full relative whitespace-normal'>
          <div className='absolute top-3 left-3 flex flex-wrap space-x-2 w-full h-fit max-w-[98%]'>
            {Array.map((item, index) => (
              <div key={index} className='flex items-center h-fit space-x-3 bg-[#9FB9EB] pl-2 p-1 pr-2 rounded-lg mb-2'>
                <h3 id='letra' className='font-poppins text-[#121926] break-words'>{item}</h3>
                <div onClick={() => ExcluirArray(index)}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-0.5 text-[#121926] hover:text-red-600 duration-300'>
                    <path d="M1 9L9 1" stroke="currentColor" strokeWidth="2" />
                    <path d="M9 9L1 1" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <textarea
            className='w-full h-full rounded-2xl p-2 pl-4 outline-none resize-none bg-[#C9D4E9]'
            onChange={PegarValorTextArea}
            value={TextArea}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                ValorArray();
                e.preventDefault();
              }
            }}
          />

          <button className='absolute right-6 bottom-4' onClick={ValorArray}>
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
  )
}