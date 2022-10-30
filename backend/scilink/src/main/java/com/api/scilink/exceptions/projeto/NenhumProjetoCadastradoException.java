package com.api.scilink.exceptions.projeto;

public class NenhumProjetoCadastradoException extends RuntimeException {
    public NenhumProjetoCadastradoException() {
        super("Nenhum projeto cadastrado!");
    }
}
