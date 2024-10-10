import { Container } from './sections/container'
import linha1 from "../../../assets/images/decoraçãoLoginRegistro1.svg";
import linha2 from "../../../assets/images/decoraçãoLoginRegistro2.svg";
import linha3 from "../../../assets/images/decoraçãoLoginRegistro3.svg";
export function Registration_psi(){
    return(
        <body className='overflow-hidden'>
        <div className = 'bg-primary-300 flex-col flex justify-center items-center w-[100vw] h-[100vh]'>
            <img src={linha1} alt="" className='absolute right-0 top-0'/>
            <img src={linha2} alt="" className='absolute right-0 -top-20'/>
            <img src={linha3} alt="" className='absolute right-0 -top-20'/>
            <img src={linha1} alt="" className='absolute left-0 bottom-0 transition-translate rotate-180'/>
            <img src={linha2} alt="" className='absolute left-0 -bottom-20 transition-translate rotate-180'/>
            <img src={linha3} alt="" className='absolute left-0 -bottom-20 transition-translate rotate-180'/>
            <Container/>
            
        </div>
        </body>
)
}
