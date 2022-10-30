package com.api.scilink.dtos;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class LoginDto {
    @NotBlank(message = "O CPF é obrigatório!")
    @Size(max = 11, message = "Por favor, digite um cpf válido!")
    private String cpf;
    @NotBlank(message = "A Senha é obrigatória!")
    @Size(max = 10, message = "A senha deve conter apenas 10 caracteres!")
    private String senha;

    //region Constructors

    public LoginDto(String cpf, String senha) {
        this.cpf = cpf;
        this.senha = senha;
    }
    public LoginDto() {

    }

    //endregion

    //region Getters and Setters

    public String getCpf() {
        return cpf;
    }
    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getSenha() {
        return senha;
    }
    public void setSenha(String senha) {
        this.senha = senha;
    }


    //endregion
}
