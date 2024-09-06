import { HeaderLink } from './header-link'
import { Button } from './button'
import { Logo } from './logo'

const LINKS = [
  { name: 'Sou Psicólogo', href: '/login_psi'},
  { name: 'Sobre nós', href: '/sobre' },
]

export function Header() {
  return (
    <div
      id="Header"
      className="w-full h-20 flex flex-row items-center bg-white rounded-2xl m-4 justify-between"
      draggable="false"
    >
      <Logo draggable="false" />
      <div className="flex justify-end items-center gap-8" draggable="false">
        {LINKS.map((link) => (
          <HeaderLink key={link.name} href={link.href}>
            {link.name}
          </HeaderLink>
        ))}
        
        <a href="/login_pc">  <Button>Entrar</Button></a>
        
      </div>
    </div>
  )
}