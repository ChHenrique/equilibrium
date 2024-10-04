import React from "react";

import { Camp_Dash } from "./sections/Center.jsx";
import { Footer } from "../../components/footer.jsx";
import { HeaderLog } from "../../components/headerLog.jsx";

export function Dashboard() {
    return (
        
        <div className="w-screen h-[120vh] bg-primary-300 justify-between flex items-center flex-col font-poppins overflow-x-hidden ">
            <div className=" w-screen h-fit flex justify-center items-center ">
            <HeaderLog nome={"Pedro"} />
            </div>
            <div className=" w-screen h-[70vh] flex justify-center items-center ">
            <Camp_Dash />
            </div>
            <div className=" w-screen h-fit flex justify-center items-center ">
            <Footer />
            </div>
        </div>
    )
}