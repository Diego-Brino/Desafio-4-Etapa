package com.api.scilink.models;

import org.hibernate.validator.constraints.br.CPF;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "TB_CIENTISTA")
public class CientistaModel implements Serializable, UserDetails {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "cientista_sequence")
    @SequenceGenerator(name = "cientista_sequence", sequenceName = "SEQ_IDCIENTISTA", allocationSize = 1)
    private Integer id_cientista;
    @Column(name = "nom_cientista",length = 50)
    private String nome;
    @Column(name = "cpf_cientista", nullable = false, length = 11, unique = true)
    @CPF
    private String cpf;
    @Column(name = "dtn_cientista")
    private Date dataNascimento;
    @Column(name = "email_cientista", nullable = false, length = 50)
    @Email
    private String email;
    @Column(name = "email_alternativo_cientista", length = 50)
    private String emailAlternativo;
    @Column(name = "lattes_cientista", nullable = false, length = 50)
    private String lattes;
    @Column(name = "snh_cientista", nullable = false, length = 10)
    private String senha;
    @OneToMany(mappedBy = "cientista")
    private List<ProjetoModel> projetos;
    @OneToMany(mappedBy = "cientista")
    private List<TelefoneModel> telefones;
    @OneToMany(mappedBy = "cientista")
    private List<RedeSocialModel> redesSociais;
    @OneToMany(mappedBy = "cientista")
    private List<AreaAtuacaoCientistaModel> areasAtuacao;
    @OneToMany(mappedBy = "cientista")
    private List<FormacaoModel> formacoes;

    //region Methods

    public CientistaModel () {

    }

    public CientistaModel (String nome, String cpf, String senha) {
        this.nome = nome;
        this.cpf = cpf;
        this.senha = senha;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return null;
    }

    @Override
    public String getUsername() {
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }

    //endregion

    //region Getters and Setters

    public Integer getId_cientista() {
        return id_cientista;
    }
    public void setId_cientista(Integer id_cientista) {
        this.id_cientista = id_cientista;
    }

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

    public List<ProjetoModel> getProjetos() {
        return projetos;
    }
    public void setProjetos(List<ProjetoModel> projetos) {
        this.projetos = projetos;
    }

    public List<TelefoneModel> getTelefones() {
        return telefones;
    }
    public void setTelefones(List<TelefoneModel> telefones) {
        this.telefones = telefones;
    }

    public List<RedeSocialModel> getRedesSociais() {
        return redesSociais;
    }
    public void setRedesSociais(List<RedeSocialModel> redesSociais) {
        this.redesSociais = redesSociais;
    }

    public List<AreaAtuacaoCientistaModel> getAreasAtuacao() {
        return areasAtuacao;
    }
    public void setAreasAtuacao(List<AreaAtuacaoCientistaModel> areasAtuacao) {
        this.areasAtuacao = areasAtuacao;
    }

    public List<FormacaoModel> getFormacoes() {
        return formacoes;
    }
    public void setFormacoes(List<FormacaoModel> formacoes) {
        this.formacoes = formacoes;
    }

    //endregion
}
