package com.api.scilink.dtos;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class AreaAtuacaoDto {
    private Integer idAreaAtuacao;

    @NotBlank(message = "Por favor insira um nome para a area de atuacao")
    @Size(max = 25, message = "Por favor insira um nome para a area de atuacao menor que 25 caracteres!")
    private String nome;

    //region Getters and Setters

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