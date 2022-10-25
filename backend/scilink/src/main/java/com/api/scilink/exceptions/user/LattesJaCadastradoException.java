package com.api.scilink.exceptions.user;

public class LattesJaCadastradoException extends RuntimeException {
    public LattesJaCadastradoException() {
        super("O lattes informado já está utilizado!");
    }
}
