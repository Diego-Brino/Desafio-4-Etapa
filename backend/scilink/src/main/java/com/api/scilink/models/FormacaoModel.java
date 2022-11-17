package com.api.scilink.models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "TB_FORMACAO")
public class FormacaoModel implements Serializable {
    private static final long serialVersionUID = 1L;
    @EmbeddedId
    private FormacaoId formacaoId;
    @ManyToOne
    @MapsId("idCientista")
    @JoinColumn(name = "idCientista",
                referencedColumnName = "id_cientista")
    private CientistaModel cientista;
    @ManyToOne
    @MapsId("idTitulacao")
    @JoinColumn(name = "idTitulacao",
                referencedColumnName = "id_titulacao")
    private TitulacaoModel titulacao;
    @Column(name = "dti_formacao")
    private Date dataInicio;
    @Column(name = "dtt_formacao")
    private Date dataTermino;

    //region Constructors

    public FormacaoModel() {
    }

    public FormacaoModel(FormacaoId formacaoId, CientistaModel cientista, TitulacaoModel titulacao, Date dataInicio, Date dataTermino) {
        this.formacaoId = formacaoId;
        this.cientista = cientista;
        this.titulacao = titulacao;
        this.dataInicio = dataInicio;
        this.dataTermino = dataTermino;
    }

    //endregion

    //region Getters and Setters

    public FormacaoId getFormacaoId() {
        return formacaoId;
    }
    public void setFormacaoId(FormacaoId formacaoId) {
        this.formacaoId = formacaoId;
    }

    public CientistaModel getCientista() {
        return cientista;
    }
    public void setCientista(CientistaModel cientista) {
        this.cientista = cientista;
    }

    public TitulacaoModel getTitulacao() {
        return titulacao;
    }
    public void setTitulacao(TitulacaoModel titulacao) {
        this.titulacao = titulacao;
    }

    public Date getDataInicio() {
        return dataInicio;
    }
    public void setDataInicio(Date dtiFormacao) {
        this.dataInicio = dtiFormacao;
    }

    public Date getDataTermino() {
        return dataTermino;
    }
    public void setDataTermino(Date dttFormacao) {
        this.dataTermino = dttFormacao;
    }

    //endregion
}
