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

function compareAllObjectKeys(object, comparison){
    for(var key in object){
        if (object[key] !== comparison)
            return false;
    }
    return true;
}

export {
    removeMaskCpf,
    removeMaskTelefone,
    compareAllObjectKeys
};