import React, { useRef } from 'react';
import { Header } from './header';
import { Balls } from '../storage/balls';
import { Form } from './form';
import logo from "../../../../assets/images/logo-title.svg";


export function Container() {
    const formRef = useRef(null)
    const [errors, setErrors] = React.useState({})

    return (
        <div className='bg-white flex-col flex items-center -p-2 h-[94vh] w-[65vw] relative rounded-[10px] max-2xl:h-[97vh] max-sm:h-[80vh] max-sm:w-[95vw] max-lg:h-[75vh] max-lg:w-[90vw] max-xl:h-[60vh] max-xl:w-[80vw] max-md:h-[80vh]'>

            <Header />

            <Form ref={formRef} errors={errors} setErrors={setErrors}/>

            <Balls /> 
            <div className='m-4'>

            </div>
            <a href="/">
            <img
                src={logo}
                alt="Logo"
                className="absolute bottom-3 right-3 h-[8em] w-fit max-xl:h-[5em] max-2xl:h-[7em] max-sm:hidden"
            />
            </a>
        </div>
    );
}
