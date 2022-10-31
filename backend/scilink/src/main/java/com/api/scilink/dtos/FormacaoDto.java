package com.api.scilink.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;

public class FormacaoDto {
    /**
     * Nome da titulação
     */
    @NotBlank(message = "É obrigatório a escolha da titulação!")
    private String nome;

    @NotNull(message = "É obrigatório a inserção de uma data de ínicio!")
    @JsonFormat(pattern = "dd/MM/yyyy")
    private Date dataInicio;

    @NotNull(message = "É obrigatório a inserção de uma data de término!")
    @JsonFormat(pattern = "dd/MM/yyyy")
    private Date dataTermino;

    //region Getters and Setters

    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }

    public Date getDataInicio() {
        return dataInicio;
    }
    public void setDataInicio(Date dataInicio) {
        this.dataInicio = dataInicio;
    }

    public Date getDataTermino() {
        return dataTermino;
    }
    public void setDataTermino(Date dataTermino) {
        this.dataTermino = dataTermino;
    }


    //endregion
}
