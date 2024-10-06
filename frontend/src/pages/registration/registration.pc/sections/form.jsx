// form.jsx
import React, { forwardRef } from 'react';
import { Name } from "../storage/name";
import { User_Bday } from "../storage/user_bday";
import { Email } from "../storage/email";
import { Password } from "../storage/password";
import { Footer } from './footer'; 

export const Form = forwardRef(({ errors = {}, setErrors }, ref) => { // Adiciona setErrors
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(ref.current);
        const data = Object.fromEntries(formData.entries());



        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                return response.text().then(text => { // Captura o corpo da resposta
                    throw new Error(text || 'Erro ao registrar usuário'); // Usa o texto da resposta ou um erro padrão
                });
            }
            return response.json();
        })
        .then(data => {

            // Aqui você pode adicionar lógica adicional, como redirecionar ou mostrar uma mensagem
        })
        .catch(error => {
            console.error('Erro:'); // Você pode manter ou remover este log, conforme necessário
            setErrors({ general: error.message }); // Sete o erro aqui
        });
        
    };

    return (
        <article className="flex flex-col justify-center items-center p-5 w-full max-w-4xl h-auto font-satoshi-Regular">
            <form ref={ref} onSubmit={handleSubmit} className="w-4/6 max-w-1xl h-auto mt-12 ml-5">
                <Name 
                    nameError={errors.name} 
                    surnameError={errors.surname} 
                />
                <User_Bday 
                    usernameError={errors.username} 
                    birthdayError={errors.birthday} 
                />
                <Email 
                    emailError={errors.email} 
                />
                <Password 
                    passwordError={errors.password} 
                    confirmPasswordError={errors.confirmPassword} 
                />
                {/* Passando setErrors para o Footer */}
                <Footer errors={errors} setErrors={setErrors} />
            </form>
        </article>
    );
});
