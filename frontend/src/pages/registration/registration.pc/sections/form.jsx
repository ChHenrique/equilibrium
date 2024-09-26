import React, { forwardRef } from 'react';
import { Name } from "../storage/name";
import { User_Bday } from "../storage/user_bday";
import { Email } from "../storage/email";
import { Password } from "../storage/password";

export const Form = forwardRef(({ errors = {} }, ref) => {
    return (
        <article className="flex flex-col justify-center items-center p-5 w-full max-w-4xl h-auto font-satoshi-Regular">

            <form ref={ref} method="post" className="w-4/6 max-w-1xl h-auto mt-12 ml-5">
            
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
            </form>
        </article>
    );
});

