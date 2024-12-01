import { Footer } from "../../components/footer";
import { Center } from "./sections/Center";
window.global = window; // Adicionando o polyfill diretamente



export function VideoPage() {
  return (
    <div className="bg-primary-300 w-full h-[140vh] flex max-md:h-screen flex-col justify-between items-center max-md:overflow-hidden">
      <div className="w-5/6 h-4/6 mb-[10%] mt-10 max-md:mt-2 max-md:w-full max-md:h-full">
        <Center />
      </div>
        <div className="h-fit w-full justify-center items-center flex max-md:hidden">
      <Footer className="max-md:hidden"/>
      </div>
    </div>
  );
}
