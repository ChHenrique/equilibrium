import { useState,useEffect } from "react"
import Webcam from "react-webcam"

export function CamsEButtons(){

    return(
      <div flex h-full w-full>
        <div className="h-full w-full">
       <Webcam/>
       </div>
      </div>

    )
}