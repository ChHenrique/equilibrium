import { Email } from "../storage/user_email";
import { Password } from "../storage/senha";
import { Cpf } from "../storage/cpf";
import React, { forwardRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Verification } from '../recognition/verification';

export const Form = forwardRef(({ setLoggedIn }, ref) => {
    const [errors, setErrors] = useState({}); // Inicializa com um estado vazio para armazenar erros
    const navigate = useNavigate(); // Hook para redirecionar

    const handleClick = async (e) => {
        e.preventDefault(); // Impede o comportamento padrão do botão

        // Realiza a verificação e validação dos erros
        await Verification(e, { formRef: ref, setErrors });

        // Se houver erros de frontend, não prosseguir para a submissão ao backend
        if (Object.keys(errors).length > 0) {
            return; // Se houver erros, parar aqui
        }

        if (!ref.current) {
            console.error("formRef não está definido");
            return;
        }

        const formData = new FormData(ref.current);
        const data = Object.fromEntries(formData.entries());

        // Se não houver erros, faz o fetch para o backend
        try {
            const response = await fetch("http://localhost:3000/loginps", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                // Caso o backend retorne um erro, não queremos exibir a mensagem detalhada
                throw new Error("Falha ao realizar login. Tente novamente.");
            }

            const result = await response.json();
            const token = result.token;
            const id = result.id

            // Armazena o token e o id no localStorage
            localStorage.setItem("token", token);
            localStorage.setItem("id", id);

            // Redireciona o usuário para a página desejada, como por exemplo "/dashboard"
            navigate("/home/psicologo");
        } catch (error) {
            console.error("");
            setErrors({ general: "" });
        }
    };

    return (
        <article className="flex flex-col justify-center items-center p-5 w-full max-w-4xl h-3/5 font-satoshi-bold">
            <form ref={ref} method="post" className="w-4/6 max-w-1xl h-auto mt-2 ml-5 justify-center items-center ">
                <Email user_emailpsierror={errors.user_emailpsi} />
                <Cpf cpferror={errors.cpf_loginpsi} />
                <Password passwordError={errors.password} />

                {/* Botão de Entrar adicionado diretamente no formulário */}
                <div className="flex w-full h-fit justify-center translate-y-10">
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
                </div>

            </form>
        </article>
    );
});
