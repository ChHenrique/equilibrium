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

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSubmit(event); // Chama o handleSubmit quando "Enter" é pressionado
        }
    };

    return (
        <article className="flex flex-col justify-center items-center p-5 w-full max-w-4xl h-1/2 font-satoshi-bold mt-4">
            <form 
                ref={ref} 
                method="post" 
                className="w-4/6 max-w-1xl h-auto mt-3 ml-5 justify-center items-center" 
                onSubmit={handleSubmit} 
                onKeyDown={handleKeyDown} // Adiciona o evento de key down aqui
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


/*  <div className="flex w-full h-fit justify-center translate-y-10">
<button
type="submit"
onClick={handleClick}
onKeyDown={(e) => {
    if(e.key === "Enter"){
        Form()
    }
}}
className="bg-[#3B82F6] p-0.5 text-white border border-[#3B82F6] w-80 h-auto rounded-[10px] max-w-sm font-satoshi font-extrabold text-lg hover:bg-[#1c3b79] transition-all duration-200 hover:rounded-[15px]"
>
Entrar
</button>
</div> */