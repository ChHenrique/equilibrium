export function User_Email({ user_emailerror }) {
    return (
        <div className="flex flex-col flex-grow ml-1.9 p-4 mb-2">
            <label htmlFor="user_email" className={`text-gray-600 mb-2 ${user_emailerror ? 'text-red-500' : ''}`}>
                {user_emailerror ? user_emailerror : 'Email:'}
            </label>
            <input
                type="text"
                id="user_email"
                className={`border-b border-black w-full focus:outline-none font-satoshi-medium text-gray-600 ${user_emailerror ? 'border-red-500' : ''}`}
            />
        </div>
    );
}
