import { Header } from './header';
import { Balls } from '../storage/balls';
import { Form } from './form';
import logo from "../../../../assets/images/logo-title.svg";
import { Footer } from "./footer";
import React, { useRef, useState } from 'react';

export function Container() {
    const formRef = useRef(null);
    const [errors, setErrors] = useState({});
    const [loggedIn, setLoggedIn] = useState(false); // Estado para controle de login

    return (
        <div className='bg-white flex-col flex items-center p-0 h-[84vh] w-[65vw] relative rounded-[10px] max-md:w-[82vw] max-md:h-[80vh] max-xl:h-[88vh]'>

            <Header />
            <Form ref={formRef} errors={errors} setErrors={setErrors} />
            <Balls/> 
            <Footer errors={errors} setErrors={setErrors} setLoggedIn={setLoggedIn} formRef={formRef}/>


            <a href="/">
                <img
                    src={logo}
                    alt="Logo"
                    className="absolute bottom-3 right-4 h-[8em] w-fit max-md:hidden max-2xl:h-[7em]"
                />
            </a>

        </div>
    );
}
