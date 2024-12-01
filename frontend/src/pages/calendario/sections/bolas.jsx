export function Bolas(){

    const bola1 = 
        <div className="absolute top-0 right-0 w-[70px] h-[70px] bg-[#465A7F] rounded-bola1 "></div>
    

    const bola2 = 
        <div className="absolute bottom-0 left-0 w-[70px] h-[70px] bg-[#465A7F] rounded-bola2 "></div>
    
    const meiabola1 = 
    <div className="w-[25px] h-[50px] bg-[#8cb3ff] absolute right-[0px] top-[60px] rounded-meia_bola1 ">
    </div>

    const meiabola2 = 
    <div className="w-[25px] h-[50px] bg-[#8cb3ff] absolute left-[0px] bottom-[60px] rounded-meia_bola2 ">

    </div>

    return(
        <div className="">
            {bola1}
            {bola2}
            {meiabola1}
            {meiabola2}
        </div>
    )
}