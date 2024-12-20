import React, { useRef } from 'react';
import { Header } from './header';
import { Balls } from '../storage/balls';
import { Form } from './form';
import logo from "../../../../assets/images/logo-title.svg";


export function Container() {
    const formRef = useRef(null)
    const [errors, setErrors] = React.useState({})

    return (
        <div className='bg-white flex-col flex items-center -p-2 h-[94vh] w-[65vw] relative rounded-[10px] max-2xl:h-[95vh] max-md:h-[80vh] max-md:w-[95vw] max-lg:h-[75vh] max-lg:w-[85vw] max-xl:h-[95vh] max-xl:w-[80vw]  max-md:max-h-[570px] max-lg:max-h-[790px] max-2xl:max-h-[650px]'>

            <Header />

            <Form ref={formRef} errors={errors} setErrors={setErrors}/>

            <Balls /> 
            <div className='m-4'>

            </div>
            <a href="/">
            <img
                src={logo}
                alt="Logo"
                className="absolute bottom-3 right-3 h-[8em] w-fit max-xl:h-[5em] max-2xl:h-[7em] max-md:hidden"
            />
            </a>
        </div>
    );
}
