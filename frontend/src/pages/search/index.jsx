import { Pesquisar } from "./sections/pesquisar";
import { Seach_psicologos } from "./sections/psicologos";
import { Footer } from "../../components/footer";
import  User_null from '../../assets/images/user_null.svg'
import { HeaderLog } from "../../components/headerLog";

export function Search() {
    return(
        
    <div className="bg-primary-300  h-screen w-screen flex flex-col items-center overflow-x-auto scrollbar-thin">
        <HeaderLog nome="Usuario" foto={foto ? foto : User_null}/>
        <Pesquisar/>
        <Seach_psicologos/>
        <Footer/>
    </div>

    )
}