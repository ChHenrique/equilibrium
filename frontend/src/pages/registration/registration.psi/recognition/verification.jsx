import { oversight } from './oversight';

export function Verification(e, formRef, setErrors) {
    e.preventDefault();

    const validationErrors = oversight(formRef);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
        console.log('Enviado!');
    }
}
