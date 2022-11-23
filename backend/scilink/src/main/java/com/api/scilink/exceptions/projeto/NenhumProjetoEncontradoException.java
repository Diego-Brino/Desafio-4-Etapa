package com.api.scilink.exceptions.projeto;

public class NenhumProjetoEncontradoException extends RuntimeException {
    public NenhumProjetoEncontradoException() { super("Nenhum projeto encontrado!"); }
}
