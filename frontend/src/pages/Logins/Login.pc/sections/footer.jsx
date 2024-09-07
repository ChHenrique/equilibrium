import Email from '../../../../assets/images/email_login_user.svg';
import Gov from '../../../../assets/images/gov_login.svg';
import { Verification } from '../recognition/verification';

export function Footer({ formRef, setErrors, setLoggedIn }) { 
    const handleClick = (e) => {
        Verification(e, { formRef, setErrors, setLoggedIn });
    };

    return (
        <footer className="flex flex-col justify-center items-center mb-20">
            <button   
                type="button" 
                onClick={handleClick}
                className="bg-[#3B82F6] text-white border border-[#3B82F6] w-[350px] h-[35px] rounded-[10px] font-satoshi font-extrabold text-[17px] mt-[30px] hover:bg-[#1c3b79] transition-all duration-200 hover:rounded-[15px] mr-1">
                Entrar
            </button>

            <div className="grid place-items-center w-full max-w-[600px] mt-[20px]">
                <h2 className='text-[#535252] font-satoshi-bold text-[17px] text-center mb-[10px]'>– Ou entre com –</h2>
                <div className="flex justify-center items-center space-x-4">
                    <a href="">
                        <img src={Email} alt="Email Icon" className="w-12 h-12 border border-gray-400 rounded-[6px] mt-2" />
                    </a>

                    <a href="">
                        <img src={Gov} alt="Gov Icon" className="w-12 h-12 border border-gray-400 rounded-[6px] mt-2" /> 
                    </a>
                </div>
            </div>
        </footer>
    );
}
