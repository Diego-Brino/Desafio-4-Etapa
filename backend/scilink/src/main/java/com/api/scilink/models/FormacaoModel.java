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
    @MapsId("id_cientista")
    @JoinColumn(name = "id_cientista",
                referencedColumnName = "id_cientista")
    private CientistaModel cientista;
    @ManyToOne
    @MapsId("id_titulacao")
    @JoinColumn(name = "id_titulacao",
                referencedColumnName = "id_titulacao")
    private TitulacaoModel titulacao;

    //TODO - Criar tabela curso e sincronizar o ID.
    @Column(name = "dti_formacao")
    private Date dataInicio;
    @Column(name = "dtt_formacao")
    private Date dataTermino;

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
