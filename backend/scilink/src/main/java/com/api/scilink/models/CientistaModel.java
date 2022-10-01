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
import java.util.UUID;

@Entity
@Table(name = "TB_CIENTISTA")
public class CientistaModel implements Serializable, UserDetails {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "cientista_sequence")
    @SequenceGenerator(name = "cientista_sequence", sequenceName = "SEQ_IDCIENTISTA", allocationSize = 1)
    private Integer id_cientista;
    @Column(name = "nom_cientista",length = 50)
    private String nomCientista;
    @Column(name = "cpf_cientista", nullable = false, length = 11, unique = true)
    @CPF
    private String cpfCientista;
    @Column(name = "dtn_cientista")
    private Date dtnCientista;
    @Column(name = "email_cientista", nullable = false, length = 50)
    @Email
    private String emailCientista;
    @Column(name = "email_alternativo_cientista", length = 50)
    private String emailAlternativoCientista;
    @Column(name = "lattes_cientista", nullable = false, length = 50)
    private String lattesCientista;
    @Column(name = "snh_cientista", nullable = false, length = 10)
    private String snhCientista;
    @OneToMany(mappedBy = "cientista")
    private List<ProjetoModel> projeto;
    @OneToMany(mappedBy = "cientista")
    private List<TelefoneModel> telefone;
    @OneToMany(mappedBy = "cientista")
    private List<RedeSocialModel> redeSocial;
    @OneToMany(mappedBy = "cientista")
    private List<AreaAtuacaoCientistaModel> areaAtuacaoCientista;
    @OneToMany(mappedBy = "cientista")
    private List<FormacaoModel> formacao;

    //region Methods

    public CientistaModel () {

    }

    public CientistaModel (String nomCientista, String cpfCientista, String snhCientista) {
        this.nomCientista = nomCientista;
        this.cpfCientista = cpfCientista;
        this.snhCientista = snhCientista;
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

    public List<ProjetoModel> getProjeto() {
        return projeto;
    }
    public void setProjeto(List<ProjetoModel> projeto) {
        this.projeto = projeto;
    }

    public List<TelefoneModel> getTelefone() {
        return telefone;
    }
    public void setTelefone(List<TelefoneModel> telefone) {
        this.telefone = telefone;
    }

    public List<RedeSocialModel> getRedeSocial() {
        return redeSocial;
    }
    public void setRedeSocial(List<RedeSocialModel> redeSocial) {
        this.redeSocial = redeSocial;
    }

    public List<AreaAtuacaoCientistaModel> getAreaAtuacaoCientista() {
        return areaAtuacaoCientista;
    }
    public void setAreaAtuacaoCientista(List<AreaAtuacaoCientistaModel> areaAtuacaoCientista) {
        this.areaAtuacaoCientista = areaAtuacaoCientista;
    }

    public List<FormacaoModel> getFormacao() {
        return formacao;
    }
    public void setFormacao(List<FormacaoModel> formacao) {
        this.formacao = formacao;
    }

    //endregion
}
