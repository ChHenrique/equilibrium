import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { InfoLogOutPsi } from './infologM_Psi';

const links = [
    {
        id: 1,
        img: (
            <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.2663 14C26.0513 14 26.6948 13.3621 26.619 12.5808C26.399 10.3134 25.6541 8.12896 24.4406 6.22202C22.9755 3.91973 20.8931 2.12532 18.4568 1.06569C16.0204 0.00606593 13.3395 -0.271181 10.7531 0.269012C8.16672 0.809205 5.79094 2.14258 3.92624 4.10051C2.06154 6.05845 0.791668 8.55301 0.277198 11.2687C-0.237271 13.9845 0.0267732 16.7994 1.03594 19.3576C2.04511 21.9157 3.75408 24.1022 5.94673 25.6406C7.77449 26.9229 9.86983 27.7068 12.0441 27.9323C12.7651 28.007 13.3543 27.4124 13.3543 26.6876C13.3543 25.9627 12.762 25.3837 12.0499 25.2482C10.4372 24.9415 8.88731 24.1138 7.52608 23.1587C5.80091 21.9484 4.45631 20.228 3.6623 18.2153C2.8683 16.2026 2.66055 13.9878 3.06533 11.8511C3.47011 9.71434 4.46924 7.75164 5.93637 6.21115C7.40351 4.67066 9.27275 3.62157 11.3077 3.19655C13.3427 2.77153 15.452 2.98967 17.3689 3.82337C19.2858 4.65708 20.9242 6.06891 22.0769 7.88034C22.9779 9.29609 23.5505 10.9062 23.7577 12.5822C23.854 13.3613 24.4813 14 25.2663 14Z" fill="currentColor" />
                <path d="M12.6665 16.1L12.6665 6.29997" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
                <path d="M12.6665 16.1H17.9998" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
                <path d="M25.3447 14.7095L28.0002 11.2" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
                <path d="M24.9399 14.3908L22.0002 11.9" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
            </svg>
        )
    },

    {
        id: 2,
        img: (
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M25.4702 5.66667H0.529112C0.733431 3.93314 1.15063 2.72579 2.0025 1.80485C3.67199 0 6.35899 0 11.733 0H14.2663C19.6403 0 22.3274 0 23.9969 1.80485C24.8487 2.72579 25.2659 3.93314 25.4702 5.66667ZM0.333008 12.3243C0.333008 10.5055 0.333008 8.97143 0.384229 7.66667H25.6151C25.6663 8.97143 25.6663 10.5055 25.6663 12.3243V13.0091C25.6663 18.8188 25.6663 21.7236 23.9969 23.5285C22.3274 25.3333 19.6403 25.3333 14.2663 25.3333H11.733C6.35899 25.3333 3.67199 25.3333 2.0025 23.5285C0.333008 21.7236 0.333008 18.8188 0.333008 13.0091V12.3243ZM7.66644 12.3332C7.11416 12.3332 6.66644 12.7809 6.66644 13.3332C6.66644 13.8855 7.11416 14.3332 7.66644 14.3332H7.67842C8.2307 14.3332 8.67842 13.8855 8.67842 13.3332C8.67842 12.7809 8.2307 12.3332 7.67842 12.3332H7.66644ZM11.6664 12.3332C11.1142 12.3332 10.6664 12.7809 10.6664 13.3332C10.6664 13.8855 11.1142 14.3332 11.6664 14.3332H18.3331C18.8854 14.3332 19.3331 13.8855 19.3331 13.3332C19.3331 12.7809 18.8854 12.3332 18.3331 12.3332H11.6664ZM7.66644 17.6665C7.11416 17.6665 6.66644 18.1142 6.66644 18.6665C6.66644 19.2188 7.11416 19.6665 7.66644 19.6665H14.3331C14.8854 19.6665 15.3331 19.2188 15.3331 18.6665C15.3331 18.1142 14.8854 17.6665 14.3331 17.6665H7.66644ZM18.3211 17.6665C17.7688 17.6665 17.3211 18.1142 17.3211 18.6665C17.3211 19.2188 17.7688 19.6665 18.3211 19.6665H18.3331C18.8854 19.6665 19.3331 19.2188 19.3331 18.6665C19.3331 18.1142 18.8854 17.6665 18.3331 17.6665H18.3211Z" fill="currentColor" />
            </svg>
        )
    },

    {
        id: 3,
        img: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.13159 25.3331C6.3981 25.1626 5.0995 24.6419 4.2286 23.771C2.6665 22.209 2.6665 19.6947 2.6665 14.6665V13.9998C2.6665 8.97148 2.6665 6.45733 4.2286 4.89522C5.7907 3.33313 8.30485 3.33313 13.3332 3.33313H18.6665C23.6948 3.33313 26.209 3.33313 27.771 4.89522C29.3332 6.45733 29.3332 8.97148 29.3332 13.9998V14.6665C29.3332 19.6947 29.3332 22.209 27.771 23.771C26.209 25.3331 23.6948 25.3331 18.6665 25.3331C17.9192 25.3498 17.324 25.4066 16.7393 25.5398C15.1414 25.9077 13.6618 26.7253 12.1997 27.4383C10.1162 28.4542 9.07451 28.9622 8.42076 28.4866C7.17009 27.5551 8.39256 24.669 8.66651 23.3331" fill="currentColor" />
            </svg>
        )
    },

    {
        id: 4,
        img: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M33 17.9996C33 26.2839 26.2843 32.9996 18 32.9996C9.71573 32.9996 3 26.2839 3 17.9996C3 9.71536 9.71573 2.99963 18 2.99963C26.2843 2.99963 33 9.71536 33 17.9996ZM15.2318 14.2496C15.2318 12.7322 16.4642 11.4996 17.9871 11.4996C19.5103 11.4996 20.7425 12.7322 20.7425 14.2496C20.7425 15.7671 19.5103 16.9996 17.9871 16.9996C16.4642 16.9996 15.2318 15.7671 15.2318 14.2496ZM17.9871 9.49965C15.3623 9.49965 13.2318 11.625 13.2318 14.2496C13.2318 16.8743 15.3623 18.9996 17.9871 18.9996C20.6121 18.9996 22.7425 16.8743 22.7425 14.2496C22.7425 11.6249 20.6121 9.49965 17.9871 9.49965ZM11.9732 26.1902C15.0957 22.9197 20.8935 22.7909 24.0146 26.1774C24.3888 26.5835 25.0215 26.6093 25.4276 26.235C25.8337 25.8607 25.8595 25.2281 25.4852 24.8219C21.5359 20.5368 14.3992 20.753 10.5266 24.8091C10.1452 25.2085 10.1599 25.8415 10.5593 26.2229C10.9588 26.6043 11.5918 26.5897 11.9732 26.1902Z" fill="currentColor" />
            </svg>
        )
    }, {
        id: 5,
        nome: "Informações Psicólogo",
        img: (
            <svg width="24" height="30" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                <path d="M22 36.6667L31.7778 26.8889L28.3556 23.4667L24.4444 27.3778V17.1111H19.5556V27.3778L15.6444 23.4667L12.2222 26.8889L22 36.6667ZM4.88889 12.2222V39.1111H39.1111V12.2222H4.88889ZM4.88889 44C3.54444 44 2.38333 43.5315 1.40556 42.5944C0.468519 41.6167 0 40.4556 0 39.1111V8.61667C0 8.0463 0.081482 7.4963 0.244445 6.96667C0.448149 6.43704 0.733334 5.94815 1.1 5.5L4.15556 1.77222C4.6037 1.20185 5.1537 0.774074 5.80555 0.488888C6.49815 0.162963 7.21111 0 7.94444 0H36.0556C36.7889 0 37.4815 0.162963 38.1333 0.488888C38.8259 0.774074 39.3963 1.20185 39.8444 1.77222L42.9 5.5C43.2667 5.94815 43.5315 6.43704 43.6944 6.96667C43.8981 7.4963 44 8.0463 44 8.61667V39.1111C44 40.4556 43.5111 41.6167 42.5333 42.5944C41.5963 43.5315 40.4556 44 39.1111 44H4.88889ZM5.86667 7.33333H38.1333L36.0556 4.88889H7.94444L5.86667 7.33333Z" stroke="currentColor" fill="currentColor" strokeWidth="0.5" />
            </svg>
        )
    }
]
export function Footer_MobilePsi() {
    const navigate = useNavigate()
    const [id, setId] = useState(NaN)
    const location = useLocation();
    const [VisibleInfoLogOut, SetVisibleInfoLogOut] = useState(false)

    useEffect(() => {
        if (location.pathname === '/info/psicologo') {
            if (location.state?.idAtivado === 2)  {
                setId(5)
            }
        } 
        else if (location.pathname === '/home/psicologo') {
            if (location.state?.activeId === 3) {
                setId(1)
            } else if (location.state?.activeId === 1) {
                setId(2)
            } else if (location.state?.activeId === 2) {
                setId(3)
            }
        }
    }, [location.pathname, location.state]);



    const EnviarLocal = (linkId) => {
        setId(linkId)
        if (linkId === 4) {
            SetVisibleInfoLogOut(estado => !estado)
        } else {
            SetVisibleInfoLogOut(false)
        }
        console.log(linkId)
        switch (linkId) {
            case 1:
                return navigate('/home/psicologo', { state: { activeId: 3 } })
            case 2:
                return navigate('/home/psicologo', { state: { activeId: 1 } })
            case 3:
                return navigate('/home/psicologo', { state: { activeId: 2 } })
            case 5:
                return navigate('/info/psicologo', { state: { idAtivado: 2 } })
        }
    }

    return (
        <div className="flex flex-col justify-center items-center bg-slate-50 w-screen md:hidden fixed bottom-0 p-2 z-50">
            <div className="flex w-full justify-center items-center space-x-9 mr-11">

                <div className='w-fit absolute bottom-20 translate-x-[96px]'>
                    {VisibleInfoLogOut && (
                        <div className=' bg-white rounded-2xl w-fit relative'>
                            <InfoLogOutPsi />
                            <div
                                className='bg-white w-7 h-3 rotate-180 absolute translate-x-[100%]'
                                style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                            ></div>
                        </div>
                    )}

                </div>
                {links.map((link => (
                    <button
                        id='link'
                        key={link.id}
                        className={`flex justify-center items-center  ease-in-out duration-500 ${id === link.id ? " text-primary-700 max-md:bg-white max-md:text-primary-700 rounded-2xl"
                            : "bg-white text-primary-200 hover:text-primary-700  max-md:text-primary-200 rounded-2xl"
                            }`}
                        onClick={() => EnviarLocal(link.id)}>
                        <div className='h-fit flex items-center p-[5px]'>
                            {link.img}
                        </div>
                    </button>
                )))}
            </div>
        </div>
    )
}