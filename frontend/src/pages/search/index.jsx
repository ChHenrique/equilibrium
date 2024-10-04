
import { Pesquisar } from "./sections/pesquisar";
import { Seach_psicologos } from "./sections/psicologos";
import { Footer } from "../../components/footer";

import { HeaderLog } from "../../components/headerLog";

export function Search() {
    return(
        
    <div className="bg-primary-300  h-screen w-screen flex flex-col items-center overflow-x-auto scrollbar-thin">
        <div className=" w-screen h-fit flex justify-center items-center ">
        <HeaderLog nome={"Pedro"} />
        </div>
        <Pesquisar/>
        <Seach_psicologos/>
        <Footer/>
    </div>

    )
}