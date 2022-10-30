package com.api.scilink.exceptions.cientista;

public class NenhumCientistaCadastradoException extends RuntimeException {
    public NenhumCientistaCadastradoException() {
        super("Nenhum cientista cadastrado!");
    }
}
