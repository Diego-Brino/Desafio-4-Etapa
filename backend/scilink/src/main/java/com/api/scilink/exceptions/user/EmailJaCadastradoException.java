package com.api.scilink.exceptions.user;

public class EmailJaCadastradoException extends RuntimeException {
    public EmailJaCadastradoException() {
        super("O email informado já está utilizado!");
    }
}
