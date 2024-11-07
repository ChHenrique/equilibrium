import linha1 from "../../assets/images/decoraçãoLoginRegistro1.svg";
import linha2 from "../../assets/images/decoraçãoLoginRegistro2.svg";
import linha3 from "../../assets/images/decoraçãoLoginRegistro3.svg";
import "../../log,reg.css";
import { Bolas } from "./bolas";
import React, { useState } from 'react';
import logo from "../../assets/images/logo-title.svg";
import zxcvbn from 'zxcvbn';  // Importando a biblioteca zxcvbn

export function NovaSenha() {
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [labelNovaSenha, setLabelNovaSenha] = useState('Digite sua nova senha');
  const [labelConfirmarSenha, setLabelConfirmarSenha] = useState('Confirme sua nova senha');
  const [corNovaSenha, setCorNovaSenha] = useState('text-primary-700');

  // Função de verificação de senha usando o zxcvbn
  const verificacaoSenha = (e) => {
    const senha = e.target.value;
    setNovaSenha(senha);

    if (senha == ""){
        setLabelNovaSenha("Digite sua nova senha")
        setCorNovaSenha('text-primary-700')
        return
    }

    // Usando o zxcvbn para avaliar a força da senha
    const resultado = zxcvbn(senha)

    // Ajustando a cor do feedback com base na força da senha
    switch (resultado.score) {
      case 0:
        setLabelNovaSenha("Senha muito fraca")
        setCorNovaSenha("text-red-800")
        break;
      case 1:
        setLabelNovaSenha("Senha fraca")
        setCorNovaSenha("text-red-600")
        break;
      case 2:
        setLabelNovaSenha("Senha média")
        setCorNovaSenha("text-orange-500")
        break;
      case 3:
        setLabelNovaSenha("Senha forte")
        setCorNovaSenha("text-green-500")
        break;
      case 4:
        setLabelNovaSenha("Senha muito forte")
        setCorNovaSenha("text-green-800")
        break;
      default:
        setLabelNovaSenha("Senha inválida")
        setCorNovaSenha("text-gray-500")
    }
  }

  const congruenciaSenha = (e) => {
    const senhaConfirmada = e.target.value
    setConfirmarSenha(senhaConfirmada)
    setLabelConfirmarSenha(senhaConfirmada === novaSenha ? "Senhas coincidem" : "Senhas não coincidem")

    if (senhaConfirmada == ""){
        setLabelConfirmarSenha("Confirme sua nova senha")
        return
    }
  };

  const EnviarValor = (e) => {
    e.preventDefault();

    const senhaForteOuMuitoForte = labelNovaSenha === "Senha forte" || labelNovaSenha === "Senha muito forte"

    if (senhaForteOuMuitoForte && labelConfirmarSenha === "Senhas coincidem" && novaSenha === confirmarSenha) {
      console.log(novaSenha)
      console.log(confirmarSenha)
    } else {
      e.preventDefault()
    }
  };

  return (
    <div className="bg-primary-300 flex flex-col justify-center items-center w-full h-screen overflow-hidden p-4">
      <img src={linha1} alt="" className="absolute right-0 top-0 max-w-full h-auto" />
      <img src={linha2} alt="" className="absolute right-0 -top-20 max-w-full h-auto" />
      <img src={linha3} alt="" className="absolute right-0 -top-20 max-w-full h-auto" />

      <div className="bg-slate-50 w-full md:w-[90%] lg:w-[41%] aspect-square flex flex-col p-8 shadow-2xl rounded-2xl space-y-12 relative max-w-[600px] mx-auto max-sm:space-y-4">
        <Bolas className="max-md:hidden" />

        <h1 className="font-poppins text-[25px] md:text-[25px] max-sm:text-[23px] font-medium text-primary-700 tracking-wider">
          Digite a sua nova senha <br /> abaixo
        </h1>

        <form className="flex flex-col space-y-12 " method="get">
          {/* Campo da nova senha */}
          <div className="w-full space-y-3">
            <label htmlFor="" className={`font-satoshi font-medium text-[15px] md:text-[15px] max-sm:text-[12px] ${corNovaSenha}`}>
              {labelNovaSenha}
            </label>
            <input
              className="border-b w-full border-primary-1100 bg-slate-50 outline-none font-satoshi-regular"
              type="password"
              value={novaSenha}
              onChange={verificacaoSenha}
            />
          </div>

          {/* Campo de confirmação de senha */}
          <div className="w-full h-fit space-y-3">
            <label htmlFor="" className= {`font-satoshi text-[15px] md:text-[15px] max-sm:text-[12px] ${labelConfirmarSenha === "Senhas não coincidem" ? "text-red-700" : "text-primary-700"}`}>
              {labelConfirmarSenha}
            </label>
            <input
              className="border-b w-full border-primary-1100 bg-slate-50 outline-none font-satoshi-regular"
              type="password"
              value={confirmarSenha}
              onChange={congruenciaSenha}
            />
          </div>

          <div className="flex justify-center w-full mt-[28%]">
            <button
              onClick={EnviarValor}
              type="submit"
              className="bg-primary-500 text-white rounded-lg font-poppins font-bold text-[16px] md:text-[18px] hover:bg-[#1c3b79] duration-500 p-[5px] w-full max-w-[220px] mr-1">
              Confirmar
            </button>
          </div>
        </form>

        <a href="/">
          <img
            src={logo}
            alt="Logo"
            className="absolute bottom-3 right-4 h-[5em] md:h-[6.5em] max-h-[8em] min-h-[5.5em] max-md:hidden max-2xl:hidden"
          />
        </a>
      </div>
    </div>
  );
}
