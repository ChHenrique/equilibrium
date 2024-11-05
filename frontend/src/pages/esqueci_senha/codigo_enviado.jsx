import linha1 from "../../assets/images/decoraçãoLoginRegistro1.svg";
import linha2 from "../../assets/images/decoraçãoLoginRegistro2.svg";
import linha3 from "../../assets/images/decoraçãoLoginRegistro3.svg";
import "../../log,reg.css";
import { Bolas } from "./bolas";
import React, { useState } from 'react';
import logo from "../../assets/images/logo-title.svg";

export function CodigoEnviado() {
  return (
  <div className="bg-primary-300 flex flex-col justify-center items-center w-full h-screen overflow-hidden p-4">
      <img src={linha1} alt="" className='absolute right-0 top-0 max-w-full h-auto' />
      <img src={linha2} alt="" className='absolute right-0 -top-20 max-w-full h-auto' />
      <img src={linha3} alt="" className='absolute right-0 -top-20 max-w-full h-auto' />

      <div className="bg-slate-50 w-full md:w-[90%] lg:w-[30%] aspect-square flex flex-col p-8 shadow-2xl rounded-2xl space-y-16 relative max-w-[600px] mx-auto">

        <Bolas className="max-md:hidden"/>

        <div>
        <h1 className="font-poppins text-[26px] md:text-[26px] max-sm:text-[22px] font-medium text-primary-700 tracking-wider">
          O código foi enviado com sucesso
        </h1>

        <h3 className="font-satoshi text-[15px] md:text-[15px] max-sm:text-[12px] text-primary-700">
          O código não foi recebido? <button className="h-fit w-fit text-primary-200">Reenviar código</button>
        </h3>
        </div>

        <label htmlFor="">Digite seu código </label>


        <a href="/">
          <img
            src={logo}
            alt="Logo"
            className="absolute bottom-3 right-4 h-[5em] md:h-[6.5em] max-h-[8em] min-h-[5.5em] max-md:hidden  max-2xl:hidden"
          />
        </a>
    </div>
  </div>
)
}

/* 
  const ValueCodigoInput = (e) => {
      const valueCodigo = e.target.value
      setCodigo(valueCodigo)

      if ( valueCodigo === (o codigo que o backend vai enviar) ){
          window.location.href = "(Pagina de trocar senha, estou fazendo)"
      }
      else {
          ValorLabelCodigo("Código Inválido")
      }
    }

    obs. No input o backend deve colocar onChange = {ValueCodigoInput}
*/