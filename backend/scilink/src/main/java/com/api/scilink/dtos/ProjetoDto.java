package com.api.scilink.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.validation.constraints.NotNull;
import java.util.Date;

public class ProjetoDto {
    private String nomCientista;
    private String cpfCientista;
    private Date dtnCientista;
    private String emailCientista;
    private String emailAlternativoCientista;
    private String lattesCientista;
    private String titProjeto;
    private String resProjeto;
    @JsonFormat(pattern = "dd/MM/yyyy")
    private Date dtiProjeto;
    @JsonFormat(pattern = "dd/MM/yyyy")
    private Date dttProjeto;
    @NotNull
    private Integer pubProjeto;

    //region Getters and Setters

    public String getNomCientista() {
        return nomCientista;
    }
    public void setNomCientista(String nomCientista) {
        this.nomCientista = nomCientista;
    }

    public String getCpfCientista() {
        return cpfCientista;
    }
    public void setCpfCientista(String cpfCientista) {
        this.cpfCientista = cpfCientista;
    }

    public Date getDtnCientista() {
        return dtnCientista;
    }
    public void setDtnCientista(Date dtnCientista) {
        this.dtnCientista = dtnCientista;
    }

    public String getEmailCientista() {
        return emailCientista;
    }
    public void setEmailCientista(String emailCientista) {
        this.emailCientista = emailCientista;
    }

    public String getEmailAlternativoCientista() {
        return emailAlternativoCientista;
    }
    public void setEmailAlternativoCientista(String emailAlternativoCientista) {
        this.emailAlternativoCientista = emailAlternativoCientista;
    }

    public String getLattesCientista() {
        return lattesCientista;
    }
    public void setLattesCientista(String lattesCientista) {
        this.lattesCientista = lattesCientista;
    }

    public String getTitProjeto() {
        return titProjeto;
    }
    public void setTitProjeto(String titProjeto) {
        this.titProjeto = titProjeto;
    }

    public String getResProjeto() {
        return resProjeto;
    }
    public void setResProjeto(String resProjeto) {
        this.resProjeto = resProjeto;
    }

    public Date getDtiProjeto() {
        return dtiProjeto;
    }
    public void setDtiProjeto(Date dtiProjeto) {
        this.dtiProjeto = dtiProjeto;
    }

    public Date getDttProjeto() {
        return dttProjeto;
    }
    public void setDttProjeto(Date dttProjeto) {
        this.dttProjeto = dttProjeto;
    }

    public Integer getPubProjeto() {
        return pubProjeto;
    }
    public void setPubProjeto(Integer pubProjeto) {
        this.pubProjeto = pubProjeto;
    }

    //endregion
}
