import linha1 from "../../assets/images/decoraçãoLoginRegistro1.svg";
import linha2 from "../../assets/images/decoraçãoLoginRegistro2.svg";
import linha3 from "../../assets/images/decoraçãoLoginRegistro3.svg";
import "../../log,reg.css"
import { Bolas } from "./bolas";
import React, {useState} from 'react'
import logo from "../../assets/images/logo-title.svg";

export function EsqueciSenha({ValorInputUsuário}) {

  const [valorInput, setValorInput] = useState(ValorInputUsuário)

  const OnchangeValorInput = ((e) => {
    setValorInput(e.target.value)
  })
  return(
  <div className = 'bg-primary-300 flex-col flex justify-center items-center w-full h-[100vh] overflow-hidden'>
            <img id='l1' src={linha1} alt="" className='absolute right-0 top-0'/>
            <img id='l2' src={linha2} alt="" className='absolute right-0 -top-20'/>
            <img id='l3' src={linha3} alt="" className='absolute right-0 -top-20'/>  

              {/* Div main*/}
            <div className = "bg-slate-50 w-[30%] aspect-square flex flex-col p-8 shadow-2xl rounded-2xl space-y-16 relative max-w-xl">
              <Bolas />
              <h1  draggable="true" className="font-poppins text-[28px] font-medium text-primary-700 mt-16 tracking-wider">
                Precisamos verificar sua <span>indentidade</span>
              </h1>

              {/* Form que contém a label, input e link */}
              <form className="flex flex-col" method="post">

                <label className="font-poppins text-[15px] text-primary-700 mb-2">
                  Digite seu Email:
                </label>

                {/* Input do email */}
                <input 
                className="border-b border-primary-700 bg-slate-50 outline-none text-primary-800 font-satoshi-regular" 
                type="email"
                value={valorInput}
                onChange={OnchangeValorInput}
                />

                <a href="" className="mt-1 text-primary-100 font-satoshi-Regular">
                  Não tenho acesso a esse email
                </a>

              </form>

              <div className="w-full h-fit flex justify-center items-center translate-y-10 absolute bottom-24 -left-1 ">
                <button 
                className="bg-primary-500 text-white rounded-lg font-poppins font-bold text-[18px] hover:bg-[#1c3b79] duration-500 p-1 w-[45%] h-10 tracking-wide">
                   Enviar Solicitação 
                </button>
              </div>

              {/* Img equilibrium */}
              <a href="/">
                <img
                    src={logo}
                    alt="Logo"
                    className="absolute bottom-3 right-4 h-[6.5em] w-fit"
                />
            </a>
            </div>  
        </div>
  )
}