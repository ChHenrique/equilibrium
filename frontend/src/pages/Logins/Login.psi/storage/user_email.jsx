export function Email({ user_emailpsierror }) {
    return (
        <div className="flex flex-col flex-grow ml-1.9 p-4 mb-2">
            <label htmlFor="user_email_psi" className={`text-gray-700 mb-2 ${user_emailpsierror ? 'text-red-500' : ''}`}>
                {user_emailpsierror ? user_emailpsierror : 'Email: '}
            </label>
            <input
                type="text"
                id="user_email_psi"
                className={`border-b border-black w-full focus:outline-none font-satoshi-medium text-gray-600 ${user_emailpsierror ? 'border-red-500' : ''}`}
            />
        </div>
    );
}
