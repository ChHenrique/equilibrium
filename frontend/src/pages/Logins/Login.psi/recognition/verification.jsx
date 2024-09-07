import { oversight } from './oversight';

export async function Verification(e, { formRef, setErrors}) {
    e.preventDefault();

    // Valida os erros formulário
    const validationErrors = oversight(formRef);
    setErrors(validationErrors);

    // Se não houver erros de validação, envie a solicitação
    if (Object.keys(validationErrors).length === 0) {
        console.log("enviado")
        return
    }

console.log('Errors:', validationErrors);

}
