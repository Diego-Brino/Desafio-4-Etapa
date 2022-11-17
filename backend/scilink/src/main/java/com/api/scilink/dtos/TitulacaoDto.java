package com.api.scilink.dtos;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class TitulacaoDto {
    private Integer idTitulacao;

    @NotBlank(message = "Por favor insira um nome para a titulacao")
    @Size(max = 25, message = "Por favor insira um nome para a titulacao menor que 25 caracteres!")
    private String nome;

    //region Getters and Setters

    public Integer getIdTitulacao() {
        return idTitulacao;
    }
    public void setIdTitulacao(Integer idTitulacao) {
        this.idTitulacao = idTitulacao;
    }

    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }

    //endregion
}
