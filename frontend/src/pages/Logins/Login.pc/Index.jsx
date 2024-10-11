import { Container } from './sections/container'
import linha1 from "../../../assets/images/decoraçãoLoginRegistro1.svg";
import linha2 from "../../../assets/images/decoraçãoLoginRegistro2.svg";
import linha3 from "../../../assets/images/decoraçãoLoginRegistro3.svg";
import "../../../log,reg.css"

export function Login_pc(){
    return(
        <div className = 'bg-primary-300 flex-col flex justify-center items-center w-full h-[100vh]  overflow-hidden'>

            <img id='l1' src={linha1} alt="" className='absolute right-0 top-0'/>
            <img id='l2' src={linha2} alt="" className='absolute right-0 -top-20'/>
            <img id='l3' src={linha3} alt="" className='absolute right-0 -top-20'/>

            <img id='l4' src={linha1} alt="" className='absolute left-0 bottom-0 transition-translate rotate-180'/>
            <img id='l5'src={linha2} alt="" className='absolute left-0 -bottom-20 transition-translate rotate-180 '/>
            <img id='l6'src={linha3} alt="" className='absolute left-0 -bottom-20 transition-translate rotate-180'/>
            <Container/>
            
        </div>
)
}
