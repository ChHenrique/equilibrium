// Search.js
import { Seach_psicologos } from "./sections/psicologos";
import { Footer_Search } from "../../components/footer_search";
import { HeaderLog } from "../../components/headerLog";
import { SearchProvider } from "./sections/seach_provider"; // Corrigido o caminho se necessário
import { Footer_Mobile } from "../../components/footer_mobile"

export function Search() {
    return (
        <div className="bg-primary-300 h-screen w-screen flex flex-col items-center overflow-x-auto scrollbar-thin">
            <HeaderLog />

            <SearchProvider>
                <Seach_psicologos />
            </SearchProvider>
            
            <Footer_Search />
            <Footer_Mobile />
        </div>
    );
}
