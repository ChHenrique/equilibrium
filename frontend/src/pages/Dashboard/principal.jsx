import React from "react";
import { HeaderDash } from '../../components/headerDash.jsx'
import { Camp_Dash } from "./sections/Center.jsx";
import { Footer } from "../../components/footer.jsx";


export function Dashboard(){
    return(
<div className="w-screen h-screen bg-primary-300 justify-center flex items-center flex-col font-poppins">
 <HeaderDash/>
<Camp_Dash/>
<Footer/>
</div>
    )
}