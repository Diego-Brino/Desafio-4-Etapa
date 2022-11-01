package com.api.scilink.exceptions.titulacao;

public class TitulacaoNaoEncontradaException extends RuntimeException {
    public TitulacaoNaoEncontradaException () {
        super("A titulação informada não foi encontrada");
    }
}
