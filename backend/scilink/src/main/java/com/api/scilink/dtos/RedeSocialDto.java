package com.api.scilink.dtos;

import com.api.scilink.models.CientistaModel;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class RedeSocialDto {
    private CientistaModel cientista;

    @NotBlank(message = "É obrigatório o endereço de uma rede social!")
    @Size(max = 50, message = "A URL deve ter no máximo 50 caracteres!")
    private String endereco;

    @NotBlank(message = "É obrigatório informar o tipo da rede social!")
    @Size(max = 1, message = "O tipo não pode ultrapassar o limite de 1 caractere!")
    private Character tipo;

    //region Constructors

    public RedeSocialDto() {
    }

    public RedeSocialDto(CientistaModel cientista, String endereco, Character tipo) {
        this.cientista = cientista;
        this.endereco = endereco;
        this.tipo = tipo;
    }

    //endregion

    //region Getters and Setters

    public CientistaModel getCientista() {
        return cientista;
    }
    public void setCientista(CientistaModel cientista) {
        this.cientista = cientista;
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
