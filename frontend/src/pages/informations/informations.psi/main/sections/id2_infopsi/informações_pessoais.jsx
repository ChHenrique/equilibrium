import React, { useState } from 'react'


export function Alterações_Pessoais() {



  return (
    // Div do componente das alterções
    <div className="w-full h-full flex items-center justify-center flex-col font-poppins font-medium relative rounded-tl-2xl p-6 space-y-10">

      <h1 className='absolute top-10 font-poppins font-semibold text-[25px] text-primary-700'>Defina seus tópicos e suas formação</h1>

      <div className='flex flex-col w-[95%] h-[37%] relative'>
        
        <h1 className='font-poppins font-bold text-[23px] text-primary-700 ml-2 mb-2'>Tópicos</h1>

        <textarea name="" id="" className='w-full h-full bg-[#C9D4E9] rounded-2xl p-2 pl-4 outline-none resize-none'>
        </textarea>
        <button className='absolute right-6 bottom-4'>
          <svg
           width="30" height="30" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M43.6667 2L20.75 24.9167M43.6667 2L29.0833 43.6667L20.75 24.9167M43.6667 2L2 16.5833L20.75 24.9167" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        
        </button>
      </div>

      <div className='flex flex-col w-[95%] h-[37%] relative'>
        <h1 className='font-poppins font-bold text-[23px] text-primary-700 ml-2 mb-2'>Formação</h1>

        <textarea name="" id="" className='w-full h-full bg-[#C9D4E9] rounded-2xl p-2 pl-4 outline-none resize-none'>
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