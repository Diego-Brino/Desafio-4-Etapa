package com.api.scilink.config.security.exceptions;

public class LattesJaCadastradoException extends RuntimeException {
    public LattesJaCadastradoException() {
        super("O lattes informado já está utilizado!");
    }
}
