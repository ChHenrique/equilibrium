import { Verification } from '../recognition/verification';
import { useNavigate } from 'react-router-dom';

export function Footer({ formRef, setErrors, setLoggedIn }) {
    const navigate = useNavigate(); // Hook para redirecionar

    const handleClick = (e) => {
        e.preventDefault(); // Impede o comportamento padrão do botão

        if (!formRef.current) {
            console.error('formRef não está definido');
            return;
        }

        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData.entries());

        fetch('http://localhost:3000/loginps', {
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

            // Armazena o token no localStorage
            localStorage.setItem('token', token);

            // Atualiza o estado de login
            setLoggedIn(true);

            // Redireciona o usuário para a página desejada, como por exemplo "/dashboard"
            navigate('/homepage-pc');
        })
        .catch(error => {
            console.error('Erro:', error.message);
            setErrors({ general: error.message });
        });
    }
    return (
        <footer>
            <button
                type="button"
                onClick={handleClick}
                className="bg-[#3B82F6] p-0.5 text-white border border-[#3B82F6] w-80 h-auto rounded-[10px] max-w-sm font-satoshi font-extrabold text-lg mt-0.5 hover:bg-[#1c3b79] transition-all duration-200 hover:rounded-[15px] mr-1">
                Entrar
            </button>

        </footer>
    )
}