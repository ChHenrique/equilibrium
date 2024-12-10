import { useState } from "react"
import { ConsultasPsicologos } from "./Components/consult_user"

export function Historico() {
  const [pesq, setpesq] = useState([])
  const [value, setvalue] = useState([])

  function pegavalor(e) {
    setpesq(e.target.value)
  }



  return (

    <div className="w-full h-full flex items-center flex-col max-md:bg-primary-300">
      <div className="w-[95%] h-16 flex justify-between max-md:flex-col items-start m-6 ">
      <h1 className="text-2xl ml-2 max-md:text-4xl mt-2 max-md:font-bold  text-primary-700 font-medium mb-6">Histórico</h1>
        <div className=" w-full flex-row flex max-md:justify-start justify-end items-end max-md:p-2">

        <input type="text" className="w-1/3 max-md:w-full h-12 max-md:h-10 rounded-xl max-md:bg-white bg-secondary-100 placeholder: text-primary-700 placeholder:p-2  border-none outline-1 outline-slate-300 p-2 placeholder-primary-700" placeholder="Pesquisar..." value={value} onChange={pegavalor} />
        <button className=" h-12 max-md:h-10 aspect-square rounded-xl max-md:bg-white bg-secondary-100 items-center justify-center flex ml-2 text-primary-700 duration-300 transition hover:bg-slate-300">

          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
            <path d="M32 4V12M16 4V12M6 20H42M10 8H38C40.2091 8 42 9.79086 42 12V40C42 42.2091 40.2091 44 38 44H10C7.79086 44 6 42.2091 6 40V12C6 9.79086 7.79086 8 10 8Z"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        </div>
      </div>
      <div className="grid justify-center  place-items-center max-md:translate-y-10  items-start w-full h-full  max-md:p-0
      px-2 overflow-x-clip overflow-y-scroll grid-cols-4 max-lg:grid-cols-1 max-xl:grid-cols-2 max-md:grid-cols-1 grid-flow-row max-md:flex max-md:justify-start max-md:items-center max-md:flex-col gap-2">
        
      </div>
    </div>
  )
//<ConsultasPsicologos nome="Psi.Nadyson" date="12/03" horario="1:20" duracao="01:15"></ConsultasPsicologos>
}
