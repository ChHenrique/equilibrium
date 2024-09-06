import InputMask from 'react-input-mask';

export function Cpf() {
    return (
        <div className="flex flex-col flex-grow ml-1.9 p-4 mb-2">
            <label htmlFor="cpf" className="text-gray-700 mb-2">CPF:</label>
            <InputMask
                    mask="999.999.999-99"
                    className="border-b border-black w-full focus:outline-none text-gray-700"
                >
                    {(inputProps) => <input {...inputProps} type="text" id="cpf" />}
                </InputMask>
        </div>
    )
}