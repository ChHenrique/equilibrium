export function Bolas(){

    const bola1 = 
        <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-[#465A7F] rounded-bola1 shadow-2xl"></div>
    

    const bola2 = 
        <div className="absolute bottom-0 left-0 w-[100px] h-[100px] bg-[#465A7F] rounded-bola2 shadow-2xl"></div>
    
    const meiabola1 = 
    <div className="w-[45px] h-[90px] bg-[#8cb3ff] absolute right-[0px] top-[60px] rounded-meia_bola1 shadow-2xl">
    </div>

    const meiabola2 = 
    <div className="w-[45px] h-[90px] bg-[#8cb3ff] absolute left-[0px] bottom-[60px] rounded-meia_bola2 shadow-2xl">

    </div>

    return(
        <div>
            {bola1}
            {bola2}
            {meiabola1}
            {meiabola2}
        </div>
    )
}