package com.api.scilink.exceptions.auth;

public class CpfInvalidoException extends RuntimeException {
    public CpfInvalidoException() { super("Por favor digite um cpf válido!"); }
}
