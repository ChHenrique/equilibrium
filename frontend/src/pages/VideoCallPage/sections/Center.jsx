import { Chats } from "./ChatArea"
import { CamsEButtons } from "./CamArea"
import { useState } from "react"
import { PostCall } from "./postCall"

export function Center() {

    return (
        <div className="flex w-full h-full p-l">

            {call?
            <PostCall/>
            
            :
                <div className="flex h-full w-full">
                    <div className="flex w-2/4 h-full mr-4">
                        <CamsEButtons call={call} />
                    </div>

                    <div className="flex w-2/4 h-full">
                        <Chats />
                    </div>
                </div>
                
            }
        </div>
    )

}