import { Email } from "../storage/user_email"
import { Password } from "../storage/senha";
import { Cpf } from "../storage/cpf"
import React, { forwardRef } from 'react';

export const Form = forwardRef(({errors = {} }, ref) => {
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
