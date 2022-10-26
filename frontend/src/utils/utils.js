function removeMaskCpf(cpf){
    cpf = cpf.replaceAll(".", "");
    cpf = cpf.replace("-", "");
    return cpf;
}

export {removeMaskCpf};