export function oversight(formRef) {
    const errors = {};

    const form = formRef.current;
    if (!form) {
        console.error("Form reference is null");
        return errors;
    }

    const getInputValue = (input) => (input ? input.value.trim() : '');

    const inputs = {
        user_emailpsi: form.querySelector('input[id="user_email_psi"]'),
        password: form.querySelector('input[id="senha"]'),
        cpf: form.querySelector('input[id="cpf_loginpsi"]')
    };

    const user_emailpsiValue = getInputValue(inputs.user_emailpsi);
    if (user_emailpsiValue === '') {
        errors.user_emailpsi = 'Campo obrigatório';
    }

    const passwordValue = getInputValue(inputs.password);
    if (passwordValue === '') {
        errors.password = 'Campo obrigatório';
    }

    const cpf_loginpsiValue = getInputValue(inputs.cpf).replace(/\D/g, '');
    if (cpf_loginpsiValue === '') {
        errors.cpf_loginpsi = 'Campo obrigatório';
    } else if (cpf_loginpsiValue.length !== 11) {
        errors.cpf_loginpsi = 'CPF inválido';
    }

    return errors;
}
