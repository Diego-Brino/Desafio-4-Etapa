package com.api.scilink.exceptions;

public class CientistaNaoEncontradoException extends RuntimeException {
    public CientistaNaoEncontradoException() {
        super("Cientista não encontrado, tente novamente!");
    }
}
