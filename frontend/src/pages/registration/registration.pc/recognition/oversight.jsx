export function oversight(formRef) {
    const errors = {};

    const form = formRef.current;
    if (!form) {
        console.error("Form reference is null");
        return errors;
    }

    const inputs = {
        name: form.querySelector('input[id="name"]'),
        surname: form.querySelector('input[id="surname"]'),
        username: form.querySelector('input[id="username"]'),
        birthday: form.querySelector('input[id="birthday"]'),
        email: form.querySelector('input[id="email"]'),
        password: form.querySelector('input[id="senha"]'),
        confirmPassword: form.querySelector('input[id="confirme_sua_senha"]')
    };

    
    const nameValue = inputs.name ? inputs.name.value.trim() : '';
    if (nameValue === '') {
        errors.name = 'Campo obrigatório';
    } else if (/[^a-zA-Z\s]/.test(nameValue)) {
        errors.name = 'Nome não pode conter símbolos ou números';
    }

    
    const surnameValue = inputs.surname ? inputs.surname.value.trim() : '';
    if (surnameValue === '') {
        errors.surname = 'Campo obrigatório';
    } else if (/[^a-zA-Z\s]/.test(surnameValue)) {
        errors.surname = 'Sobrenome não pode conter símbolos ou números';
    }

    
    const usernameValue = inputs.username ? inputs.username.value.trim() : '';
    if (usernameValue === '') {
        errors.username = 'Campo obrigatório';
    }

    
    const birthdayValue = inputs.birthday ? inputs.birthday.value.trim() : '';
    if (birthdayValue === '') {
        errors.birthday = 'Campo obrigatório';
    }

    
    const emailValue = inputs.email ? inputs.email.value.trim() : '';
    if (emailValue === '' || !/@/.test(emailValue) || !/\.com/.test(emailValue)) {
        errors.email = 'Email inválido';
    }

    
    const passwordValue = inputs.password ? inputs.password.value.trim() : '';
    if (passwordValue === '') {
        errors.password = 'Campo obrigatório';
    } else if (passwordValue.length < 8) {
        errors.password = 'A senha deve ter pelo menos 8 caracteres';
    }

    // Validar confirmação de senha
    const confirmPasswordValue = inputs.confirmPassword ? inputs.confirmPassword.value.trim() : '';
    if (confirmPasswordValue === '') {
        errors.confirmPassword = 'Campo obrigatório';
    } else if (confirmPasswordValue !== passwordValue) {
        errors.confirmPassword = 'As senhas não coincidem';
    }

    return errors;
}
