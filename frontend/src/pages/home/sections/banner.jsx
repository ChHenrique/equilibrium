import TerapiaImage from '../../../assets/images/terapia-image.svg'
import { Button } from '../../../components/button'

export function Banner() {

  return (
    <div className='flex items-center justify-center m-16'>
      <div
        className="font-satoshi-Regular w-[38rem] h-full justify-center items-center flex flex-col gap-8 m-8"
        draggable="false"
        >
        <h1
          className="text-5xl text-slate-900 text-left font-normal text-hoverb italic"
          draggable="false"
          >
          Buscar <strong className="font-bold">Ajuda</strong> é um sinal de{' '}
          <strong className="font-bold">Coragem</strong>, não de fraqueza.
        </h1>
        <h2 className="text-2xl text-left text-slate-800" draggable="false">
          Todo mundo merece um espaço para ser ouvido e compreendido. A terapia
          oferece essa oportunidade em um ambiente de apoio
        </h2>
        <Button link={'/login_pc'}>
          Agende sua consulta
        </Button>
      </div>      
      <img src={TerapiaImage} alt="Terapia" draggable="false" className='h-96' />
    </div>
  )
}