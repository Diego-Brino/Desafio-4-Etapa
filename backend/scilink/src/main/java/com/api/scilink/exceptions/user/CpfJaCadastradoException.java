package com.api.scilink.exceptions.user;

public class CpfJaCadastradoException extends RuntimeException{
    public CpfJaCadastradoException() {
        super("O CPF informado já está sendo utilizado!");
    }
}
