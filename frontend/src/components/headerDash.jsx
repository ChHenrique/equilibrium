import { HeaderLink } from './header-link'
import { Button } from './button'
import { Logo } from './logo'
import  User_null from '../assets/images/user_null.svg'

const LINKS = [
  { name: 'Início', href: '/homepage'},
  { name: 'Sobre nós', href: '/sobre' },
  {name: 'Procurar Psicólogos', href: '/search'}
]

export function HeaderDash() {
  return (
    <div
      id="Header"
      className="w-[90%] h-20 flex flex-row items-center bg-white rounded-2xl m-4 justify-between"
      draggable="false"
    >
      <Logo draggable="false" />
      <div className="flex justify-end items-center gap-8 " draggable="false">
        {LINKS.map((link) => (
          <HeaderLink key={link.name} href={link.href}>
            {link.name}
          </HeaderLink>
        ))}
        <div className='h-20 w-2/12 justify-end items-center flex m-4'>
  
               <h1 className='font-poppins text-2xl'>{}</h1>

               <img src={User_null} alt="Foto de Perfil" className='h-14'/>
        </div>
      </div>
    </div>
  )
}
