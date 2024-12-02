import { Header } from './header';
import { Balls } from '../storage/balls';
import { Form } from './form';
import logo from "../../../../assets/images/logo-title.svg";
import React, { useRef } from 'react';

export function Container() {
    const formRef = useRef(null);
    const [errors, setErrors] = React.useState({})
    return (
        <div className='bg-white flex-col flex items-center p-0 h-[87vh] w-[65vw] relative rounded-[10px] max-md:w-[82vw] max-md:h-[80vh] max-xl:h-[95vh] max-md:max-h-[580px] max-lg:max-h-[700px] max-2xl:max-h-[700px]'>

            <Header />
            <Form ref = {formRef} errors = {errors}/>
            <Balls /> 

            <a href="/">
            <img
                src={logo}
                alt="Logo"
                className="absolute bottom-3 right-4 h-[8em] w-fit max-md:hidden max-2xl:h-[8em] max-lg:h-[6em] max-xl:h-[7em]"
            />
            </a>
        </div>
    );
}
