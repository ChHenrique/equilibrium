import React, { useRef } from 'react';

export function CPF_CRP({ cpfError, crpError }) {
    const cpfRef = useRef(null);
    const crpRef = useRef(null);

    const applyMask = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        value = value.replace(/(\d{4})(\d)/, '$1/$2'); 
        value = value.replace(/(\d{4}\/\d{2})\d+?$/, '$1'); 
        e.target.value = value;
    };

    // Função para formatar o CPF enquanto o usuário digita
    const formatCPF = (event) => {
        const input = event.target;
        let value = input.value.replace(/\D/g, '');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        input.value = value;
    };

    return (
        <div className="flex flex-col sm:flex-row gap-5 p-4 justify-between">
            <div className="flex flex-col sm:w-2/5">
                <label htmlFor="cpf" className={`text-gray-700 mb-2 ${cpfError ? 'text-red-500' : ''}`}>
                    {cpfError || 'CPF:'}
                </label>
                <input
                    ref={cpfRef}
                    type="text" 
                    id="cpf"
                    maxLength="14"
                    className={`border-b border-black w-full focus:outline-none ${cpfError ? 'border-red-500' : ''}`}
                    autoComplete="off"
                    placeholder='000.000.000-00'
                    onInput={formatCPF}
                />
            </div>

            <div className="flex flex-col sm:w-2/5">
            <label htmlFor="crp" className={`text-gray-700 mb-2 ${crpError ? 'text-red-500' : ''}`}>
                {crpError || 'CRP:'}
            </label>
            <input
                ref={crpRef}
                type="text"
                id="crp"
                maxLength="7"
                className={`border-b border-black w-full focus:outline-none ${crpError ? 'border-red-500' : ''}`}
                placeholder='0000/00'
                onInput={applyMask}
            />
        </div>
        </div>
    );
}
