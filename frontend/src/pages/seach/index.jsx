import { Header_seach } from "../../components/Header-seach";
import { Pesquisar } from "./sections/pesquisar";
import { Seach_psicologos } from "./sections/psicologos";
import { Footer } from "../../components/footer";

export function Seach() {
    return(
        
    <div className="bg-primary-300  h-screen w-screen flex flex-col items-center overflow-x-auto scrollbar-thin">
        <Header_seach/>
        <Pesquisar/>
        <Seach_psicologos/>
        <Footer/>
    </div>

    )
}