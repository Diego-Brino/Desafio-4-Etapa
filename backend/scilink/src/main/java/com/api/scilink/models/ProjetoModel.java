package com.api.scilink.models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "TB_PROJETO")
public class ProjetoModel implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "projeto_sequence")
    @SequenceGenerator(name = "projeto_sequence", sequenceName = "SEQ_IDPROJETO", allocationSize = 1)
    private Integer id_projeto;
    @ManyToOne
    @JoinColumn(name = "id_cientista")
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

    public Integer getId_projeto() {
        return id_projeto;
    }
    public void setId_projeto(Integer id_projeto) {
        this.id_projeto = id_projeto;
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
