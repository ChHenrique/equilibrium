import React from 'react';

export function Name({ nameError, surnameError }) {
    return (
        <div className="flex flex-col sm:flex-row gap-5 p-4 justify-between max-sm:p-0 max-sm:mr-2 max-sm:flex-row">
            <div className="flex flex-col sm:w-2/5">
                <label htmlFor="name" className={`text-gray-700 mb-2 ${nameError ? 'text-red-500' : ''}`}>
                    {nameError || 'Nome:'}
                </label>
                <input
                    id="name"
                    name="nome" // Ajuste aqui
                    type="text"
                    className={`border-b border-black w-full focus:outline-none ${nameError ? 'border-red-500' : ''}`}
                    autoComplete="given-name"
                />
            </div>
            <div className="flex flex-col sm:w-2/5">
                <label htmlFor="surname" className={`text-gray-700 mb-2 ${surnameError ? 'text-red-500' : ''}`}>
                    {surnameError || 'Sobrenome:'}
                </label>
                <input
                    id="surname"
                    name="sobrenome" // Ajuste aqui
                    type="text"
                    className={`border-b border-black w-full focus:outline-none ${surnameError ? 'border-red-500' : ''}`}
                    autoComplete="family-name"
                />
            </div>
        </div>
    );
}
