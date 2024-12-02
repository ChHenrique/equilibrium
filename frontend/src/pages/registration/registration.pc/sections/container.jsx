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
        <div id = "conteiner" className= "bg-white flex-col flex items-center p-0 h-[85vh] w-[65vw] relative rounded-[10px] max-md:w-[95vw] max-2xl:h-[90vh] max-lg:h-[70vh] max-lg:w-[90vw] max-xl:h-[95vh] max-xl:w-[80vw] max-md:max-h-[600px] max-lg:max-h-[790px] max-2xl:max-h-[650px]">
            <Header />
            <Form ref={formRef} errors={errors} setErrors={setErrors}/>
            <Balls />
            
            <a href="/">
                <img
                    src={logo}
                    alt="Logo"
                    className="absolute bottom-3 right-3 h-[8em] w-fit max-md:hidden max-xl:h-[6em] max-2xl:h-[7em]"
                />
            </a>
        </div>
    );
}
