import { useNavigate } from 'react-router-dom';



export function InfoLogOut() {

    const NavegarRotas = useNavigate()

    function handleLogout() {
        // Remove o token do localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('usuarioNome');
        localStorage.removeItem('id');
        // Redireciona a página
        NavegarRotas('/')
    }

    const NavegarInfoPc = () => {
        return NavegarRotas('/info/paciente')
    }
    

    return (
        <div className="flex flex-col h-fit rounded-2xl w-fit">
            <button
                onClick={NavegarInfoPc}
                className='w-[90%] h-fit m-1 text-primary-200 bg-white hover:bg-slate-500 transition-all duration-500 hover:text-white flex justify-start items-end rounded-[8px] font-poppins'>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M33 17.9996C33 26.2839 26.2843 32.9996 18 32.9996C9.71573 32.9996 3 26.2839 3 17.9996C3 9.71536 9.71573 2.99963 18 2.99963C26.2843 2.99963 33 9.71536 33 17.9996ZM15.2318 14.2496C15.2318 12.7322 16.4642 11.4996 17.9871 11.4996C19.5103 11.4996 20.7425 12.7322 20.7425 14.2496C20.7425 15.7671 19.5103 16.9996 17.9871 16.9996C16.4642 16.9996 15.2318 15.7671 15.2318 14.2496ZM17.9871 9.49965C15.3623 9.49965 13.2318 11.625 13.2318 14.2496C13.2318 16.8743 15.3623 18.9996 17.9871 18.9996C20.6121 18.9996 22.7425 16.8743 22.7425 14.2496C22.7425 11.6249 20.6121 9.49965 17.9871 9.49965ZM11.9732 26.1902C15.0957 22.9197 20.8935 22.7909 24.0146 26.1774C24.3888 26.5835 25.0215 26.6093 25.4276 26.235C25.8337 25.8607 25.8595 25.2281 25.4852 24.8219C21.5359 20.5368 14.3992 20.753 10.5266 24.8091C10.1452 25.2085 10.1599 25.8415 10.5593 26.2229C10.9588 26.6043 11.5918 26.5897 11.9732 26.1902Z" fill="currentColor" />
                </svg>

                <h1 className='w-full text-md mb-1.5 ml-1 no-underline text-start text-primary-200 hover:text-white'> 
                Info
                </h1>
            </button>

            <button
                onClick={handleLogout}
                className='w-[90%] h-fit text-primary-200 m-1 bg-white hover:bg-slate-500 transition-all duration-500 hover:text-white flex justify-start items-end rounded-[8px] font-poppins'>
                {/* Imagem do logout */}
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className='m-1'
                >
                    <path
                        d="M12 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H12M21.3333 22.6667L28 16M28 16L21.3333 9.33333M28 16H12"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <h1 className='w-full text-md mb-2 no-underline text-start text-primary-200 hover:text-white'>Sair</h1>
            </button>
        </div>
    )
}