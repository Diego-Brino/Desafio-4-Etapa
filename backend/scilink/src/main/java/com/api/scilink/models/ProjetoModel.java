package com.api.scilink.models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "TB_PROJETO")
public class ProjetoModel implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id_projeto;
    @ManyToOne
    @JoinColumn(name = "id_cientista",
                referencedColumnName = "id_cientista")
    private CientistaModel cientista;
    @Column(name = "tit_projeto", length = 50)
    private String titProjeto;
    @Column(name = "res_projeto", length = 250)
    private String resProjeto;
    @Column(name = "dti_projeto")
    private Date dtiProjeto;
    @Column(name = "dtt_projeto")
    private Date dttProjeto;
    @Column(name = "pub_projeto", nullable = false)
    private Boolean pubProjeto;

    //region Getters and Setters

    public UUID getId_projeto() {
        return id_projeto;
    }
    public void setId_projeto(UUID id_projeto) {
        this.id_projeto = id_projeto;
    }

    public CientistaModel getCientista() {
        return cientista;
    }
    public void setCientista(CientistaModel cientista) {
        this.cientista = cientista;
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

    public Boolean getPubProjeto() {
        return pubProjeto;
    }
    public void setPubProjeto(Boolean pubProjeto) {
        this.pubProjeto = pubProjeto;
    }

    //endregion
}
