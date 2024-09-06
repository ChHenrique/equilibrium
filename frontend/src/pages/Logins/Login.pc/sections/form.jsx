import { User_Email } from "../storage/user_email";
import { Password } from "../storage/senha";
import React, { forwardRef } from 'react';

export const Form = forwardRef(({ errors = {} }, ref) => {
    return (
        <article className="flex flex-col justify-center items-center p-5 w-full max-w-4xl h-1/2 font-satoshi-bold mt-4">
            <form ref={ref} method="post" className="w-4/6 max-w-1xl h-auto mt-3 ml-5 justify-center items-center">
                <br />
                <User_Email 
                    user_emailerror={errors.user_email}
                />
                <br />
                <Password 
                    passwordError={errors.password}
                />
            </form>
        </article>
    );
});

