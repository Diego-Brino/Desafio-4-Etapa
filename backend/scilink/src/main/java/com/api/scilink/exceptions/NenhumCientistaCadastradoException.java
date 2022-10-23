package com.api.scilink.exceptions;

public class NenhumCientistaCadastradoException extends RuntimeException {
    public NenhumCientistaCadastradoException() {
        super("Nenhum cientista cadastrado!");
    }
}
