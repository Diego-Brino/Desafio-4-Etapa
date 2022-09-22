package com.api.scilink.config.security.exceptions;

public class CpfJaCadastradoException extends RuntimeException{
    public CpfJaCadastradoException() {
        super("O CPF informado já está sendo utilizado!");
    }
}
