package com.api.scilink.exceptions;

public class CpfJaCadastradoException extends RuntimeException{
    public CpfJaCadastradoException() {
        super("O CPF informado já está sendo utilizado!");
    }
}
