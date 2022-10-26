package com.api.scilink.exceptions.auth;

public class EmailJaCadastradoException extends RuntimeException {
    public EmailJaCadastradoException() {
        super("O email informado já está sendo utilizado!");
    }
}
