import axios from 'axios';
import { oversight } from './oversight';

export async function Verification(e, { formRef, setErrors, setLoggedIn }) {
    e.preventDefault();
    
    // Valida o formulário
    const validationErrors = oversight(formRef);
    setErrors(validationErrors);

    // Se houver erros de validação, não envie a solicitação
    if (Object.keys(validationErrors).length > 0) {
        return;
    }

    // Obtém os dados do formulário
    const form = formRef.current;  // Correção aqui
    const user_email = form.querySelector('input[id="user_email"]').value.trim();
    const password = form.querySelector('input[id="senha"]').value.trim();

    try {
        // Envia os dados para o backend
        const response = await axios.post('http://localhost:3000/login_pc', {
            email: user_email,
            password: password,
        });

        // Processa a resposta da API
        const { token } = response.data;
        localStorage.setItem('token', token); // Armazena o token no localStorage
        setLoggedIn = true ; // Atualiza o estado para refletir que o usuário está logado
        console.log('Login bem-sucedido:', response.data);

    } catch (error) {
        console.error('Erro ao fazer login:', error.response ? error.response.data : error.message);
        setErrors({ apiError: 'Erro ao fazer login, por favor tente novamente.' });
    }
}
