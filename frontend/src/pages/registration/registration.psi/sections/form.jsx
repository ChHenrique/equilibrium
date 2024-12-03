import React, { forwardRef } from "react";
import { Name } from "../storage/name";
import { User_Bday } from "../storage/user_bday";
import { Email } from "../storage/email";
import { Password } from "../storage/password";
import { CPF_CRP } from "../storage/cpf_crp";
import { Verification } from "../recognition/verification";
import zxcvbn from 'zxcvbn';

export const Form = forwardRef(({ errors = {}, setErrors }, ref) => {

    const handleSubmit = (event) => {
        // Verifica e armazena erros
        const hasErrors = Verification(event, ref, setErrors);
        
        const passwordInput = ref.current.querySelector('input[id="senha"]');
        const passwordStrength = zxcvbn(passwordInput.value);

        if (passwordStrength.score < 3) {
            setErrors(prev => ({ ...prev, password: 'Sua senha não é segura'}));
            return
        }

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
                window.location.href = '/login/psicologo';
            })
            .catch(error => {
                console.error('Erro:');
                setErrors({ general: error.message });
            });
    };
    

    return (
        <article className="flex flex-col justify-center items-center p-5 w-full max-w-4xl h-auto font-satoshi-Regular max-md:-translate-y-4 max-2xl:p-0 max-xl:p-0">

            <form ref={ref} onSubmit={handleSubmit} className="w-4/6 max-w-1xl h-auto mt-12 ml-5 max-md:w-full space-y-6 max-xl:mt-8 max-2xl:mt-6 max-md:space-y-4 max-md:ml-9 max-lg:space-y-10 max-xl:space-y-6 max-md:mt-6 max-lg:w-[90%] max-2xl:space-y-0"> 

                <Name nameError={errors.name} surnameError={errors.surname} />
                <User_Bday usernameError={errors.username} birthdayError={errors.birthday} />
                <Email emailError={errors.email} />
                <Password passwordError={errors.password} confirmPasswordError={errors.confirmPassword} />
                <CPF_CRP cpfError={errors.cpf} crpError={errors.crp} />
                <div className="w-full flex justify-center items-center">
                <button
                    onClick={((e) => {
                        if(e.key == "Enter"){
                            Form()
                        }
                    })}
                    type="submit"
                    className="bg-[#3B82F6] p-0.5 text-white border border-[#3B82F6] w-80 h-auto rounded-[10px] 
        font-satoshi font-extrabold text-lg mt-11 hover:bg-[#1c3b79] 
        transition-all duration-200 hover:rounded-[15px] -translate-y-10 max-xl:mt-0 max-2xl:translate-y-0 max-2xl:mt-0 max-md:w-44 max-xl:translate-y-0 max-md:translate-y-0 max-md:mr-8"
                >
                    Registrar
                </button>
                </div>
            </form>
        </article>
    );
});
