import { Form1 } from "./forms/form1";
import { Form2 } from "./forms/form2"
export function Alterações() {

    return (
        // Div do componente das alterções
        <div className="w-full h-full flex items-center font-poppins font-medium relative">
            <h1 className="absolute top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap font-poppins font-bold text-[23px] text-primary-700">
            Altere e salve suas Alterações!
            </h1>

            <Form1/>
            
            <Form2/>

            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-[#3B82F6] w-2/6 font-poppins text-white h-[5vh] rounded-lg hover:bg-primary-700 hover:w-2/5 hover:rounded-xl transition-all duration-300">Salvar Alterações</button>
        </div>
    )
}