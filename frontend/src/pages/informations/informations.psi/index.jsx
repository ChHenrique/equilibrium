import {Principal} from "./main/principal.jsx"
import { FooterInfo } from "../../../components/footer_info.jsx"
import { HeaderLog_psi } from "../../../components/headerLog_psi.jsx"

export function Informations_psi() {
    return(
    <div className="bg-primary-300 h-screen w-screen flex flex-col items-center max-md:justify-center scrollbar-thin max-md:overflow-hidden max-md:h-full overflow-x-hidden">
        <div className="h-fit w-full justify-center items-center flex max-md:hidden">
        <HeaderLog_psi nome={"Pedro"} />
        </div>
        <Principal/>
        <div className="h-[10vh] md:hidden"></div>
        <div className="h-fit w-full justify-center items-center flex max-md:hidden">
        <FooterInfo/>
        </div>
    </div>
    )
}