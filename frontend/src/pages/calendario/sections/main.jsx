import React from "react";
import { useState } from "react";
import { Bolas } from "./bolas"
import DatePicker from 'react-datepicker';
import { registerLocale } from "react-datepicker";
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'; // Importa a localidade brasileira

import '../index.css'
import 'react-datepicker/dist/react-datepicker.css';


export function Main (){

registerLocale('pt-BR', ptBR);

  const [page,setPage] = useState(1);
  const [startDate, setStartDate] = useState(new Date());

  function Render(){
    if(page == 1){
             return(
               <div className="w-full h-full flex justify-center items-center flex-col pb-[40%]">
                 <h1 className="font-satoshi-Regular text-3xl font-medium text-primary-700 pb-16"> Escolha a data de sua consulta</h1>
               <div className="flex flex-row justify-center items-center">
               <DatePicker
               open={true}
               minDate={new Date() +1}
               showTimeSelect
               timeIntervals={15}
               timeFormat="HH:mm"
               locale="pt-BR"
               dateFormat="d/MM/y"


               className="items-center flex w-full p-1 font-poppins text-xl border-primary-700 border-b-2 text-primary-700 outline-1 outline-primary-700"
              selected={startDate}
              onChange={(date) => {setStartDate(date) 
                                                        console.log(startDate)}}>


              </DatePicker>
                 <svg className="w-7  p-0 -translate-x-8" viewBox= "0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path className="w-full h-full p-0 m-0"  d="M32 4V12M16 4V12M6 20H42M10 8H38C40.2091 8 42 9.79086 42 12V40C42 42.2091 40.2091 44 38 44H10C7.79086 44 6 42.2091 6 40V12C6 9.79086 7.79086 8 10 8Z" stroke=" #46597f" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
                 <button onClick={() => setPage(2)}>
                     <svg width="17" height="25" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M16.4142 16.4142C17.1953 15.6332 17.1953 14.3668 16.4142 13.5858L3.68629 0.857864C2.90524 0.0768158 1.63891 0.0768158 0.857864 0.857864C0.0768158 1.63891 0.0768158 2.90524 0.857864 3.68629L12.1716 15L0.857864 26.3137C0.0768158 27.0948 0.0768158 28.3611 0.857864 29.1421C1.63891 29.9232 2.90524 29.9232 3.68629 29.1421L16.4142 16.4142ZM13 17H15V13H13V17Z" fill="black"/>
                     </svg>
                 </button>

                </div>
                </div>
             )


              }else{
                return(
                   <div className="w-full h-full flex justify-center items-center flex-col">
                    <h1 className="font-satoshi-Regular text-3xl font-medium text-primary-700 pb-16">Você deseja solicitar essa consulta?</h1>
                        <h1 className="font-satoshi-Regular text-2xl font-bold text-primary-700 p-2 border-2 border-primary-800 rounded-[16px] m-2 flex-row flex justify-center items-center">Data: {startDate.getUTCDate()} / {startDate.getUTCMonth() +1}               
                          
                          <svg width="30" height="30" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-4">
<path d="M28 2V10M12 2V10M2 18H38M6 6H34C36.2091 6 38 7.79086 38 10V38C38 40.2091 36.2091 42 34 42H6C3.79086 42 2 40.2091 2 38V10C2 7.79086 3.79086 6 6 6Z" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</h1>
                        <h1 className="font-satoshi-Regular text-2xl font-bold text-primary-700 p-2 border-2 border-primary-800 rounded-[16px] m-2 flex flex-row justify-center items-center">Hora: {startDate.getHours() } : {startDate.getUTCMinutes()}

                        <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-4">
<path d="M24 12V24L32 28M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



                        </h1>
                       <button className="w-1/4 h-fit text-2xl bg-primary-500 text-white p-2 rounded-[16px] m-12 font-bold hover:bg-primary-800 duration-300">Confirmar</button>
                   </div>
                )
              }
  }


  return(

        <div className="w-full h-full bg-white rounded-2xl relative font-poppins">
      <Bolas/>
      <button className="absolute m-4 " onClick={() => {if(page !=1 ){
                                                                                                      setPage(page-1)
      }
      }}>
      <svg width="17" height="25" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path d="M0.585787 13.5858C-0.195262 14.3668 -0.195262 15.6332 0.585786 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857865C15.3611 0.0768168 14.0948 0.0768167 13.3137 0.857865L0.585787 13.5858ZM4 13L2 13L2 17L4 17L4 13Z" fill="black"/>
</svg>
</button>

      {Render()}
      </div>
  )
}