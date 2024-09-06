export function Email() {
    return (
        <div className="flex flex-col flex-grow ml-1.9 p-4 mb-2">
            <label htmlFor="user_email" className="text-gray-700 mb-2">Usuário ou Email:</label>
            <input
                type="text"
                id="user_email"
                className="border-b border-black w-full focus:outline-none "
            />
        </div>
    )
}