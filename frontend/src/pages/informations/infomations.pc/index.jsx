import {Principal} from "./mid/principal.jsx"
import { FooterInfo } from "../../../components/footer_info.jsx"
import { HeaderLog } from "../../../components/headerLog.jsx"

export function Informations_pc() {
    return(
    <div className="bg-primary-300 h-screen w-screen flex flex-col items-center max-md:justify-center scrollbar-thin max-md:overflow-hidden max-md:h-full">
        <HeaderLog nome={"Pedro"} />
        <Principal/>
        <FooterInfo/>
    </div>
    )
}