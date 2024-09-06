export function oversight(formRef) {
    const errors = {};

    const form = formRef.current;
    if (!form) {
        console.error("Form reference is null");
        return errors;
    }

    const inputs = {
        user_email: form.querySelector('input[id="user_email"]'),
        password: form.querySelector('input[id="senha"]'),
    };

    const user_emailValue = inputs.user_email ? inputs.user_email.value.trim() : '';
    if (user_emailValue === '') {
        errors.user_email = 'Campo obrigatório';
    }

    const passwordValue = inputs.password ? inputs.password.value.trim() : '';
    if (passwordValue === '') {
        errors.password = 'Campo obrigatório';
    } 

    return errors;
}
