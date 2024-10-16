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

    // Função para obter o valor do campo
    const getInputValue = (input) => (input ? input.value.trim() : '');

    // Validação dos campos
    const validations = [
        { field: 'name', message: 'Campo obrigatório', condition: value => value === '', regex: /[^a-zA-Z\s]/ },
        { field: 'surname', message: 'Campo obrigatório', condition: value => value === '', regex: /[^a-zA-Z\s]/ },
        { field: 'username', message: 'Campo obrigatório', condition: value => value === '' },
        { field: 'birthday', message: 'Campo obrigatório', condition: value => value === '' },
        { field: 'email', message: 'Email inválido', condition: value => value === '' || !/@/.test(value) || !/\.com/.test(value) },
        { field: 'password', message: 'Campo obrigatório', condition: value => value === '' || value.length < 8 },
        { field: 'confirmPassword', message: 'Campo obrigatório', condition: value => value === '' || value !== getInputValue(inputs.password) }
    ];

    validations.forEach(({ field, message, condition, regex }) => {
        const value = getInputValue(inputs[field]);
        if (condition(value)) {
            errors[field] = message;
        } else if (regex && regex.test(value)) {
            errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} não pode conter símbolos ou números`;
        }
    });

    return errors;
}
