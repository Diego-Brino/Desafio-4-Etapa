package com.api.scilink.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;

public class FormacaoDto {
    private Integer idTitulacao;

    private Integer idCientista;

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

    public Integer getIdTitulacao() {
        return idTitulacao;
    }
    public void setIdTitulacao(Integer idTitulacao) {
        this.idTitulacao = idTitulacao;
    }

    public Integer getIdCientista() {
        return idCientista;
    }
    public void setIdCientista(Integer idCientista) {
        this.idCientista = idCientista;
    }

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
