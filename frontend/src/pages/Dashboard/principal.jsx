import React from "react";
import { HeaderDash } from '../../components/headerDash.jsx'
import { Camp_Dash } from "./sections/Center.jsx";
import { Footer } from "../../components/footer.jsx";


export function Dashboard() {
    return (
        
        <div className="w-screen h-[120vh] bg-primary-300 justify-center flex items-center flex-col font-poppins overflow-x-hidden ">
            <div className="mt-4 w-screen h-fit flex justify-center items-center ">
                <HeaderDash />
            </div>
            <Camp_Dash />

            <Footer />
        </div>
    )
}