import { Verification } from "../recognition/verification";


export function Footer({ formRef, setErros}) {
    const handleClick = (e) => {
        Verification(e, formRef, setErros);
    };

    return (
        <footer>
            <button
                type ="button"
                onClick ={handleClick}
                className ="bg-[#3B82F6] text-white border border-[#3B82F6] w-[350px] h-[35px] rounded-[10px] font-satoshi font-extrabold text-[17px] mt-16 hover:bg-[#1c3b79] transition-all duration-200 hover:rounded-[15px] mr-1"
            >
                Registrar
            </button>
        </footer>
    );
}