package com.api.scilink.models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.UUID;

@Entity
@Table(name = "TB_AREA_ATUACAO")
public class AreaAtuacaoModel implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id_area_atuacao;

    @Column(name = "nom_area_atuacao", length = 25, nullable = false)
    private String nomAreaAtuacao;

    //region Getters and Setters

    public UUID getId_area_atuacao() {
        return id_area_atuacao;
    }
    public void setId_area_atuacao(UUID id_area_atuacao) {
        this.id_area_atuacao = id_area_atuacao;
    }

    public String getNomAreaAtuacao() {
        return nomAreaAtuacao;
    }
    public void setNomAreaAtuacao(String nomAreaAtuacao) {
        this.nomAreaAtuacao = nomAreaAtuacao;
    }

    //endregion
}
