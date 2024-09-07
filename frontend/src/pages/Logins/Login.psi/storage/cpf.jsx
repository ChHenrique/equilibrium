export function Cpf({ cpferror }) {
    // Função para formatar o CPF enquanto o usuário digita
    const formatCPF = (event) => {
        const input = event.target;
        let value = input.value.replace(/\D/g, '');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        input.value = value;
    };
    return (
        <div className="flex flex-col flex-grow ml-1.9 p-4 mb-2">
            <label htmlFor="cpf_loginpsi" className={`text-gray-700 mb-2 ${cpferror ? ' text-red-500' : ''}`}>
            {cpferror ? cpferror : 'CPF:'}
            </label>

            <input
                type="text"
                id="cpf_loginpsi"
                onInput={formatCPF}
                maxLength={14}

                className={`border-b border-black w-full focus:outline-none text-gray-700 ${cpferror ? 'border-red-500' : ''}`}
            >

            </input>
        </div>
    )
}