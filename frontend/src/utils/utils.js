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

export {
    removeMaskCpf,
    removeMaskTelefone,
};