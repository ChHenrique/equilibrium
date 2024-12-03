import { Link } from 'react-router-dom';
import React, { useState } from 'react'

export function Password({ passwordError }) {

    const [VisibleSenha, SetVisibleSenha] = useState(false)

    const ControladorVisibilidadeSenha = () => {
        SetVisibleSenha(!VisibleSenha)
    }

    return (
        <div className="flex flex-col ml-1.9 p-4 mb-2">
            <label htmlFor="senha" className={`text-gray-600 mb-2 ${passwordError ? 'text-red-500' : ''}`}>
                {passwordError ? passwordError : 'Senha:'}
            </label>
            <div className="grid grid-place-items">
            <div className='relative'>
                <input
                    type={VisibleSenha ? 'text' : 'password'}
                    id="senha"
                    name="senha"
                    className={`border-b border-black w-full focus:outline-none ${passwordError ? 'border-red-500' : ''}`}
                />
                <button
                        type='button'
                        onClick={ControladorVisibilidadeSenha}
                        className='absolute right-2 duration-500 bottom-1'>
                        {VisibleSenha ? (
                            <svg className="w-6 h-6 text-slate-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        ) : (
                            <svg fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-slate-900" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor">
                                <path clip-rule="evenodd" d="m20.5303 4.53033c.2929-.29289.2929-.76777 0-1.06066s-.7677-.29289-1.0606 0l-16.00003 16.00003c-.29289.2929-.29289.7677 0 1.0606s.76777.2929 1.06066 0l2.8469-2.8469c1.3663.6432 2.93997 1.0666 4.62277 1.0666 2.684 0 5.0903-1.0771 6.8206-2.405.8668-.6653 1.5826-1.4074 2.0883-2.1361.4917-.7086.8411-1.4862.8411-2.2089s-.3494-1.5003-.8411-2.20885c-.5057-.72871-1.2215-1.47087-2.0883-2.13612-.2621-.20118-.5398-.39661-.8316-.5834zm-3.6308 3.6308-1.7708 1.77083c.3926.59284.6213 1.30374.6213 2.06804 0 2.0711-1.6789 3.75-3.75 3.75-.7643 0-1.4752-.2287-2.06804-.6213l-1.41672 1.4167c1.06553.4341 2.24686.7046 3.48476.7046 2.2865 0 4.3802-.9229 5.9073-2.095.7619-.5847 1.3641-1.2176 1.7693-1.8014.4191-.6039.5734-1.0763.5734-1.3536s-.1543-.7497-.5734-1.3536c-.4052-.5838-1.0074-1.21668-1.7693-1.80143-.3132-.24036-.6502-.47025-1.0078-.68384zm-5.8696 5.86957c.2938.1406.6227.2193.9701.2193 1.2426 0 2.25-1.0074 2.25-2.25 0-.3474-.0787-.6763-.2193-.9701z" fill-rule="evenodd" stroke-width="1" />
                                <path d="m12 5.25c1.0323 0 2.0236.15934 2.9511.43101.1785.05227.2316.27561.1002.40709l-.8246.82455c-.0619.06186-.1515.08663-.2367.06702-.6394-.1471-1.3061-.22967-1.99-.22967-2.28655 0-4.38022.92292-5.90733 2.09497-.76189.58475-1.3641 1.21763-1.76924 1.80143-.41912.6039-.57343 1.0763-.57343 1.3536s.15431.7497.57343 1.3536c.35382.5099.85795 1.0571 1.48748 1.5771.11586.0957.1269.2708.02065.3771l-.70891.7089c-.09031.0903-.23442.0982-.33228.0162-.69298-.5812-1.27135-1.2074-1.69927-1.824-.49173-.7086-.8411-1.4862-.8411-2.2089s.34937-1.5003.8411-2.20885c.50571-.72871 1.22152-1.47087 2.08831-2.13612 1.73024-1.32795 4.13657-2.40503 6.82059-2.40503z" stroke-width="1" />
                                <path d="m12 8.25c.1185 0 .2357.00549.3513.01624.1969.01829.2681.25367.1283.39346l-1.2122 1.21226c-.6533.22484-1.1706.74214-1.39544 1.39544l-1.21226 1.2122c-.13979.1398-.37517.0686-.39346-.1283-.01075-.1156-.01624-.2328-.01624-.3513 0-2.07107 1.67893-3.75 3.75-3.75z" stroke-width="1" /></g></svg>
                        )}
                    </button>
                </div>
               <div className="w-full flex items-center justify-between mt-2">
                    <Link to="/registro/psicologo" className="text-[#465A7F] font-satoshi-bold text-[15px] hover:text-[#8cb3ff] max-sm:text-[11px]">
                        Não tenho conta
                    </Link>
                    <a href="/login/esquecisenha" className="text-[#465A7F] font-satoshi-bold text-[15px] hover:text-[#8cb3ff] max-sm:text-[11px]">
                        Esqueci minha senha
                    </a>
                </div>
            </div>
        </div>
    );
}
