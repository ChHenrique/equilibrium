import React, { forwardRef } from 'react'; // Certifique-se de incluir forwardRef
import { User_Email } from "../storage/user_email";
import { Password } from "../storage/senha";

export const Form = forwardRef(({ errors = {}, setErrors }, ref) => { 
    const handleSubmit = (event) => {
        event.preventDefault();

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
            console.error('Erro:');
            setErrors({ general: error.message });
        });
    };

    return (
        <article className="flex flex-col justify-center items-center p-5 w-full max-w-4xl h-1/2 font-satoshi-bold mt-4">
            <form ref={ref} method="post" className="w-4/6 max-w-1xl h-auto mt-3 ml-5 justify-center items-center">
                <br />
                <User_Email user_emailerror={errors.user_email} />
                <br />
                <Password passwordError={errors.password} />
            </form>
        </article>
    );
});
