import { Header } from './header';
import { Balls } from '../storage/balls';
import { Form } from './form';
import logo from "../../../../assets/images/logo-title.svg";
import React, { useRef } from 'react';

export function Container() {
    const formRef = useRef(null);
    const [errors, setErrors] = React.useState({})
    return (
        <div className='bg-white flex-col flex items-center p-0 h-[87vh] w-[65vw] relative rounded-[10px] max-sm:w-[82vw] max-sm:h-[80vh] max-xl:h-[95vh]'>

            <Header />
            <Form ref = {formRef} errors = {errors}/>
            <Balls /> 

            <a href="/">
            <img
                src={logo}
                alt="Logo"
                className="absolute bottom-3 right-4 h-[8em] w-fit max-sm:hidden max-2xl:h-[8em] max-lg:h-[6em] max-xl:h-[7em]"
            />
            </a>
        </div>
    );
}
