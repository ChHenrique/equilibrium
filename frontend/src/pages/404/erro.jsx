import  LogoHori  from '../../assets/images/logo.svg'
import { Balls } from './components/bolas'

export function ErrorPage() {

    return (
        <div className="h-[100vh] w-full bg-primary-300 flex justify-center items-center font-poppins">

            <div className="w-1/2 aspect-video flex justify-center items-center flex-col bg-white rounded-[20px] relative ">
            <Balls className='scale-0 flex'/>
                <img src={LogoHori} alt="Logo Equilibrium" className='w-2/6 flex absolute top-[10%]' />
                <div className='w-full h-fit flex justify-center items-center mb-4'>
                    <h1 className='font-bold text-7xl rotate-[-18.32deg] translate-y-1'>4</h1>
                    <h1  className='font-bold text-7xl rotate-[3.71deg] m-2'>0</h1>
                    <h1  className='font-bold text-7xl rotate-[19.89deg]'>4</h1>
                </div>
                <h1 className='font-bold text-4xl text-primary-800 m-2'>Opps..</h1>
                <h1 className='font-semibold text-xl text-primary-800 mb-2'>Aconteceu algum erro de acesso</h1>
                <a href="/" className='font-regular  text-primary-200 underline'>Voltar à pagina inicial</a>
            </div>
        </div>

    )
}