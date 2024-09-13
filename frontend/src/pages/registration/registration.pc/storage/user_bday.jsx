import React from 'react';

export function User_Bday({ usernameError, birthdayError }) {
    return (
        <div className="flex flex-col sm:flex-row gap-5 p-4 justify-between">
            <div className="flex flex-col sm:w-2/5">
                <label htmlFor="username" className={`text-gray-700 mb-2 ${usernameError ? 'text-red-500' : ''}`}>
                    {usernameError || 'Nome social:'}
                </label>
                <input
                    id="username"
                    type="text"
                    className={`border-b border-black w-full focus:outline-none ${usernameError ? 'border-red-500' : ''}`}
                    autoComplete="username"
                />
            </div>
            <div className="flex flex-col sm:w-2/5">
                <label htmlFor="birthday" className={`text-gray-700 mb-2 ${birthdayError ? 'text-red-500' : ''}`}>
                    {birthdayError || 'Data de nascimento:'}
                </label>
                <input
                    id="birthday"
                    type="date"
                    className={`border-b border-black w-full focus:outline-none ${birthdayError ? 'border-red-500' : ''}`}
                    autoComplete="bday"
                />
            </div>
        </div>
    );
}
