import {HeaderLog} from "../../../components/headerLog"
import { Main } from "./main"

export function Calendario(){
    return(
    <div className="bg-primary-300  h-screen w-screen flex flex-col items-center  scrollbar-thin overflow-x-hidden space-y-10">
        <HeaderLog/>
        <Main/>

    </div>
    
)
}