package com.api.scilink.config.security.exceptions;

public class CpfNaoEncontradoException extends RuntimeException {
    public CpfNaoEncontradoException() {
        super("O cpf informado está incorreto!");
    }
}
