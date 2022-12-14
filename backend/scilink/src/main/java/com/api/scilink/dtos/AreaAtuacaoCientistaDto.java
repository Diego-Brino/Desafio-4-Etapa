package com.api.scilink.dtos;

public class AreaAtuacaoCientistaDto {
    private Integer idCientista;

    private Integer idAreaAtuacao;

    /**
     * Nome da area de atuação
     */
    private String nome;

    //region Getters and Setters

    public Integer getIdCientista() {
        return idCientista;
    }
    public void setIdCientista(Integer idCientista) {
        this.idCientista = idCientista;
    }

    public Integer getIdAreaAtuacao() {
        return idAreaAtuacao;
    }
    public void setIdAreaAtuacao(Integer idAreaAtuacao) {
        this.idAreaAtuacao = idAreaAtuacao;
    }

    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }

    //endregion
}
