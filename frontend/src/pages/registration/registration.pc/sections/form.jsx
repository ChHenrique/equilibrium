import React, { forwardRef } from 'react';
import { Name } from "../storage/name";
import { User_Bday } from "../storage/user_bday";
import { Email } from "../storage/email";
import { Password } from "../storage/password";
import { Verification } from '../recognition/verification'; // Ajuste o caminho conforme necessário



export const Form = forwardRef(({ errors = {}, setErrors }, ref) => {

    const handleSubmit = (event) => {
        // Verifica e armazena erros
        const hasErrors = Verification(event, ref, setErrors);
    
        if (hasErrors) {
            // Se houver erros, não envie o formulário
            return;
        }
    
        const formData = new FormData(ref.current);
        const data = Object.fromEntries(formData.entries());
    
        console.log(data);
    
        fetch('http://localhost:3000/registerpc', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (!response.ok) {
                    return response.text().then(text => {
                        throw new Error(text || 'Erro ao registrar psicologo');
                    });
                }
                return response.json();
            })
            .then(data => {
                window.location.href = '/login_pc';
            })
            .catch(error => {
                console.error('Erro:');
                setErrors({ general: error.message });
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
                <footer className="flex justify-center mt-4">
            <button
                type="submit" // Modificado para ser um botão de envio
                className="bg-[#3B82F6] p-0.5 text-white border border-[#3B82F6] w-96 h-auto rounded-[10px] max-w-sm font-satoshi font-extrabold text-lg hover:bg-[#1c3b79] transition-all duration-200 hover:rounded-[15px] mr-1 translate-y-6"
            >
                Registrar
            </button>
        </footer>
            </form>
        </article>
    );
});