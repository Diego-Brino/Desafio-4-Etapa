package com.api.scilink.dtos;

import javax.validation.constraints.Size;

public class TelefoneDto {
    @Size(min = 2, max = 2)
    private Integer ddd;
    @Size(min = 10, max = 10)
    private String numero;

    //region Getters and Setters

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
