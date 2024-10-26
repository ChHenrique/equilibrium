import { oversight } from '../recognition/oversight'; // Importar função de verificação
import { useNavigate } from 'react-router-dom';

export function Footer({ formRef, setErrors, setLoggedIn }) {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();

        // Executar a função de verificação antes de enviar os dados
        const validationErrors = oversight(formRef);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return; // Impedir o envio caso tenha erros
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
            const id = data.id
            localStorage.setItem('id', id);
            setLoggedIn(true);
            navigate('/homepage-pc');
        })
        .catch(error => {
            console.error('Erro:', error.message);
            setErrors({ general: error.message });
        });
    };

    return (
        <footer className="flex flex-col justify-center items-center mb-20">
            <button
                type="button"
                onClick={handleClick}
                className="bg-[#3B82F6] text-white border border-[#3B82F6] w-[350px] h-[35px] rounded-[10px] font-satoshi font-extrabold text-[17px] mt-[30px] hover:bg-[#1c3b79] transition-all duration-200 hover:rounded-[15px] mr-1">
                Entrar
            </button>
        </footer>
    );
}
