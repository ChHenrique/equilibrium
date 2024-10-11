import { Chats } from "./ChatArea"
import { CamsEButtons } from "./CamArea"

export function Center(){

return(
    <div className="flex w-full h-full"> 

    <div className="flex w-3/4 h-full mr-4">
    <CamsEButtons/>
    </div>

    <div className="flex w-1/4 h-full">
    <Chats/>
    </div>
 
    </div>
)

}