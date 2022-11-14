package com.api.scilink.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class TelefoneDto {
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Integer idCientista;

    @NotNull(message = "É obrigatório inserir o ddd do telefone")
    @Size(min = 2, max = 2, message = "O ddd deve possuir 2 caracteres")
    private Integer ddd;

    @NotBlank(message = "É obrigatório inserir o número do telefone!")
    @Size(min = 10, max = 10, message = "O número deve possuir 10 caracteres")
    private String numero;

    //region Getters and Setters

    public Integer getIdCientista() {
        return idCientista;
    }
    public void setIdCientista(Integer idCientista) {
        this.idCientista = idCientista;
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
