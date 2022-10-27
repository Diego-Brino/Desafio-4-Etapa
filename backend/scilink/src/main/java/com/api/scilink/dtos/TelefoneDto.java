package com.api.scilink.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.Size;

public class TelefoneDto {
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Integer id_cientista;
    @Size(min = 2, max = 2)
    private Integer ddd;
    @Size(min = 10, max = 10)
    private String numero;

    //region Getters and Setters

    public Integer getId_cientista() {
        return id_cientista;
    }
    public void setId_cientista(Integer id_cientista) {
        this.id_cientista = id_cientista;
    }

    public Integer getDdd() {
        return ddd;
    }
    public void setDdd(Integer ddd) {
        this.ddd = ddd;
    }

    public String getNumero() {
        return numero;
    }
    public void setNumero(String numero) {
        this.numero = numero;
    }


    //endregion
}
