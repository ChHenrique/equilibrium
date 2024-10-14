import { useState,useEffect,useRef } from "react"
import Webcam from "react-webcam"



export function CamsEButtons(){
const webRef = useRef(null)
const ImgdaWebcam = () => {
  let img = webRef.current.getScreenshot();
} 



    return(
      <div className="flex h-full w-full flex-col ">
        <div className="h-full w-full rounded-[20px] flex justify-center">
               <div className="h-fit w-fit rounded-[20px] flex flex-col justify-between items-center">
                {/*Webcam do usuario*/}
                 <Webcam ref={webRef}                        
                          className="rounded-[20px] w-[80%] mb-2"
                        videoConstraints={{ width: 1920, height: 1080, facingMode: "user" }} />

                        {/*Webcam do outro */}
                 <div id="ex" className="rounded-[20px] w-[80%] h- bg-slate-800"
                 style={{
                  aspectRatio: "16 / 9", 
              }}
                 >



                 </div>
              </div>
       </div>
               {/*Botoes */}
            <div className="w-full h-fit">
               <button className=""></button>
            </div>
      </div>

    )
}