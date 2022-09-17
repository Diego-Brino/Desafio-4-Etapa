package com.api.scilink.dtos;

public class CientistaDto {
    private String nomCientista;
    private String cpfCientista;
    private String dtnCientista;
    private String emailCientista;
    private String emailAlternativoCientista;
    private String lattesCientista;
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

    public String getDtnCientista() {
        return dtnCientista;
    }
    public void setDtnCientista(String dtnCientista) {
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
