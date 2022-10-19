package com.api.scilink.exceptions;

public class NenhumProjetoCadastradoException extends RuntimeException {
    public NenhumProjetoCadastradoException() {
        super("Nenhum projeto cadastrado!");
    }
}
