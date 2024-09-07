export function Cpf() {
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
            <label htmlFor="cpf" className="text-gray-700 mb-2">CPF:</label>
            <Input
                type="text"
                id="cpf_loginpsi"
                onInput={formatCPF}

                className="border-b border-black w-full focus:outline-none text-gray-700"
            >

            </Input>
        </div>
    )
}