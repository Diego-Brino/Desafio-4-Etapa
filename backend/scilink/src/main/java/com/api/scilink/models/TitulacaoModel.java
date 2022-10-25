package com.api.scilink.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "TB_TITULACAO")
public class TitulacaoModel implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "titulacao_sequence")
    @SequenceGenerator(name = "titulacao_sequence", sequenceName = "SEQ_IDTITULACAO", allocationSize = 1)
    private Integer id_titulacao;
    @Column(name = "nom_titulacao", length = 25, nullable = false)
    private String nome;

    //region Getters and Setters

    public Integer getId_titulacao() {
        return id_titulacao;
    }
    public void setId_titulacao(Integer id_titulacao) {
        this.id_titulacao = id_titulacao;
    }

    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }

    //endregion
}
