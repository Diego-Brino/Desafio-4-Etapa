package models;

import org.hibernate.validator.constraints.br.CPF;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "TB_CIENTISTA")
public class CientistaModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id_cientista;
    @Column(length = 50)
    private String nom_cientista;
    @Column(nullable = false, length = 11, unique = true)
    @CPF
    private String cpf_cientista;
    @Column
    private Date dtn_cientista;
    @Column(nullable = false, length = 50)
    @Email
    private String email_cientista;
    @Column(length = 50)
    private String email_alternativo_cientista;
    @Column(nullable = false, length = 50)
    private String lattes_cientista;
    @Column(nullable = false, length = 10)
    private String snh_cientista;

    //region Getters and Setters

    public UUID getId_cientista() {
        return id_cientista;
    }
    public void setId_cientista(UUID id_cientista) {
        this.id_cientista = id_cientista;
    }

    public String getNom_cientista() {
        return nom_cientista;
    }
    public void setNom_cientista(String nom_cientista) {
        this.nom_cientista = nom_cientista;
    }

    public String getCpf_cientista() {
        return cpf_cientista;
    }
    public void setCpf_cientista(String cpf_cientista) {
        this.cpf_cientista = cpf_cientista;
    }

    public Date getDtn_cientista() {
        return dtn_cientista;
    }
    public void setDtn_cientista(Date dtn_cientista) {
        this.dtn_cientista = dtn_cientista;
    }

    public String getEmail_cientista() {
        return email_cientista;
    }
    public void setEmail_cientista(String email_cientista) {
        this.email_cientista = email_cientista;
    }

    public String getEmail_alternativo_cientista() {
        return email_alternativo_cientista;
    }
    public void setEmail_alternativo_cientista(String email_alternativo_cientista) {
        this.email_alternativo_cientista = email_alternativo_cientista;
    }

    public String getLattes_cientista() {
        return lattes_cientista;
    }
    public void setLattes_cientista(String lattes_cientista) {
        this.lattes_cientista = lattes_cientista;
    }

    public String getSnh_cientista() {
        return snh_cientista;
    }
    public void setSnh_cientista(String snh_cientista) {
        this.snh_cientista = snh_cientista;
    }

    //endregion
}
