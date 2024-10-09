import { Container } from './sections/container'
import linha1 from "../../../assets/images/decoraçãoLoginRegistro1.svg";
import linha2 from "../../../assets/images/decoraçãoLoginRegistro2.svg";
import linha3 from "../../../assets/images/decoraçãoLoginRegistro3.svg";
export function Login_pc(){
    return(
        <div className = 'bg-primary-300 flex-col flex justify-center items-center w-full h-[100vh]'>
            <img src={linha1} alt="" className='absolute right-0 top-0'/>
            <img src={linha2} alt="" className='absolute right-0 -top-20'/>
            <img src={linha3} alt="" className='absolute right-0 -top-20'/>
            <Container/>
            
        </div>
)
}
