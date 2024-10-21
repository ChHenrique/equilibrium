import {HeaderLog} from "../../components/headerLog"
import { Footer } from "../../components/footer"
import { Main } from "./sections/main"

export function Calendario(){
    return(
    <div className="bg-primary-300  h-[120vh] w-screen flex flex-col items-center  scrollbar-thin overflow-x-hidden space-y-10">
        <HeaderLog/>
        <div className="w-2/3 h-full">
        <Main/>
        </div>
        <Footer/>

    </div>
    
)
}