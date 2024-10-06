// footer.jsx
import React from 'react';

export function Footer({ errors }) { // Retirado formRef e setErrors
    return (
        <footer className="flex justify-center mt-4">
            <button
                type="submit" // Modificado para ser um botão de envio
                className="bg-[#3B82F6] p-0.5 text-white border border-[#3B82F6] w-96 h-auto rounded-[10px] max-w-sm font-satoshi font-extrabold text-lg hover:bg-[#1c3b79] transition-all duration-200 hover:rounded-[15px] mr-1"
            >
                Registrar
            </button>
            {/* Exibir erros gerais, se houver */}
            {errors.general && <p className="text-red-500">{errors.general}</p>}
        </footer>
    );
}
