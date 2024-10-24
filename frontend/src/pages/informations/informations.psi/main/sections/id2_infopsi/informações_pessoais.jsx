import React, { useState, useEffect } from 'react'


export function Alterações_Pessoais() {


  // Valor do text area
  const [TextArea, SetTextArea] = useState("")

  // Valor da Array
  const [Array, SetArray] = useState([])

  // Função para atualizar o estado da TextArea
  function PegarValorTextArea(e) {
    SetTextArea(e.target.value)
  }

  // Função para adicionar o valor da TextArea a Array

  function ValorArray() {
    if (TextArea.trim() !== "") {
      SetArray([...Array, TextArea])
      SetTextArea('') // Limpa a TextArea
    }
    else if (SetArray == "") {
      SetArray()
    }
  }

  // Função que excluir a array

  function ExcluirArray(index) {
    const ValorArrayNew = Array.filter((_, i) => i !== index) // Vai excluir o valor da Array, de o acordo com o index
    SetArray(ValorArrayNew) // Atualiza o valor da Array, excluindo o antigo.
  }

  // useEffect para ver a mudaça da array, e atualizar ela

  useEffect(() => {

    // Adicione a Lógica
    console.log("Array de valores atualizada:", Array);

  }, [Array]); // Executará assim que a Array mudar.

  console.log(Array)

  return (
    // Div do componente das alterções
    <div className="w-full h-full flex items-center justify-center flex-col font-poppins font-medium relative rounded-tl-2xl p-6 space-y-10">

      <h1 className='absolute top-10 font-poppins font-semibold text-[25px] text-primary-700'>Defina seus tópicos e suas formação</h1>

      <div className='flex flex-col w-[95%] h-[37%] relative'>

        <h1 className='font-poppins font-bold text-[23px] text-primary-700 ml-2 mb-2'>Tópicos</h1>

        <div className='w-full h-full relative '>
          <div className='absolute flex w-full h-full bg-[#C9D4E9] whitespace-nowrap'>

            {Array.map((item, index) => (
              <div key={index} className='flex items-center h-fit w-fit space-x-3 bg-[#9FB9EB] pl-2 p-1 pr-2 rounded-lg whitespace-nowrap m-1'>
                <h3 className='font-poppins text-[#121926]'>{item}</h3>
                <div onClick={() => ExcluirArray(index)}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-0.5 text-[#121926] hover:text-red-600 duration-300'>
                    <path d="M1 9L9 1" stroke="currentColor" stroke-width="2" />
                    <path d="M9 9L1 1" stroke="currentColor" stroke-width="2" />
                </svg>
                </div>
              </div>
            ))}
          </div>

          <textarea name="" className='w-full h-full  rounded-2xl p-2 pl-4 outline-none resize-none' onChange={PegarValorTextArea} value={TextArea} onKeyDown={(e) => {
            if (e.key === "Enter") {
              ValorArray();
              e.preventDefault();
            }
          }}>

          </textarea>

          <button className='absolute right-6 bottom-4' onClick={ValorArray}>
            <svg
              width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M43.6667 2L20.75 24.9167M43.6667 2L29.0833 43.6667L20.75 24.9167M43.6667 2L2 16.5833L20.75 24.9167" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </button>
        </div>

      </div>

      <div className='flex flex-col w-[95%] h-[37%] relative'>
        <h1 className='font-poppins font-bold text-[23px] text-primary-700 ml-2 mb-2'>Formação</h1>

        <textarea name="" id="" className='w-full h-full bg-[#C9D4E9] rounded-2xl p-2 pl-4 outline-none resize-none z-20'>
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