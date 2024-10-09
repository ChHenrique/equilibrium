import { oversight } from './oversight';

export function Verification(e, formRef, setErrors) {
    e.preventDefault(); // Impede o envio do formulário padrão

    const validationErrors = oversight(formRef); // Realiza a validação
    setErrors(validationErrors); // Atualiza o estado de erros

    // Retorna true se houver erros, false caso contrário
    return Object.keys(validationErrors).length > 0;
}
