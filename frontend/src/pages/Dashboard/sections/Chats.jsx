import React from "react";
import { useState } from "react";

export function Chats(){
   const [mensagens,setmensagens] = useState([])
   const [value,setvalue] = useState('')

function pegavalor(e){
    setvalue(e.target.value)
}
function aplicaMensagens(){
    if(value !== ''){
    setmensagens([...mensagens, value])
    setvalue('')}
}



    return(
        
        <div className="bg-white h-full w-full font-poppins flex flex-row rounded-2xl">
            {/*Aba dos conversantes*/}
            <div className="h-full w-5/12 bg-slate-100 flex flex-col  rounded-l-2xl border-r-2 border-slate-400">
               <h1 className="text-2xl m-6 text-primary-700 font-medium">Chats</h1>
                <div className="w-full h-2/12 bg-slate-100 justify-start items-end flex  rounded-tl-2xl border-b-2 border-slate-400">
                    <input type="text" placeholder=" Pesquisar..." className=" w-11/12 m-4 h-9 bg-gray-200 rounded-xl placeholder:text-primary-700 outiline-2 outline-slate-400"/>
                </div>


                {/*Aba do chat*/}
            </div>
            <div className="bg-white h-full w-7/12 flex-col flex justify-start items-center rounded-r-2xl" >
            

                {/*Chat*/}
               <div id="Text" className="h-[80%] w-full bg-white  flex flex-col items-end justify-end" >
                   {mensagens.map((mensagem, index) => {
                    return(
                    <div className="w-full flex">
                       <h1 className="text-xl bg-primary-300 w-fit ml-auto p-2 m-2 rounded-xl" key={index}>{mensagem}</h1>
                    </div>
                   )})}

                    


               </div>
                <div className="w-9/12 justify-center items-center flex h-[20%] ">

                       <input type="text" className="w-11/12 h-12 rounded-2xl  bg-secondary-100 placeholder: text-primary-700 placeholder:p-2  border-none outline-1 outline-slate-300 p-2" placeholder="Mensagem"  value ={value} onChange={pegavalor}/>
                   
                       {/*Botao de enviar do chat*/}

                       <button className="h-12 w-12 rounded-2xl text-primary-700 hover:text-primary-500 transition duration-300 "  onClick={aplicaMensagens}>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9 w-9">
<path d="M45.8337 4.16663L22.917 27.0833M45.8337 4.16663L31.2503 45.8333L22.917 27.0833M45.8337 4.16663L4.16699 18.75L22.917 27.0833" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</button>
                </div>
            </div>
            <div>

            </div>

        </div>
    )
}