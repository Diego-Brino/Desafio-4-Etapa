package com.api.scilink.dtos;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class TitulacaoDto {
    @NotBlank(message = "Por favor insira um nome para a titulacao")
    @Size(max = 25, message = "Por favor insira um nome para a titulacao menor que 25 caracteres!")
    private String nome;

    //region Getters and Setters

    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }

    //endregion
}
