package com.api.scilink.config.security.exceptions;

public class CpfNotFoundException extends RuntimeException {
    public CpfNotFoundException () {
        super("O cpf informado não foi encontrado!");
    }
}
