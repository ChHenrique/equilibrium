import { useState,useEffect } from "react"
import Webcam from "react-webcam"

export function CamsEButtons(){

    return(
      <div className="flex h-full w-full">
        <div className="h-full w-full rounded-[20px] flex justify-center">
               <div className="h-fit w-fit rounded-[20px]">
                 <Webcam                         
                          className="rounded-[20px] w-[80%] mb-2"
                        videoConstraints={{ width: 1920, height: 1080, facingMode: "user" }} />
                 <div id="ex" className="rounded-[20px] w-[80%] h-[384px] bg-slate-800"></div>
              </div>
       </div>
      </div>

    )
}