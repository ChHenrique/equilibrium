import React, { useState, useEffect } from 'react';
import './animate.css'


export function Alterações_Piscologo() {
  const [TextArea, SetTextArea] = useState("");
  const [Topicos, SetTopicos] = useState([]);

  // Função para atualizar o estado da TextArea
  function PegarValorTextArea(e) {
    const inputText = e.target.value;

      SetTextArea(inputText); 

  }

  // adiciona o valor da TextArea a Topicos

  function ValorTopicos() {
    if (TextArea.trim() !== "" && TextArea.length <= 32 && Topicos.length <= 10) {
      SetTopicos([...Topicos, TextArea]);
    }
    SetTextArea('');
  }

  // Função que excluir o elemento que clicou com x

  function ExcluirTopicos(index) {
    const ValorTopicosNew = Topicos.filter((_, i) => i !== index); 
    SetTopicos(ValorTopicosNew); 
  }

  // useEffect para ver a mudança da Topicos, e atualizar ela
  useEffect(() => {
    console.log("Topicos de valores atualizada:", Topicos);
  }, [Topicos]); // Executará assim que a Topicos mudar.

  return (
    // Div do componente das alterações
    <div className="w-full h-full flex items-center justify-center flex-col font-poppins font-medium relative rounded-tl-2xl p-6 space-y-10">
      <h1 className='absolute top-10 font-poppins font-semibold text-[25px] text-primary-700'>Defina seus tópicos e suas formações</h1>

      <div className='flex flex-col w-[95%] h-[37%] relative'>
        <h1 className='font-poppins font-bold text-[23px] text-primary-700 ml-2 mb-2'>Tópicos</h1>
        <div className='w-full h-full relative whitespace-normal'>
          <div className='absolute top-3 left-3 flex flex-wrap space-x-2 w-full h-fit max-w-[98%]'>
            {Topicos.map((item, index) => (
              <div key={index}  className='canela flex items-center h-fit space-x-3 bg-[#9FB9EB] pl-2 p-1 pr-2 rounded-lg mb-2'>
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
  )
}