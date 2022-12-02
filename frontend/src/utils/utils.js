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

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

export {
    parseJwt,
    removeMaskCpf,
    removeMaskTelefone,
    telefoneStringToObject
};