import { oversight } from '../recognition/oversight'; // Importar função de verificação
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Footer({ formRef, setErrors, setLoggedIn }) {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(''); // Usar string para mensagens de erro

    const handleClick = (e) => {
        e.preventDefault();

        // Se houver uma mensagem de erro (indicando uma tentativa de login anterior falhada), limpá-la
        if (errorMessage) {
            setErrorMessage(''); // Limpa a mensagem de erro ao clicar novamente
        }

        // Executar a função de verificação antes de enviar os dados
        const validationErrors = oversight(formRef);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setErrorMessage('Suas credenciais estão incorretas'); // Exibe a mensagem de erro
            return; // Impede o envio caso tenha erros
        }

        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData.entries());

        fetch('http://localhost:3000/loginpc', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                return response.text().then(text => {
                    throw new Error(text || 'Erro no login');
                });
            }
            return response.json();
        })
        .then(data => {
            const token = data.token;
            localStorage.setItem('token', token);
            const id = data.id;
            localStorage.setItem('id', id);
            setLoggedIn(true);
            navigate('/home/paciente');
        })
        .catch(error => {
            console.error('Erro:', error.message);
            setErrors({ general: error.message });
            setErrorMessage('Suas credenciais estão incorretas'); // Exibe a mensagem de erro
        });
    };

    return (
        <footer className="flex flex-col justify-center items-center mb-20 relative">
            {/* Exibe a mensagem de erro quando ela estiver configurada */}
            {errorMessage && (
                <div draggable="true" className="text-red-600 text-center font-semibold h-fit transition-opacity duration-500 opacity-100 absolute top-0 sm:-translate-y-3 whitespace-nowrap font-poppins sm:text-[17px] text-[14px] translate-y-2">
                    {errorMessage} {/* Exibe a mensagem de erro */}
                </div>
            )}
            <button
                type="button"
                onClick={handleClick}
                className="bg-[#3B82F6] text-white border border-[#3B82F6] w-[350px] h-[35px] rounded-[10px] font-satoshi font-extrabold text-[17px] mt-[30px] hover:bg-[#1c3b79] transition-all duration-200 hover:rounded-[15px] mr-1 max-sm:w-[180px] max-sm:mt-10 max-xl:mt-0"
            >
                Entrar
            </button>
        </footer>
    );
}