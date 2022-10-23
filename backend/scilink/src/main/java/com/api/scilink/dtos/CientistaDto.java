package com.api.scilink.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.hibernate.validator.constraints.br.CPF;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

public class CientistaDto {
    @Size(max = 50)
    private String nomCientista;
    @NotBlank(message = "O CPF é obrigatório!")
    @Size(max = 11, message = "Por favor, digite um cpf válido!")
    @CPF(message = "Por favor, digite um cpf válido!")
    private String cpfCientista;
    @JsonFormat(pattern = "dd/MM/yyyy")
    private Date dtnCientista;
    @NotBlank(message = "O e-mail é obrigatório!")
    @Email(message = "Por favor, digite um e-mail válido!")
    @Size(max = 50, message = "O e-mail deve conter no máximo 50 caracteres!")
    private String emailCientista;
    @Email(message = "Por favor, digite um e-mail válido!")
    @Size(max = 50, message = "O e-mail deve conter no máximo 50 caracteres!")
    private String emailAlternativoCientista;
    @NotBlank(message = "O lattes é obrigatório!")
    @Size(max = 50, message = "O lattes deve conter no máximo 50 caracteres!")
    private String lattesCientista;
    @NotBlank(message = "A Senha é obrigatória!")
    @Size(max = 10, message = "A senha deve conter no máximo 10 caracteres!")
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
