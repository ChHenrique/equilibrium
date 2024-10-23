import { HeaderLink } from './header-link';
import { Button } from './button';
import { Logo } from './logo';
import { jwtDecode } from 'jwt-decode';  // Corrigido para importação padrão
import { useNavigate } from 'react-router-dom';

const LINKS = [
  { name: 'Sou Psicólogo', href: '/login_psi' },
  { name: 'Sobre nós', href: '/sobre' },
];

export function Header() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    try {
      // Verificar se há um token no localStorage
      const token = localStorage.getItem('token');

      if (token) {
        // Decodificar o token para verificar o tipo de usuário
        const decodedToken = jwtDecode(token);  // Usando a importação padrão

        // Verificar se é um psicólogo ou paciente e redirecionar para a dashboard adequada
        if (decodedToken.id_psi) {
          navigate('/homepage-psi');
        } else if (decodedToken.id) {
          navigate('/homepage-pc');
        } else {
          // Caso o token não contenha nem id de paciente nem de psicólogo, redireciona para o login de paciente
          navigate('/login_pc');
        }
      } else {
        // Se não houver token, redirecionar para a página de login de paciente
        navigate('/login_pc');
      }
    } catch (error) {
      console.error('Erro ao decodificar o token ou redirecionar:', error);
      // Se houver erro, não fazer nada e deixar o botão "Entrar" aparecer normalmente
    }
  };

  return (
    <div
      id="Header"
      className="w-full min-w-[700px] min-h-20 flex flex-row items-center bg-white rounded-2xl m-4 justify-between"
      draggable="false"
    >
      <Logo draggable="false" />
      <div className="flex justify-end items-center gap-8" draggable="false">
        {LINKS.map((link) => (
          <HeaderLink key={link.name} href={link.href}>
            {link.name}
          </HeaderLink>
        ))}

        {/* Lógica para o botão de "Entrar" */}
        <Button onClick={handleLoginClick}>Entrar</Button>
      </div>
    </div>
  );
}
