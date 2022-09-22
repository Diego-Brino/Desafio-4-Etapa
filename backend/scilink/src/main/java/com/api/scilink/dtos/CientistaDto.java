package com.api.scilink.dtos;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

public class CientistaDto {
    @Size(max = 50)
    private String nomCientista;
    @NotBlank
    @Size(max = 11)
    private String cpfCientista;
    private Date dtnCientista;
    @NotBlank
    @Size(max = 50)
    private String emailCientista;
    @Size(max = 50)
    private String emailAlternativoCientista;
    @NotBlank
    @Size(max = 50)
    private String lattesCientista;
    @NotBlank
    @Size(max = 10)
    private String snhCientista;

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

    public String getSnhCientista() {
        return snhCientista;
    }
    public void setSnhCientista(String snhCientista) {
        this.snhCientista = snhCientista;
    }

    //endregion
}
