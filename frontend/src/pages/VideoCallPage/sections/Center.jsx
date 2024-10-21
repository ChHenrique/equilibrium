import { Chats } from "./ChatArea"
import { CamsEButtons } from "./CamArea"

export function Center(){

return(
    <div className="flex w-full h-full p-l"> 

    <div className="flex w-2/4 h-full mr-4">
    <CamsEButtons/>
    </div>

    <div className="flex w-2/4 h-full">
    <Chats/>
    </div>
 
    </div>
)

}