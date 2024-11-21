import TerapiaImage from '../../../assets/images/terapia-image.svg'
import { Button } from '../../../components/button'
import { ButtonMob } from '../../../components/buttonMob'
export function Banner() {

  return (
    <div className='flex items-center justify-center m-16 max-md:flex-col'>
      <img src={TerapiaImage} alt="Terapia" draggable="false" className='h-96 aspect-square md:hidden' />
      <div
        className="font-satoshi-Regular w-full h-full justify-center items-center flex flex-col gap-8 m-8"
        draggable="false"
        >
        <h1
          className="text-5xl max-md:text-3xl text-primary-700 text-left font-normal italic max-md:text-center"
          draggable="false"
          >
          Buscar <strong className="font-bold">Ajuda</strong> é um sinal de{' '}
          <strong className="font-bold">Coragem</strong>, não de fraqueza.
        </h1>
        <h2 className="text-2xl max-md:text-xl max-md:text-center text-left text-primary-700" draggable="false">
          Todo mundo merece um espaço para ser ouvido e compreendido. A terapia
          oferece essa oportunidade em um ambiente de apoio
        </h2>
        <ButtonMob link={'/login/paciente'}>
          Agende sua consulta
        </ButtonMob>
      </div>      
      <img src={TerapiaImage} alt="Terapia" draggable="false" className='h-96 max-md:hidden' />
    </div>
  )
}