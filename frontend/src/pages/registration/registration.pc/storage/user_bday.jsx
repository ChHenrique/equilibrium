
export function User_Bday({ usernameError, birthdayError }) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 p-4 justify-between max-sm:p-0 max-sm:mr-2 max-sm:flex-row max-sm:mt-10 max-xl:p-0 max-sm:w-[90%]">
            <div className="flex flex-col sm:w-2/4">
                <label htmlFor="username" className={`text-gray-700 mb-2 ${usernameError ? 'text-red-500' : ''}`}>
                    {usernameError || 'Nome social:'}
                </label>
                <input
                    id="username"
                    name="nome_social" // Ajuste aqui
                    type="text"
                    className={`border-b border-black w-full focus:outline-none max-sm:w-[95%] ${usernameError ? 'border-red-500' : ''}`}
                    autoComplete="username"
                />
            </div>
            <div className="flex flex-col sm:w-2/5 ">
                <label htmlFor="birthday" className={`text-gray-700 mb-2 whitespace-nowrap${birthdayError ? 'text-red-500' : ''}`}>
                    {birthdayError || 'Data de nascimento:'}
                </label>
                <input
                    id="birthday"
                    name="data_nasc" // Ajuste aqui
                    type="date"
                    className={`border-b border-black w-full focus:outline-none ${birthdayError ? 'border-red-500' : ''}`}
                    autoComplete="bday"
                />
            </div>
        </div>
    );
}
