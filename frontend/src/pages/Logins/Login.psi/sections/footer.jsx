import { Verification } from '../recognition/verification';

export function Footer({ formRef, setErrors, setLoggedIn }) {
    const handleClick = (e) => {
        Verification(e, { formRef, setErrors, setLoggedIn });
    }
    return (
        <footer>
            <button
                type="button"
                onClick={handleClick}
                className="bg-[#3B82F6] text-white border border-[#3B82F6] w-[350px] h-[35px] rounded-[10px] font-satoshi font-extrabold text-[17px] mt-[2px] hover:bg-[#1c3b79] transition-all duration-200 hover:rounded-[15px] mr-1">
                Entrar
            </button>

        </footer>
    )
}