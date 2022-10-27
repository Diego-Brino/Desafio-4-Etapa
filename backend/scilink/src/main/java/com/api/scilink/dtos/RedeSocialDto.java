package com.api.scilink.dtos;

import com.api.scilink.models.CientistaModel;

import javax.validation.constraints.Size;

public class RedeSocialDto {
    private CientistaModel cientista;
    @Size(max = 50)
    private String endereco;
    @Size(max = 1)
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
