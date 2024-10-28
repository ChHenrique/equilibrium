import { Chats } from "./ChatArea"
import { CamsEButtons } from "./CamArea"
import { useContext, useState, createContext } from "react"
import { PostCall } from "./postCall"

export const ProverContext = createContext();

export function Center() {
   

    const [call, setCall] = useState(0);

    return (
        <ProverContext.Provider value={{ call, setCall }}>
        <div className="flex w-full h-full p-l">

            {call?<PostCall/>
            :
                <div className="flex h-full w-full">
                    <div className="flex w-2/4 h-full mr-4">
                        <CamsEButtons  />
                    </div>

                    <div className="flex w-2/4 h-full">
                        <Chats />
                    </div>
                </div>
}
          
        </div>
        </ProverContext.Provider>
    )

}