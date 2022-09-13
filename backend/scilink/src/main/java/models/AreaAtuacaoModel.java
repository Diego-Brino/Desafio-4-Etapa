package models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.UUID;

@Entity
@Table(name = "TB_AREA_ATUACAO")
public class AreaAtuacaoModel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id_area_atuacao;

    @Column(length = 25, nullable = false)
    private String nom_area_atuacao;

    //region Getters and Setters

    public UUID getId_area_atuacao() {
        return id_area_atuacao;
    }
    public void setId_area_atuacao(UUID id_area_atuacao) {
        this.id_area_atuacao = id_area_atuacao;
    }

    public String getNom_area_atuacao() {
        return nom_area_atuacao;
    }
    public void setNom_area_atuacao(String nom_area_atuacao) {
        this.nom_area_atuacao = nom_area_atuacao;
    }

    //endregion
}
