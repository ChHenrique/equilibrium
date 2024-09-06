import { oversight } from './oversight';

export async function Verification(e, { formRef, setErrors}) {
    e.preventDefault();

    // Valida o formulário
    const validationErrors = oversight(formRef);
    setErrors(validationErrors);

    // Se houver erros de validação, não envie a solicitação
    if (Object.keys(validationErrors).length === 0) {
        console.log("enviado")
        return
    }
}
