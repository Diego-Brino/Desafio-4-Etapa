package com.api.scilink.models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "TB_PROJETO")
public class ProjetoModel implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Column(name = "id_projeto")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "projeto_sequence")
    @SequenceGenerator(name = "projeto_sequence", sequenceName = "SEQ_IDPROJETO", allocationSize = 1)
    private Integer idProjeto;
    @ManyToOne
    @JoinColumn(name = "idCientista")
    private CientistaModel cientista;
    @Column(name = "tit_projeto", length = 50)
    private String titulo;
    @Column(name = "res_projeto", length = 250)
    private String resumo;
    @Column(name = "dti_projeto")
    private Date dataInicio;
    @Column(name = "dtt_projeto")
    private Date dataTermino;
    @Column(name = "pub_projeto", nullable = false)
    private Integer publico;

    //region Getters and Setters

    public Integer getIdProjeto() {
        return idProjeto;
    }
    public void setIdProjeto(Integer idProjeto) {
        this.idProjeto = idProjeto;
    }

    public CientistaModel getCientista() {
        return cientista;
    }
    public void setCientista(CientistaModel cientista) {
        this.cientista = cientista;
    }

    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getResumo() {
        return resumo;
    }
    public void setResumo(String resumo) {
        this.resumo = resumo;
    }

    public Date getDataInicio() {
        return dataInicio;
    }
    public void setDataInicio(Date dataInicio) {
        this.dataInicio = dataInicio;
    }

    public Date getDataTermino() {
        return dataTermino;
    }
    public void setDataTermino(Date dataTermino) {
        this.dataTermino = dataTermino;
    }

    public Integer getPublico() {
        return publico;
    }
    public void setPublico(Integer publico) {
        this.publico = publico;
    }

    //endregion
}
