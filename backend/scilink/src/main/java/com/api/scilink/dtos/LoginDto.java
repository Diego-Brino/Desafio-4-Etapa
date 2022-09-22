package com.api.scilink.dtos;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class LoginDto {
    @NotBlank(message = "O CPF é obrigatório!")
    @Size(max = 11, message = "Por favor, digite um cpf válido!")
    private String cpfCientista;
    @NotBlank(message = "A Senha é obrigatória!")
    @Size(max = 10, message = "A senha deve conter apenas 10 caracteres!")
    private String snhCientista;

    //region Constructors

    public LoginDto(String cpfCientista, String snhCientista) {
        this.cpfCientista = cpfCientista;
        this.snhCientista = snhCientista;
    }

    public LoginDto() {

    }

    //endregion

    //region Getters and Setters

    public String getCpfCientista() {
        return cpfCientista;
    }
    public void setCpfCientista(String cpfCientista) {
        this.cpfCientista = cpfCientista;
    }

    public String getSnhCientista() {
        return snhCientista;
    }
    public void setSnhCientista(String snhCientista) {
        this.snhCientista = snhCientista;
    }


    //endregion
}
