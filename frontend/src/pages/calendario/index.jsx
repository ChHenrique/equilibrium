import {HeaderLog} from "../../components/headerLog"
import { Footer } from "../../components/footer"
import { Main } from "./sections/main"

export function Calendario(){
    return(
    <div className="bg-primary-300  h-[120vh] max-md:h-screen w-screen flex flex-col items-center  scrollbar-thin overflow-x-hidden space-y-10 max-md:space-y-0">
        <HeaderLog/>
        <div className="w-2/3 h-full max-md:w-full">
        <Main/>
        </div>
        <div className="w-full  h-fit flex justify-center items-center max-md:hidden">
        <Footer/>
        </div>
    </div>
    
)
}