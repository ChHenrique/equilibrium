import React, { useState } from 'react';

export function Password({ passwordError, confirmPasswordError }) {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div className="flex flex-col sm:flex-row gap-5 p-4 justify-between items-start">
            <div className="flex flex-col sm:w-2/5">
                <label htmlFor="senha" className={`text-gray-700 mb-2 ${passwordError ? 'text-red-500' : ''} whitespace-nowrap`}>
                    {passwordError || 'Senha:'}
                    
                </label>
                <input
                    type="password"
                    id="senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`border-b border-black w-full focus:outline-none ${passwordError ? 'border-red-500' : ''}`}
                    autoComplete="new-password"
                />
            </div>
            <div className="flex flex-col sm:w-2/5">
                <label htmlFor="confirme_sua_senha" className={`text-gray-700 mb-2 ${confirmPasswordError ? 'text-red-500' : ''}`}>
                    {confirmPasswordError || 'Confirme sua senha:'}
                </label>
                <input
                    type="password"
                    id="confirme_sua_senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`border-b border-black w-full focus:outline-none ${confirmPasswordError ? 'border-red-500' : ''}`}
                    autoComplete="new-password"
                />
            </div>
        </div>
    );
}
