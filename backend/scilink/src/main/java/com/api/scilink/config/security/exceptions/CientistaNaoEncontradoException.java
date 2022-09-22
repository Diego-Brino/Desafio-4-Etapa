package com.api.scilink.config.security.exceptions;

public class CientistaNaoEncontradoException extends RuntimeException {
    public CientistaNaoEncontradoException() {
        super("Cientista não encontrado, tente novamente!");
    }
}
