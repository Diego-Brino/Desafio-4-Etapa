package com.api.scilink.config.security.exceptions;

public class EmailJaCadastradoException extends RuntimeException {
    public EmailJaCadastradoException() {
        super("O email informado já está utilizado!");
    }
}
