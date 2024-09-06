import logo from '../../../assets/images/logo-title.svg';

export function Us() {
  return (
    <section className='w-full h-[32rem] bg-white rounded-xl flex justify-between items-center px-28 gap-8'>
      <span className='font-satoshi-Regular font-medium text-lg w-[34rem] text-primary-700'>
      Somos a <strong>Equilibrium</strong>, uma startup criada por 8 alunos da <strong>EEEP Francisca Neilyta</strong>, dedicada a oferecer suporte psicológico online. Nosso objetivo é facilitar o acesso a terapia de qualidade, conectando usuários com psicólogos qualificados de forma prática e segura.
      Na <strong>Equilibrium</strong>, acreditamos que a saúde mental deve ser uma prioridade acessível para todos. Com nossa plataforma digital, buscamos proporcionar um atendimento empático e eficiente, promovendo o bem-estar e o crescimento pessoal de nossos usuários.
      Estamos aqui para ajudar você a encontrar o equilíbrio que merece.
      </span>
      <img src={logo} alt="" className='h-64 mr-8' />
    </section>
  );
}