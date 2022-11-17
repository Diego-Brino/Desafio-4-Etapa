package com.api.scilink.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "TB_AREA_ATUACAO")
public class AreaAtuacaoModel implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Column(name = "id_area_atuacao")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "area_atuacao_sequence")
    @SequenceGenerator(name = "area_atuacao_sequence", sequenceName = "SEQ_IDAREAATUACAO", allocationSize = 1)
    private Integer idAreaAtuacao;

    @Column(name = "nom_area_atuacao", length = 25, nullable = false)
    private String nome;

    //region Getters and Setters

    public Integer getIdAreaAtuacao() {
        return idAreaAtuacao;
    }
    public void setIdAreaAtuacao(Integer idAreaAtuacao) {
        this.idAreaAtuacao = idAreaAtuacao;
    }

    public String getNome() {
        return nome;
    }
    public void setNome(String nomAreaAtuacao) {
        this.nome = nomAreaAtuacao;
    }

    //endregion
}
