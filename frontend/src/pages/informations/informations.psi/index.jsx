import {Principal} from "./main/principal.jsx"
import { FooterInfo } from "../../../components/footer_info.jsx"
import { HeaderLog_psi } from "../../../components/headerLog_psi.jsx"

export function Informations_psi() {
    return(
    <div className="bg-primary-300 h-screen w-screen flex flex-col items-center overflow-x-auto scrollbar-thin">
        <HeaderLog_psi nome={"Pedro"} />
        <Principal/>
        <FooterInfo/>
    </div>
    )
}