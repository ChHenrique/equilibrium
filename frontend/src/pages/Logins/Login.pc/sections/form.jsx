import React, { forwardRef } from 'react'; 
import { User_Email } from "../storage/user_email";
import { Password } from "../storage/senha";
import { oversight } from '../recognition/oversight'; // Importar função de verificação

export const Form = forwardRef(({ errors = {}, setErrors }, ref) => { 
    const handleSubmit = (event) => {
        event.preventDefault();

        // Executar a função de verificação antes de enviar os dados
        const validationErrors = oversight(ref);

        // Se houver erros de validação, atualize o estado com os erros e pare a submissão
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return; // Interrompe o processo de envio se houver erros
        }

        const formData = new FormData(ref.current);
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
                    throw new Error(text || 'Erro ao fazer login');
                });
            }
            return response.json();
        })
        .then(data => {
            console.log('Login bem-sucedido:', data); 
            // Aqui você pode chamar setLoggedIn se você passar como prop
        })
        .catch(error => {
            console.error('Erro:', error.message);
            setErrors({ general: error.message });
        });
    };


    return (
        <article className="flex flex-col justify-center items-center p-5 w-full max-w-4xl h-1/2 font-satoshi-bold mt-4 max-md:p-0 max-lg:p-0 max-xl:p-0">
            <form 
                ref={ref} 
                method="post" 
                className="w-4/6 max-w-1xl h-auto mt-3 ml-5 justify-center items-center max-md:w-5/6 max-lg:w-5/6 max-xl:w-5/6" 
                onSubmit={handleSubmit}
            >
                <br />
                <User_Email user_emailerror={errors.user_email} />
                <br />
                <Password passwordError={errors.password} />
                <br />
            </form>
        </article>
    );
});
