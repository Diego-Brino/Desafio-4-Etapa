package com.api.scilink.exceptions.cientista;

public class CpfNaoEncontradoException extends RuntimeException {
    public CpfNaoEncontradoException() {
        super("O cpf informado está incorreto!");
    }
}
