import { Container } from './sections/container'
import linha1 from "../../../assets/images/decoraçãoLoginRegistro1.svg";
import linha2 from "../../../assets/images/decoraçãoLoginRegistro2.svg";
import linha3 from "../../../assets/images/decoraçãoLoginRegistro3.svg";
import "../../../log,reg.css"

export function Registration_psi(){
    return(
        <body className='overflow-hidden'>
        <div className = 'bg-primary-300 flex-col flex justify-center items-center w-[100vw] h-[100vh] overflow-x-hidden'>
            <img id='l1'src={linha1} alt="" className='absolute right-0 top-0'/>
            <img id='l2'src={linha2} alt="" className='absolute right-0 -top-20'/>
            <img id='l3'src={linha3} alt="" className='absolute right-0 -top-20'/>
            <Container/>
            
        </div>
        </body>
)
}
