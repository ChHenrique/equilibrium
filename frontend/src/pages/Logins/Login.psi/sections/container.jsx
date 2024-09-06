import { Header } from './header';
import { Balls } from '../storage/balls';
import { Form } from './form';
import logo from "../../../../assets/images/logo-title.svg";
import { Footer } from "./footer";

export function Container() {
    return (
        <div className='bg-white flex-col flex items-center p-0 h-[87vh] w-[70vw] relative rounded-[10px]'>

            <Header />
            <Form />
            <Balls /> 
            <Footer />

            <a href="./">
            <img
                src={logo}
                alt="Logo"
                className="absolute bottom-4 right-4 h-40 w-40"
            />
            </a>
        </div>
    );
}
