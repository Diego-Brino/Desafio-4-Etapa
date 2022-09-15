package com.api.scilink.exceptions;

import javax.naming.AuthenticationException;

public class CpfNotFoundException extends AuthenticationException {
    public CpfNotFoundException () {
        super("O cpf informado não foi encontrado!");
    }
}
