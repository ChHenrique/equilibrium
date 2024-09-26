import { HeaderLink } from './header-link'
import { Logo } from './logo'
import  User_null from '../assets/images/user_null.svg'

const LINKS = [
  { name: 'Sobre nós', href: '/sobre'},
  { name: 'Procurar Psicólogos', href: '/search' },
  {name: 'Acessar consultas', href: '/homepage'}
]

export function Header_seach() {
  return (
    <div
      id="Header"
      className="w-[95%] h-16 flex flex-row items-center bg-white rounded-2xl m-4 justify-between"
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

               <h1 className='font-poppins text-base font-medium text-slate-600 hover:text-hover hover:font-semibold transition ease min-w-fit duration-200 cursor-pointer mr-7'>Pedro</h1>
               <img src={User_null} alt="Foto de Perfil" className='h-8'/>

        </div>
      </div>
    </div>
  )
}