import React, { useRef } from 'react';
import { Header } from './header';
import { Balls } from '../storage/balls';
import { Form } from './form';
import logo from "../../../../assets/images/logo-title.svg";
import { Footer } from "./footer";

export function Container() {
    const formRef = useRef(null);
    const [errors, setErrors] = React.useState({});

    return (
        <div className='bg-white flex-col flex items-center -p-2 h-[94vh] w-[65vw] relative rounded-[10px]'>

            <Header />

            <Form ref={formRef} errors={errors}/>

            <Balls /> 
            <div className='m-4'>

            <Footer formRef={formRef} setErros={setErrors} />
            </div>
            <a href="./">
            <img
                src={logo}
                alt="Logo"
                className="absolute bottom-3 -right-14 h-[17vh] w-[17vw]"
            />
            </a>
        </div>
    );
}
