package com.api.scilink.dtos;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class RedeSocialDto {
    private Integer idRedeSocial;

    @NotBlank(message = "É obrigatório o endereço de uma rede social!")
    @Size(max = 50, message = "A URL deve ter no máximo 50 caracteres!")
    private String endereco;

    @NotBlank(message = "É obrigatório informar o tipo da rede social!")
    @Size(max = 1, message = "O tipo não pode ultrapassar o limite de 1 caractere!")
    private Character tipo;

    //region Constructors

    public RedeSocialDto() {
    }

    public RedeSocialDto(String endereco, Character tipo) {
        this.endereco = endereco;
        this.tipo = tipo;
    }

    //endregion

    //region Getters and Setters

    public Integer getIdRedeSocial() {
        return idRedeSocial;
    }
    public void setIdRedeSocial(Integer idRedeSocial) {
        this.idRedeSocial = idRedeSocial;
    }

    public String getEndereco() {
        return endereco;
    }
    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public Character getTipo() {
        return tipo;
    }
    public void setTipo(Character tipo) {
        this.tipo = tipo;
    }


    //endregion
}
