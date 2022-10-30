package com.api.scilink.exceptions.auth;

public class LattesJaCadastradoException extends RuntimeException {
    public LattesJaCadastradoException() {
        super("O lattes informado já está utilizado!");
    }
}
