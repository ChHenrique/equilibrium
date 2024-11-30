import { Segurança } from "./sections/segurança.jsx";
import { Info } from "./sections/info.jsx";
import React, { useState, useEffect } from 'react';
import { Footer_Mobile } from "../../../../components/footer_mobile.jsx"

export function Principal() {
    const nome = localStorage.getItem('usuarioNome') || "Usuário";
    const id = localStorage.getItem('id');
    const [imagem, setImagem] = useState(null);
    const [date, setDate] = useState(null);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3000/user/pacientes/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => {
                // converte a data para o formato dd/mm/yyyy
                const dataCriacao = new Date(data.data_criacao);
                const dataFormatada = new Intl.DateTimeFormat('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                }).format(dataCriacao);

                setDate(dataFormatada);
            })
            .catch(error => {
                console.error('Erro:', error.message);
                setErrors(error.message);
            });
        }
    }, [id]);

    const handleImageChange = (e) => { 
        setImagem(e.target.files[0]); 
    };

    return (
        <div className="w-[90vw] h-[80vh] flex justify-center items-center space-x-5 mt-2 max-md:w-full max-md:h-full max-md:mr-[50%] max-md:ml-[45%] max-md:mt-8">
            <Segurança />
            <Info imagem={imagem} onChange={handleImageChange} nome={nome} id_pc={` ${id}`} diaConta={date || "12/12/12"} />
            {errors && <p className="error">{errors}</p>}
            
            <Footer_Mobile className="w-full"/>
        </div>
    );
}
