import { Header_seach } from "../../components/Header-seach";
import { Pesquisar } from "./sections/pesquisar";
import { Seach_psicologos } from "./sections/psicologos";
import { Footer } from "../../components/footer";
import  User_null from '../../assets/images/user_null.svg'

export function Search() {
    return(
        
    <div className="bg-primary-300  h-screen w-screen flex flex-col items-center overflow-x-auto scrollbar-thin">
        <Header_seach nome="Pedro" foto={User_null}/>
        <Pesquisar/>
        <Seach_psicologos/>
        <Footer/>
    </div>

    )
}