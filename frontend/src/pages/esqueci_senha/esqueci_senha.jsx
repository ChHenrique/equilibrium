import linha1 from "../../assets/images/decoraçãoLoginRegistro1.svg";
import linha2 from "../../assets/images/decoraçãoLoginRegistro2.svg";
import linha3 from "../../assets/images/decoraçãoLoginRegistro3.svg";
import "../../log,reg.css";
import { Bolas } from "./bolas";
import React, { useState } from 'react';
import logo from "../../assets/images/logo-title.svg";

export function EsqueciSenha({ ValorInputUsuário }) {
  const [valorInput, setValorInput] = useState(ValorInputUsuário);
  const [ValorLabel, SetValorLabel] = useState("Digite seu Email:");

  const OnchangeValorInput = (e) => {
    const email = e.target.value;
    setValorInput(email);

    const VerificacaoEmail = () => {
      return email && !(email.includes('@') && email.endsWith('.com'));
    };

    if (VerificacaoEmail()) {
      SetValorLabel("Email inválido:");
    } else {
      SetValorLabel("Digite seu Email:");
    }
  };

  return (
    <div className="bg-primary-300 flex flex-col justify-center items-center w-full h-screen overflow-hidden p-4">
      <img src={linha1} alt="" className='absolute right-0 top-0 max-w-full h-auto' />
      <img src={linha2} alt="" className='absolute right-0 -top-20 max-w-full h-auto' />
      <img src={linha3} alt="" className='absolute right-0 -top-20 max-w-full h-auto' />

      <div className="bg-slate-50 w-full md:w-[90%] lg:w-[30%] aspect-square flex flex-col p-8 shadow-2xl rounded-2xl space-y-10 relative max-w-[600px] mx-auto">

        <Bolas className="max-md:hidden"/>

        <h1 className="font-poppins text-[24px] md:text-[26px] lg:text-[28px] font-medium text-primary-700 mt-4 tracking-wider">
          Precisamos verificar sua <br/> identidade
        </h1>

        <form className="flex flex-col translate-y-7 max-xl:translate-y-14" onSubmit={(e) => {
          e.preventDefault();
        }}>
          <label className={`font-poppins text-[14px] md:text-[15px] text-primary-700 mb-2 ${ValorLabel === "Email inválido:" ? 'text-red-700' : 'text-primary-700'}`}>
            {ValorLabel}
          </label>

          <input
            className="border-b border-primary-700 bg-slate-50 outline-none text-primary-800 font-satoshi-regular mb-4"
            type="email"
            name="email"
            value={valorInput}
            onChange={OnchangeValorInput}
          />

          <a href="/login/paciente" className="mt-1 text-primary-100 font-satoshi-Regular hover:text-primary-200">
            Voltar para a tela de login
          </a>

          {/* Adicione uma margem superior ao botão */}
          <div className="flex justify-center items-center w-full mt-[18%] mr-1">
            <button
              type="submit"
              className="bg-primary-500 text-white rounded-lg font-poppins font-bold text-[16px] md:text-[18px] hover:bg-[#1c3b79] duration-500 p-2 w-full max-w-[260px]">
              Enviar Código
            </button>
          </div>
        </form>

        <a href="/">
          <img
            src={logo}
            alt="Logo"
            className="absolute bottom-3 right-4 h-[5em] md:h-[6.5em] max-h-[8em] min-h-[5.5em] max-md:hidden lg:hidden"
          />
        </a>
      </div>
    </div>
  );
}
