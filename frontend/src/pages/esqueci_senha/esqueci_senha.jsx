import linha1 from "../../assets/images/decoraçãoLoginRegistro1.svg";
import linha2 from "../../assets/images/decoraçãoLoginRegistro2.svg";
import linha3 from "../../assets/images/decoraçãoLoginRegistro3.svg";
import "../../log,reg.css"
import { Bolas } from "./bolas";

export function EsqueciSenha() {
  return(
  <div className = 'bg-primary-300 flex-col flex justify-center items-center w-full h-[100vh] overflow-hidden'>
            <img id='l1' src={linha1} alt="" className='absolute right-0 top-0'/>
            <img id='l2' src={linha2} alt="" className='absolute right-0 -top-20'/>
            <img id='l3' src={linha3} alt="" className='absolute right-0 -top-20'/>  

            <div className = "bg-slate-50 w-[30%] aspect-square flex flex-col p-12 shadow-2xl rounded-md space-y-16 relative">
              <Bolas/>
              <h1 className="font-poppins text-[30px] text-primary-700 mt-16">Precisamos verificar sua <span>indentidade</span></h1>

              <h1>pepe</h1>
            </div>  
        </div>
  )
}