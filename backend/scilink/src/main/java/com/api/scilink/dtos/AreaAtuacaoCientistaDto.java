package com.api.scilink.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AreaAtuacaoCientistaDto {
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Integer id_cientista;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Integer id_area_atuacao;

    /**
     * Nome da area de atuação
     */
    private String nome;

    //region Getters and Setters

    public Integer getId_cientista() {
        return id_cientista;
    }
    public void setId_cientista(Integer id_cientista) {
        this.id_cientista = id_cientista;
    }

    public Integer getId_area_atuacao() {
        return id_area_atuacao;
    }
    public void setId_area_atuacao(Integer id_area_atuacao) {
        this.id_area_atuacao = id_area_atuacao;
    }

    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }

    //endregion
}
