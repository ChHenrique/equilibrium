import React, { useRef, useState } from 'react';
import { Header } from './header';
import { Balls } from '../storage/balls';
import { Form } from './form';
import logo from "../../../../assets/images/logo-title.svg";
import "../registro_pc.css"

export function Container() {
    const formRef = useRef(null)
    const [errors, setErrors] = React.useState({ general: '' })

    return (
        <div id = "conteiner" className= "bg-white flex-col flex items-center p-0 h-[85vh] w-[65vw] relative rounded-[10px] max-sm:h-[90vh] max-sm:w-[85vw]">
            <Header />
            <Form ref={formRef} errors={errors} setErrors={setErrors}/>
            <Balls />
            
            <a href="/">
                <img
                    src={logo}
                    alt="Logo"
                    className="absolute bottom-3 right-3 h-[8em] w-fit max-sm:hidden max-xl:h-[6em]"
                />
            </a>
        </div>
    );
}
