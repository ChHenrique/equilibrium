import {Principal} from "./main/principal.jsx"
import { FooterInfo } from "../../../components/footer_info.jsx"
import { HeaderLog } from "../../../components/headerLog.jsx"

export function Informations_psi() {
    return(
    <div className="bg-primary-300 h-screen w-screen flex flex-col items-center overflow-x-auto scrollbar-thin">
        <HeaderLog nome={"Pedro"} />
        <Principal/>
        <FooterInfo/>
    </div>
    )
}