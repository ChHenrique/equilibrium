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
        confirmPassword: form.querySelector('input[id="confirme_sua_senha"]'),
        cpf: form.querySelector('input[id="cpf"]'),
        crp: form.querySelector('input[id="crp"]')
    };

    // Função para obter o valor do campo
    const getInputValue = (input) => (input ? input.value.trim() : '');

    const nameValue = getInputValue(inputs.name);
    if (nameValue === '') {
        errors.name = 'Campo obrigatório';
    } else if (/[^a-zA-Z\s]/.test(nameValue)) {
        errors.name = 'Nome não pode conter símbolos ou números';
    }

    const surnameValue = getInputValue(inputs.surname);
    if (surnameValue === '') {
        errors.surname = 'Campo obrigatório';
    } else if (/[^a-zA-Z\s]/.test(surnameValue)) {
        errors.surname = 'Sobrenome não pode conter símbolos ou números';
    }

    const usernameValue = getInputValue(inputs.username);
    if (usernameValue === '') {
        errors.username = 'Campo obrigatório';
    }

    const birthdayValue = getInputValue(inputs.birthday);
    if (birthdayValue === '') {
        errors.birthday = 'Campo obrigatório';
    }

    const emailValue = getInputValue(inputs.email);
    if (emailValue === '') {
        errors.email = 'Email inválido';
    } else if (!/@/.test(emailValue) || !/\.com/.test(emailValue)) {
        errors.email = 'Email inválido';
    }

    const passwordValue = getInputValue(inputs.password);
    if (passwordValue === '') {
        errors.password = 'Campo obrigatório';
    } else if (passwordValue.length < 8) {
        errors.password = 'A senha deve ter pelo menos 8 caracteres';
    }

    const confirmPasswordValue = getInputValue(inputs.confirmPassword);
    if (confirmPasswordValue === '') {
        errors.confirmPassword = 'Campo obrigatório';
    } else if (confirmPasswordValue !== passwordValue) {
        errors.confirmPassword = 'As senhas não coincidem';
    }

    const cpfValue = getInputValue(inputs.cpf).replace(/\D/g, '');
    if (cpfValue === '') {
        errors.cpf = 'Campo obrigatório';
    } else if (cpfValue.length !== 11) {
        errors.cpf = 'CPF inválido';
    }

    const crpValue = getInputValue(inputs.crp).replace(/\D/g, '');
    if (crpValue === '') {
        errors.crp = 'Campo obrigatório';
    } else if (crpValue.length !== 6) {
        errors.crp = 'CRP inválido';
    }

    return errors;
}
