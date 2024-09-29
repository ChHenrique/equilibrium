import { Segurança } from "./sections/segurança.jsx"
import { Info } from "./sections/info.jsx"
import React, { useState } from 'react';
export function Principal() {
    const [imagem, setImagem] = useState(null);

    const handleImageChange = (e) => { setImagem(e.target.files[0]); }; 
    return (
    <div className="w-[90vw] h-[80v] flex justify-center items-center space-x-5 mt-2"> 

    <Segurança /> 
    <Info imagem={imagem} onChange={handleImageChange} nome={"Pedro Lucas"} id_pc={"#0202030202"} diaConta={"12/12/12"}/> 
    
    </div>
    )
}