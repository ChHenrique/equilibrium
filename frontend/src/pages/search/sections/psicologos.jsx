import { Psicologo } from "../componente_psicologos/info_psicologo1";

import DH from "../../../assets/images/dhamyla_ivina.png"
import Belinha from "../../../assets/images/isabelle_brito.png"

export function Seach_psicologos() {
    return (
        <section className="flex flex-col items-center space-y-10 w-[75vw] h-[80vh] mt-10 px-4 md:px-8">

            <Psicologo nome="Dhamyla Ivina" foto={DH} tempConsulta="50 minutos" formação_psicologo={"KAKAKAKAK"} topico1={"skksks"} topico2={"sososo"}/>

            <Psicologo nome = "Isabelle Brito" foto = {Belinha} tempConsulta= "40 minutos"/>

            <div></div>

            <div></div>

            <div></div>
        </section>
    )
}
