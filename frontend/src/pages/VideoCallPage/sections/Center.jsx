import { Chats } from "./ChatArea"
import { VideoChat } from "./CamArea"
import { useContext, useState, createContext } from "react"
import { PostCall } from "./postCall"




export function Center() {
   
    const [chat , setChat] = useState(0);
    const [call, setCall] = useState(0);

    return (
    
        <div className="flex w-full h-full p-l ">

            {call?<PostCall/>
            :
                <div className="flex h-full w-full  max-md:flex-col max-md:justify-center  max-md:mt-4 max-md:items-center">
                    <div className="flex w-2/4 h-full max-md:h-1/2  mr-4 max-md:mr-0   max-lg:w-2/3 max-md:w-full justify-center items-center">
                        <VideoChat chat={chat} setChat={setChat} />
                    </div>

                    <div className={`flex w-2/4 h-full max-lg:w-1/3 max-md:h-1/2 max-md:px-8 max-md:w-full   ${chat ? "flex" : " max-md:hidden"}`}>
                        <Chats chat={chat} setChat={setChat} />
                    </div>
                </div>
}
          
        </div>

    )

}