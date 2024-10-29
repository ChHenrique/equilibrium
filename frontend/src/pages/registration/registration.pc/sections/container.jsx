import React, { useRef } from 'react';
import { Header } from './header';
import { Balls } from '../storage/balls';
import { Form } from './form';
import logo from "../../../../assets/images/logo-title.svg";

export function Container() {
    const formRef = useRef(null);
    const [errors, setErrors] = React.useState({ general: '' }); // Inicializa com um objeto que contém a propriedade 'general'

    return (
        <div className='bg-white flex-col flex items-center p-0 h-[85vh] w-[65vw] relative rounded-[10px]'>
            <Header />
            <Form ref={formRef} errors={errors} setErrors={setErrors}/>
            <Balls />
            
            <a href="/">
                <img
                    src={logo}
                    alt="Logo"
                    className="absolute bottom-3 right-3 h-[8em] w-fit"
                />
            </a>
        </div>
    );
}
