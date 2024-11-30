import React, { useState } from "react";
import nullimg from '../../../../assets/images/user_null.svg'




export function ChatsUsers({nome,foto,lastmsg}){
const [active,setActive] = useState(0)

let nomefor = nome.charAt(0).toUpperCase() + nome.slice(1);

return(
        <div className="w-full min-w-fit max-md:w-2/3 h-24 max-md:h-32 flex items-center bg-primary-300 p-3 font-satoshi max-md:bg-[#F1F5F9] max-md:mb-4 max-md:rounded-2xl">

            <img src={foto ? foto :nullimg} alt="" className="h-full rounded-full mr-4" />
            <div className="flex flex-col text-2xl justify-between h-full w-full">
                <h4 className="text-primary-700 text-sm">psicologo:</h4>
                <h1 className="text-primary-700 text-2xl font-bold">Psi. {nomefor}</h1>
                <h2 className="text-xl font-light text-primary-700">{lastmsg}</h2>
            </div>

            <svg className="aspect-square h-10 md:hidden" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 6C9 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="#718FCD" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </div>
    )
}