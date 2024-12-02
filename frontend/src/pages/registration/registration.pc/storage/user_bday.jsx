import React, { useEffect, useRef } from 'react';

export function User_Bday({ usernameError, birthdayError }) {
    const birthdayRef = useRef(null);

    useEffect(() => {
        const today = new Date();
        const maxDate = new Date(today.setFullYear(today.getFullYear() - 14));
        const maxDateString = maxDate.toISOString().split('T')[0]; // Formato YYYY-MM-DD

        if (birthdayRef.current) {
            birthdayRef.current.setAttribute('max', maxDateString);
        }
    }, [])

    return (
        <div className="flex flex-col md:flex-row gap-4 p-4 justify-between max-md:p-0 max-md:mr-2 max-md:flex-row max-md:mt-10 max-xl:p-0 max-md:w-[90%]">
            <div className="flex flex-col md:w-2/4">
                <label htmlFor="username" className={`text-gray-700 mb-2 ${usernameError ? 'text-red-500' : ''}`}>
                    {usernameError || 'Nome social:'}
                </label>
                <input
                    id="username"
                    name="nome_social" // Ajuste aqui
                    type="text"
                    className={`border-b border-black w-full focus:outline-none max-md:w-[95%] ${usernameError ? 'border-red-500' : ''}`}
                    autoComplete="username"
                />
            </div>
            <div className="flex flex-col md:w-2/5 ">
                <label htmlFor="birthday" className={`text-gray-700 mb-2 whitespace-nowrap ${birthdayError ? 'text-red-500' : ''}`}>
                    {birthdayError || 'Data de nascimento:'}
                </label>
                <input
                    id="birthday"
                    name="data_nasc" // Ajuste aqui
                    type="date"
                    className={`border-b border-black w-full focus:outline-none ${birthdayError ? 'border-red-500' : ''}`}
                    autoComplete="bday"
                    ref={birthdayRef} // Referência para o campo de data
                />
            </div>
        </div>
    );
}