package com.api.scilink.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.br.CPF;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.List;

public class CientistaDto {
    @Size(max = 50)
    private String nome;
    @NotBlank(message = "O CPF é obrigatório!")
    @Size(max = 11, message = "Por favor, digite um cpf válido!")
    @CPF(message = "Por favor, digite um cpf válido!")
    private String cpf;
    @JsonFormat(pattern = "dd/MM/yyyy")
    private Date dataNascimento;
    @NotBlank(message = "O e-mail é obrigatório!")
    @Email(message = "Por favor, digite um e-mail válido!")
    @Size(max = 50, message = "O e-mail deve conter no máximo 50 caracteres!")
    private String email;
    @Email(message = "Por favor, digite um e-mail válido!")
    @Size(max = 50, message = "O e-mail deve conter no máximo 50 caracteres!")
    private String emailAlternativo;
    @NotBlank(message = "O lattes é obrigatório!")
    @Size(max = 50, message = "O lattes deve conter no máximo 50 caracteres!")
    private String lattes;
    @NotBlank(message = "A Senha é obrigatória!")
    @Size(max = 10, message = "A senha deve conter no máximo 10 caracteres!")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String senha;

//    private List<ProjetoDto> projetos;
    private List<TelefoneDto> telefones;
    private List<RedeSocialDto> redesSociais;

//    private List<AreaAtuacaoCientistaDto> areasAtuacao;

//    private List<FormacaoDto> formacoes;

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

    public String getSenha() {
        return senha;
    }
    public void setSenha(String senha) {
        this.senha = senha;
    }

    public List<TelefoneDto> getTelefones() {
        return telefones;
    }
    public void setTelefones(List<TelefoneDto> telefones) {
        this.telefones = telefones;
    }

    public List<RedeSocialDto> getRedesSociais() {
        return redesSociais;
    }
    public void setRedesSociais(List<RedeSocialDto> redesSociais) {
        this.redesSociais = redesSociais;
    }

    //endregion
}
