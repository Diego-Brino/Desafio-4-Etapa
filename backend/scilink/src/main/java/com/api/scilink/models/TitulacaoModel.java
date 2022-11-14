package com.api.scilink.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "TB_TITULACAO")
public class TitulacaoModel implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Column(name = "id_titulacao")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "titulacao_sequence")
    @SequenceGenerator(name = "titulacao_sequence", sequenceName = "SEQ_IDTITULACAO", allocationSize = 1)
    private Integer idTitulacao;
    @Column(name = "nom_titulacao", length = 25, nullable = false)
    private String nome;

    //region Getters and Setters

    public Integer getIdTitulacao() {
        return idTitulacao;
    }
    public void setIdTitulacao(Integer idTitulacao) {
        this.idTitulacao = idTitulacao;
    }

    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }

    //endregion
}
