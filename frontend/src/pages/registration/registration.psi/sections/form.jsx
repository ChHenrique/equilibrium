import React, { forwardRef } from "react";
import { Name } from "../storage/name";
import { User_Bday } from "../storage/user_bday";
import { Email } from "../storage/email";
import { Password } from "../storage/password";
import { CPF_CRP } from "../storage/cpf_crp";
import { Verification } from "../recognition/verification";

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
    
        fetch('http://localhost:3000/registerps', {
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
                window.location.href = '/login_psi';
            })
            .catch(error => {
                console.error('Erro:');
                setErrors({ general: error.message });
            });
    };
    

    return (
        <article className="flex flex-col justify-center items-center pb-0 w-full max-w-4xl h-auto font-satoshi-Regular -mb-8 -mt-5">

            <form ref={ref} onSubmit={handleSubmit} className="w-4/6 max-w-1xl h-auto mt-14 ml-5 translate-y-12">                <Name nameError={errors.name} surnameError={errors.surname} />
                <User_Bday usernameError={errors.username} birthdayError={errors.birthday} />
                <Email emailError={errors.email} />
                <Password passwordError={errors.password} confirmPasswordError={errors.confirmPassword} />
                <CPF_CRP cpfError={errors.cpf} crpError={errors.crp} />
                <div className="w-full flex justify-center items-center">
                <button
                    type="submit"
                    className="bg-[#3B82F6] p-0.5 text-white border border-[#3B82F6] w-80 h-auto rounded-[10px] 
        font-satoshi font-extrabold text-lg mt-11 hover:bg-[#1c3b79] 
        transition-all duration-200 hover:rounded-[15px] mr-1 translate-y-2"
                >
                    Registrar
                </button>
                </div>
            </form>
        </article>
    );
});
