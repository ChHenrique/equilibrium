import { Header_seach } from "../../components/Header-seach";
import { Pesquisar } from "./sections/pesquisar";
export function Seach() {
    return(
    <div className="bg-primary-300  h-screen w-screen flex flex-col items-center">
        <Header_seach/>
        <Pesquisar/>
    </div>

    )
}