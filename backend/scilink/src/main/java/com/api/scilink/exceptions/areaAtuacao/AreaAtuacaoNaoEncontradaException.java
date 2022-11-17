package com.api.scilink.exceptions.areaAtuacao;

public class AreaAtuacaoNaoEncontradaException extends RuntimeException {
    public AreaAtuacaoNaoEncontradaException() {
        super("A área de atuação informada não foi encontrada!");
    }
}
