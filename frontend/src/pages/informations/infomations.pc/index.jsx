import {Principal} from "./mid/principal.jsx"
import { FooterInfo } from "../../../components/footer_info.jsx"
import { HeaderLog } from "../../../components/headerLog.jsx"
import { Footer_Mobile } from "../../../components/footer_mobile.jsx"

export function Informations_pc() {
    return(
    <div className="bg-primary-300 h-screen w-screen flex flex-col items-center overflow-x-auto scrollbar-thin">
        <HeaderLog nome={"Pedro"} />
        <Principal/>
        <Footer_Mobile/>
        <FooterInfo/>
    </div>
    )
}