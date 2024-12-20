import { HeaderLink } from './header-link';
import { Logo } from './logo';
import User_null from '../assets/images/user_null.svg';
import { useState, useEffect } from 'react';

const LINKS = [
    { name: 'Procurar Psicólogos', href: '/psicologos' },
    { name: 'Acessar consultas', href: '/home/paciente' },
];

const LINKSUser = [
    { name: 'Informações', href: '/info/paciente',
        svg: <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className='m-1'>
            <path d="M40 42V38C40 35.8783 39.1571 33.8434 37.6569 32.3431C36.1566 30.8429 34.1217 30 32 30H16C13.8783 30 11.8434 30.8429 10.3431 32.3431C8.84285 33.8434 8 35.8783 8 38V42M32 14C32 18.4183 28.4183 22 24 22C19.5817 22 16 18.4183 16 14C16 9.58172 19.5817 6 24 6C28.4183 6 32 9.58172 32 14Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,
    },
];

export function HeaderLog() {
    const [userinfo, setinfo] = useState(false);
    const [selectedImage, setSelectedImage] = useState(User_null);

    function Visibilidade() {
        setinfo(!userinfo);
    }




          //pega a foto do paciente
          useEffect(() => {
            const idPaciente = localStorage.getItem("id");
            if (idPaciente) {
                fetch(`http://localhost:3000/user/pacientes/${idPaciente}/foto`)
                    .then(response => {
                        if (!response.ok) throw new Error("Erro ao buscar a imagem");
                        return response.json();
                    })
                    .then(data => {
                        const imageUrl = `http://localhost:3000/${data.foto.replace(/\\/g, '/')}?t=${new Date().getTime()}`;
                        setSelectedImage(imageUrl);
                    })
                    .catch(error => console.error("Erro ao buscar a foto do paciente:", error));
            }
        }, []);
        

    // Recupera o nome do localStorage
    const nome = localStorage.getItem('usuarioNome') || "Usuário"; // "Usuário" é o fallback caso não tenha nome


    // Função para lidar com logout
    function handleLogout() {
        // Remove o token do localStorage
        localStorage.removeItem('token'); // Ajuste 'token' para o nome correto do seu token
        localStorage.removeItem('usuarioNome'); 
        localStorage.removeItem('id'); 
        // Redireciona ou atualiza a página
        window.location.href = '/'; // Ajuste para a rota desejada
    }


    return (
        <div
            id="Header"
            className="w-[95%] h-16 flex flex-row items-center bg-white rounded-2xl m-4 justify-between max-md:hidden"
            draggable="false"
        >
            <Logo draggable="false" />
            <div className="flex justify-end items-center gap-8 " draggable="false">
                {LINKS.map((link) => (
                    <HeaderLink key={link.name} href={link.href}>
                        {link.name}
                    </HeaderLink>
                ))}
                <div className='h-20 w-fit justify-end items-center flex mr-4 ml-2 ' onClick={Visibilidade}>
                    <h1 className='font-poppins text-base font-medium text-slate-600 hover:text-hover hover:font-semibold transition ease min-w-fit duration-200 cursor-pointer mr-7'>
                        {nome}
                    </h1>
                    <div 
                        className="h-12 w-12 rounded-full cursor-pointer flex overflow-hidden bg-center bg-cover" 
                        style={{ backgroundImage: `url(${selectedImage})` }}
                    ></div>
                </div>

                <div className={`w-fit h-fit translate-y-24 flex-col justify-center items-end absolute z-custom shadow-lg ${userinfo ? 'flex' : 'hidden'}`}>
                    <div
                        className='bg-white w-8 h-4 mr-4'
                        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                    ></div>

                    <div className='bg-white flex flex-col justify-center items-center h-full w-full p-1 rounded-[8px]'>
                        {/* botoes do dropbox do user */}
                        {LINKSUser.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className='font-poppins w-full h-fit m-1 bg-white hover:bg-slate-500 transition-all duration-200 hover:text-white flex justify-start items-end rounded-[8px]'
                            >
                                {link.svg}
                                <h1 className='w-full text-lg m-1 no-underline text-start'>{link.name}</h1>
                            </a>
                        ))}

                        {/*botao de logout*/}
                        <button
                            className='w-full h-fit m-1 bg-white hover:bg-slate-500 transition-all duration-200 hover:text-white flex justify-start items-end rounded-[8px] font-poppins'
                            onClick={handleLogout}
                        >
                            {/* Imagem do logout */}
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className='m-1 cursor-pointer'
                            >
                                <path
                                    d="M12 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H12M21.3333 22.6667L28 16M28 16L21.3333 9.33333M28 16H12"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <h1 className='w-full text-lg m-1 no-underline text-start'>Sair</h1>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
