package com.api.scilink.models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.UUID;

@Entity
@Table(name = "TB_TITULACAO")
public class TitulacaoModel implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id_titulacao;
    @Column(name = "nom_titulacao", length = 25, nullable = false)
    private String nomTitulacao;

    //region Getters and Setters

    public UUID getId_titulacao() {
        return id_titulacao;
    }
    public void setId_titulacao(UUID id_titulacao) {
        this.id_titulacao = id_titulacao;
    }

    public String getNomTitulacao() {
        return nomTitulacao;
    }
    public void setNomTitulacao(String nomTitulacao) {
        this.nomTitulacao = nomTitulacao;
    }

    //endregion
}
