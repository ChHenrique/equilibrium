// Search.js
import { Seach_psicologos } from "./sections/psicologos";
import { Footer_Search } from "../../components/footer_search";
import { HeaderLog } from "../../components/headerLog";
import { SearchProvider } from "./sections/seach_provider"; // Corrigido o caminho se necessário

export function Search() {
    return (
        <div className="bg-primary-300 h-full w-screen flex flex-col items-center scrollbar-thin">
            <HeaderLog />

            <SearchProvider>
                <Seach_psicologos />
            </SearchProvider>
            
            <Footer_Search />
        </div>
    );
}
