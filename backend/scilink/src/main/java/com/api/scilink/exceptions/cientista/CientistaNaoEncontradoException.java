package com.api.scilink.exceptions.cientista;

public class CientistaNaoEncontradoException extends RuntimeException {
    public CientistaNaoEncontradoException() {
        super("Cientista não encontrado, tente novamente!");
    }
}
