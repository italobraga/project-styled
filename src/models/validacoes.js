
const validarCpf = (cpf) => {
    const regex = new RegExp(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/);
    if (regex.test(cpf) || cpf.length === 0) {
        return { valido: true, mensagem: "" }
    }
    else {
        return { valido: false, mensagem: "CPF inválido!" }
    }
}

const validarEmail = (email) => {
    const regex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);

    if (regex.test(email) || email.length === 0) {
        return { valido: true, mensagem: "" }
    }
    else {
        return { valido: false, mensagem: "E-mail inválido!" }
    }
}

const validarSenha = (senha) => {
    const regex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/);

    if (regex.test(senha) || senha.length === 0) {
        return { valido: true, mensagem: "" }
    }
    else {
        return { valido: false, mensagem: "A senha requer no mínimo de oito caracteres, pelo menos uma letra, um número e um caractere especial!" }
    }
}

const validarNomes = (nome) => {
    if (nome.length >= 3 || nome.length === 0) {
        return { valido: true, mensagem: "" }
    }
    else {
    return { valido: false, mensagem: "O campo deve ter no mínimo 3 caracteres!" }
}
}

export { validarCpf, validarEmail, validarSenha, validarNomes };