package com.api.scilink.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.validation.constraints.NotNull;
import java.util.Date;

public class ProjetoDto {
    /**
     * Nome do cientista
     */
    private String nome;

    /**
     * Cpf do cientista
     */
    private String cpf;

    /**
     * Data de nascimento do cientista
     */
    private Date dataNascimento;

    /**
     * E-mail do cientista
     */
    private String email;

    /**
     * E-mail alternativo do cientista
     */
    private String emailAlternativo;

    /**
     * Lattes do cientista
     */
    private String lattes;

    /**
     * Identificador do projeto
     */
    private Integer idProjeto;

    /**
     * Titulo do projeto
     */
    private String titulo;

    /**
     * Resumo do projeto
     */
    private String resumo;

    /**
     * Data de ínicio do projeto
     */
    @NotNull(message = "É obrigatório a inserção de uma data de ínicio!")
    @JsonFormat(pattern = "dd/MM/yyyy")
    private Date dataInicio;

    /**
     * Data de término do projeto
     */
    @NotNull(message = "É obrigatório a inserção de uma data de término!")
    @JsonFormat(pattern = "dd/MM/yyyy")
    private Date dataTermino;

    /**
     * Indica se o projeto é público ou não
     */
    @NotNull
    private Integer publico;

    //region Getters and Setters

    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }
    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public Date getDataNascimento() {
        return dataNascimento;
    }
    public void setDataNascimento(Date dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmailAlternativo() {
        return emailAlternativo;
    }
    public void setEmailAlternativo(String emailAlternativo) {
        this.emailAlternativo = emailAlternativo;
    }

    public String getLattes() {
        return lattes;
    }
    public void setLattes(String lattes) {
        this.lattes = lattes;
    }

    public Integer getIdProjeto() {
        return idProjeto;
    }
    public void setIdProjeto(Integer idProjeto) {
        this.idProjeto = idProjeto;
    }

    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getResumo() {
        return resumo;
    }
    public void setResumo(String resumo) {
        this.resumo = resumo;
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

    public Integer getPublico() {
        return publico;
    }
    public void setPublico(Integer publico) {
        this.publico = publico;
    }

    //endregion
}
