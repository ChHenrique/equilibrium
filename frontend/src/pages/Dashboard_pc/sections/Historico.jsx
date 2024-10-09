import { useState } from "react"
import { ConsultasPsicologos } from "./Components/consult_user"

export function Historico() {
  const [pesq, setpesq] = useState([])
  const [value, setvalue] = useState([])

  function pegavalor(e) {
    setpesq(e.target.value)
  }



  return (

    <div className="w-full h-full flex items-center flex-col">
      <div className="w-[95%] h-16 flex justify-end  m-4">


        <input type="text" className="w-1/3 h-12 rounded-xl  bg-secondary-100 placeholder: text-primary-700 placeholder:p-2  border-none outline-1 outline-slate-300 p-2" placeholder="Pesquisar..." value={value} onChange={pegavalor} />
        <button className=" h-12 w-12 rounded-xl bg-secondary-100 items-center justify-center flex ml-2 text-primary-700 duration-300 transition hover:bg-slate-300">

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
      <div className="flex justify-start items-start w-full h-full p-8">
        <ConsultasPsicologos nome="Psi.Nadyson" date="12/03" horario="1:20"></ConsultasPsicologos>
      </div>
    </div>
  )

}
