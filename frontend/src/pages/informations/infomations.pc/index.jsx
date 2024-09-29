import { Header_seach } from "../../../components/Header-seach.jsx"
import  User_null from '../../../assets/images/user_null.svg'
import {Principal} from "./mid/principal.jsx"
import { FooterInfo } from "../../../components/footer_info.jsx"
export function Informations_pc() {
    return(
    <div className="bg-primary-300 h-screen w-screen flex flex-col items-center overflow-x-auto scrollbar-thin">
        <Header_seach nome="Pedro" foto={User_null}/>
        <Principal/>
        <FooterInfo/>
    </div>
    )
}