package com.api.scilink.exceptions.auth;

public class CpfJaCadastradoException extends RuntimeException{
    public CpfJaCadastradoException() {
        super("O CPF informado já está sendo utilizado!");
    }
}
