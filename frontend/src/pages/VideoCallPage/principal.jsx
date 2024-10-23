import { Footer } from "../../components/footer"
import { Center } from "./sections/Center.jsx"
import {useRef, useEffect} from 'react'

export function VideoPage(){

   

return(
 <div className="bg-primary-300 w-full h-[140vh] flex flex-col justify-between items-center">
    <div className="w-5/6 h-4/6 mt-10">

       <Center />
    </div>
      <Footer/>
 </div>
)}