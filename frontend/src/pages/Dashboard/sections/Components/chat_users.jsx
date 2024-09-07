import React from "react";
import nullimg from '../../../../assets/images/user_null.svg'




export function ChatsUsers() {
    return (

        <div className="w-full h-32 flex bg-slate-500">
            <img src={nullimg} alt="" className="h-28 w-28 rounded-full" />
            <div className="flex flex-col text-2xl justify-between h-32 w-auto">
                <h1 >{nome}</h1>
                <h2>{lastmsg}</h2>
            </div>
        </div>
    )
}