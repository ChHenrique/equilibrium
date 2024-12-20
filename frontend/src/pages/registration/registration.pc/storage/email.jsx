import React from 'react';

export function Email({ emailError }) {
    return (
        <div className="flex flex-col flex-grow ml-1.9 p-4 mb-2 max-md:w-[90%] max-md:p-0 max-md:mt-5 max-xl:p-0">
            <label htmlFor="email" className={`text-gray-700 mb-2 ${emailError ? 'text-red-500' : ''}`}>
                {emailError ? emailError : 'Email:'}
            </label>
            <input
                type="email"
                id="email"
                name="email" 
                placeholder="usuário@gmail.com"
                className={`border-b border-black w-full focus:outline-none ${emailError ? 'border-red-500' : ''}`}
                autoComplete="email"
            />
        </div>
    );
}
