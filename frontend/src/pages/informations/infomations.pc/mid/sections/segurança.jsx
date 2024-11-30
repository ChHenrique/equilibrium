import user_null_sem_bola from "../../../../../assets/images/user_null_sem_bola.svg"

export function Segurança(){
    return(
        <div className="w-[17vw] h-[80vh] bg-white mr-auto rounded-lg flex flex-col items-center max-md:hidden max-lg:h-[70%] max-lg:w-[25%] max-xl:h-[100%]">
            <div className="bg-[#8CB3FF] w-11/12 h-12 mt-3 rounded-xl flex justify-evenly items-center font-poppins text-[#465A7F] font-medium text-sm max-lg:w-[95%]">
                <img src= {user_null_sem_bola} alt="user_null" className="h-7 max-lg:mr-2 max-xl:mr-2 max-2xl:mr-2"/>
                Informações Pessoais
            </div>

        </div>
    )
}