import { useState,useEffect,useRef } from "react"
import Webcam from "react-webcam"



export function CamsEButtons(){
const webRef = useRef(null)

const webCam = () =>(<Webcam/>);





    return(
      <div className="flex h-full w-full flex-col ">
        <div className="h-[85%] w-full rounded-[20px] flex justify-center ">
               <div className="h-fit w-fit rounded-[20px] flex flex-col justify-between items-center">
            
                        {/*Webcam do outro */}
                 <div id="ex" className="rounded-[20px] w-full  bg-slate-800 max-w-[80%]"
                 style={{
                  aspectRatio: "16 / 9", 
              }}
                 >
                  </div>
                    {/*Webcam do usuario*/}
                 <Webcam ref={webRef}                        
                          className="rounded-[20px] w-full mt-2 max-w-[80%]"
                        videoConstraints={{ width: 1920, height: 1080, facingMode: "user" }} />



                 
              </div>
       </div>

       
               {/*Botoes */}
            <div className="w-full h-[15%]  justify-center items-center flex">
              {/*Botao de microfone */}
               <button className=" h-1/2 bg-white rounded-full flex justify-center items-center p-4 m-2" style={{aspectRatio: "4/4"}}>
               <svg className=" w-full h-full" viewBox="0 0 32 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M30 20V24C30 27.713 28.525 31.274 25.8995 33.8995C23.274 36.525 19.713 38 16 38M16 38C12.287 38 8.72601 36.525 6.1005 33.8995C3.475 31.274 2 27.713 2 24V20M16 38V46M8 46H24M16 2C14.4087 2 12.8826 2.63214 11.7574 3.75736C10.6321 4.88258 10 6.4087 10 8V24C10 25.5913 10.6321 27.1174 11.7574 28.2426C12.8826 29.3679 14.4087 30 16 30C17.5913 30 19.1174 29.3679 20.2426 28.2426C21.3679 27.1174 22 25.5913 22 24V8C22 6.4087 21.3679 4.88258 20.2426 3.75736C19.1174 2.63214 17.5913 2 16 2Z" stroke="#355081" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>

               </button>
               <button className=" h-1/2 bg-white rounded-full flex justify-center items-center p-4 m-2" style={{aspectRatio: "4/4"}}>
               <svg className=" w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M46 14L32 24L46 34V14Z" stroke="#355081" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28 10H6C3.79086 10 2 11.7909 2 14V34C2 36.2091 3.79086 38 6 38H28C30.2091 38 32 36.2091 32 34V14C32 11.7909 30.2091 10 28 10Z" stroke="#355081" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

               </button>
               <button className=""></button>
            </div>
      </div>

    )
}