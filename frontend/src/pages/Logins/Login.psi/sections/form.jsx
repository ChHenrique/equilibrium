import { Email } from "../storage/user_email"
import { Password } from "../storage/senha";
import { Cpf } from "../storage/cpf"
import React, { forwardRef } from 'react';

export const Form = forwardRef(({ errors = {}, setErrors }, ref) => { 
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(ref.current);
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
        <article className="flex flex-col justify-center items-center p-5 w-full max-w-4xl h-3/5 font-satoshi-bold">

            <form ref={ref} method="post" className="w-4/6 max-w-1xl h-auto mt-2 ml-5 justify-center items-center ">

                <Email 
                    user_emailpsierror = {errors.user_emailpsi}
                />
                <Cpf 
                    cpferror = {errors.cpf_loginpsi}
                />

                <Password 
                    passwordError={errors.password}/>

            </form>

        </article>
    );
})
