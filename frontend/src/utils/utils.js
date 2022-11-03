function removeMaskCpf(cpf){
    cpf = cpf.replaceAll(".", "");
    cpf = cpf.replace("-", "");
    return cpf;
}

function removeMaskTelefone(telefone){
    telefone = telefone.replace("(", "");
    telefone = telefone.replace(")", "");
    telefone = telefone.replace("-", "");
    return telefone;
}

function telefoneStringToObject(telefone){
    return {
        ddd: telefone.substring(0,2),
        numero: telefone.substring(2,11)
    };
}

export {
    removeMaskCpf,
    removeMaskTelefone,
    telefoneStringToObject
};