package com.api.scilink.exceptions;

public class CpfNaoEncontradoException extends RuntimeException {
    public CpfNaoEncontradoException() {
        super("O cpf informado está incorreto!");
    }
}
