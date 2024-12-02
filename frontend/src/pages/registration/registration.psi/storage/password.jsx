import React, { useState } from 'react';

export function Password({ passwordError, confirmPasswordError }) {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div className="flex flex-col md:flex-row gap-5 p-4 justify-between items-start max-md:mr-2 max-md:flex-row max-md:h-fit max-md:p-0 max-md:mt-10 max-xl:p-0 max-md:w-[90%]">
            <div className="flex flex-col md:w-2/5">
                <label htmlFor="senha" className={`text-gray-700 mb-1 max-md:mt-full${passwordError ? 'text-red-500' : ''} whitespace-nowrap`}>
                    {passwordError || 'Senha:'}
                </label>
                <input
                    type="password"
                    id="senha"
                    name="senha" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`border-b border-black w-full focus:outline-none ${passwordError ? 'border-red-500' : ''}`}
                    autoComplete="new-password"
                />
            </div>
            <div className="flex flex-col md:w-2/5">
                <label htmlFor="confirme_sua_senha" className={`text-gray-700 max-md:whitespace-nowrap max-md:mt-1 ${confirmPasswordError ? 'text-red-500' : ''}`}>
                    {confirmPasswordError || 'Confirme sua senha:'}
                </label>
                <input
                    type="password"
                    id="confirme_sua_senha"
                    name="confirmarsenha" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`border-b border-black w-full focus:outline-none max-md:mt-0 max-md:whitespace-nowrap mt-1 ${confirmPasswordError ? 'border-red-500' : ''}`}
                    autoComplete="new-password"
                />
            </div>
        </div>
    );
}
