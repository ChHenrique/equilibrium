import React, { forwardRef } from "react";
import { Name } from "../storage/name";
import { User_Bday } from "../storage/user_bday";
import { Email } from "../storage/email";
import { Password } from "../storage/password";
import { CPF_CRP } from "../storage/cpf_crp";

export const Form = forwardRef(({ errors = {} },ref) => {
    return (
        <article className="flex flex-col justify-center items-center pb-0 w-full max-w-4xl h-auto font-satoshi-Regular -mb-8 -mt-5">

            <form ref={ref} method = "post" className="w-4/6 max-w-1xl h-auto mt-14 ml-5">

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
                <CPF_CRP
                    cpfError={errors.cpf}
                    crpError={errors.crp}
                />

            </form>

        </article>
    );
});
