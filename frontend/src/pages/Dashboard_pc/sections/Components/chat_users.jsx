import React, { useState } from "react";
import nullimg from '../../../../assets/images/user_null.svg'




export function ChatsUsers({nome,foto,lastmsg}){
const [active,setActive] = useState(0)

return(
        <div className="w-full min-w-fit max-md:w-2/3 h-24 max-md:h-32 flex bg-primary-300 p-3 font-satoshi max-md:bg-slate-200 max-md:mb-4 max-md:rounded-2xl">
            <img src={foto ? foto :nullimg} alt="" className="h-full rounded-full mr-4" />
            <div className="flex flex-col text-2xl justify-between h-full w-full">
                <h1 className="text-primary-700 text-2xl font-bold">{nome}</h1>
                <h2 className="text-xl font-light text-primary-700">{lastmsg}</h2>
            </div>
        </div>
    )
}