package com.api.scilink.exceptions;

public class EmailJaCadastradoException extends RuntimeException {
    public EmailJaCadastradoException() {
        super("O email informado já está utilizado!");
    }
}
