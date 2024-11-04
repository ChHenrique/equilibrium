import { Footer } from "../../components/footer";
import { Center } from "./sections/Center";
window.global = window; // Adicionando o polyfill diretamente



export function VideoPage() {
  return (
    <div className="bg-primary-300 w-full h-[140vh] flex flex-col justify-between items-center">
      <div className="w-5/6 h-4/6 mb-[10%] mt-10 max-md:mt-2">
        <Center />
      </div>
      <Footer />
    </div>
  );
}
