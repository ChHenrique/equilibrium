import { HeaderLink } from './header-link';
import { Button } from './button';
import { Logo } from './logo';
import { jwtDecode } from 'jwt-decode';  
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { HeaderLinkMobile } from './header-link-mobile';
import { ButtonMob } from './buttonMob';
import './animations.css'

const LINKS = [
  { name: 'Sou Psicólogo', href: '/login/psicologo' },
  { name: 'Sobre nós', href: '/sobre' },
];

export function Header() {
  const [dropdown,setDrop] = useState(0)

  function Toggle(){
    if(dropdown == 0){
      setDrop(1)
    }else{
      setDrop(0)
    }
  }


  const navigate = useNavigate();

  const handleLoginClick = () => {
    try {
      // Pega o token do localstorage
      const token = localStorage.getItem('token');

      if (token) {
        // Decodificar o token para verificar o tipo de usuário
        const decodedToken = jwtDecode(token);  // Usando a importação padrão

        // Verificar se é um psicólogo ou paciente e redirecionar para a dashboard adequada
        if (decodedToken.id_psi) {
          navigate('/home/psicologo');
        } else if (decodedToken.id) {
          navigate('/home/paciente');
        } else {
          // Caso o token não contenha nem id de paciente nem de psicólogo, redireciona para o login de paciente
          navigate('/login/paciente');
        }
      } else {
        // Se não houver token, redirecionar para a página de login de paciente
        navigate('/login/paciente');
      }
    } catch (error) {
      console.error('Erro ao decodificar o token ou redirecionar:', error);
      // Se houver erro, não fazer nada e deixar o botão "Entrar" aparecer normalmente
    }
  };

  return (
    <div
      id="Header"
      className={`w-full min-w-fit min-h-20 flex flex-row items-center bg-white rounded-2xl m-4 justify-between duration-300 transition-all ${dropdown ? "rounded-br-none" : "rounded-2xl"}`}
      draggable="false"
    >
      <Logo draggable="false" />
      <div className="flex justify-end items-center gap-8 " draggable="false">
        {LINKS.map((link) => (
          <HeaderLink key={link.name} href={link.href}>
            {link.name}
          </HeaderLink>
        ))}

        <div className='relative h-16 p-2 aspect-square justify-evenly flex items-center flex-col md:hidden' onClick={Toggle}>
          <div className={`w-full h-[15%] bg-primary-700 rounded-full duration-300 transition-all  ${dropdown ? "rotate-45 absolute scale-75": ""}  `}></div>
          <div className={`w-full h-[15%] bg-primary-700 rounded-full  ${dropdown ? "hidden": " "}  `}></div>
          <div className={`w-full h-[15%] bg-primary-700 rounded-full duration-300 transition-all ${dropdown ? "-rotate-45 absolute scale-75": ""}  `}></div>
        </div>
        
        <div className={`absolute w-fit p-2  rounded-b-xl bg-white h-fit flex-col flex justify-center items-center z-0  ${dropdown ? 'POP translate-y-24' : "-translate-y-[150px] opacity-0"} `}>

        {LINKS.map((link) => (
          <HeaderLinkMobile key={link.name} href={link.href}>
            {link.name}
          </HeaderLinkMobile>
        ))}
        <ButtonMob onClick={handleLoginClick} children={"Entrar"} ></ButtonMob>
        </div>


        {/* Lógica para o botão de "Entrar" */}
        <Button onClick={handleLoginClick} children={"Entrar"} ></Button>
      </div>
    </div>
  );
}
