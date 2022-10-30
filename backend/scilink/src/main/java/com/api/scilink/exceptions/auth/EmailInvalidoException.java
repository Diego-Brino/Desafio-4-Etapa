package com.api.scilink.exceptions.auth;

public class EmailInvalidoException extends RuntimeException {
    public EmailInvalidoException () {
        super("Por favor, digite um e-mail válido!");
    }
}
