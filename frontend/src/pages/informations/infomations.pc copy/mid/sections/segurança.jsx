import user_null_sem_bola from "../../../../../assets/images/user_null_sem_bola.svg"

export function Segurança(){
    return(
        <div className="w-[17vw] h-[80vh] bg-white mr-auto rounded-lg flex flex-col items-center">
            <div className="bg-[#8CB3FF] w-11/12 h-12 mt-3 rounded-xl flex justify-evenly items-center font-poppins text-[#465A7F] font-medium text-sm">
                <img src= {user_null_sem_bola} alt="user_null" className="h-7"/>
                Informações Pessoais
            </div>
            <div className="mt-2 text-2xl font-poppins text-[#465A7F] font-medium font-">Segurança</div>
        </div>
    )
}