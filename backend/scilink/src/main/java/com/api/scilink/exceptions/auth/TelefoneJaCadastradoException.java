package com.api.scilink.exceptions.auth;

public class TelefoneJaCadastradoException extends RuntimeException {
    public TelefoneJaCadastradoException () {
        super("O telefone informado já está sendo utilizado!");
    }
}
