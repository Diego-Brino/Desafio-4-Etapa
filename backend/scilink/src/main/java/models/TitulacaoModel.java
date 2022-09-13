package models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.UUID;

@Entity
@Table(name = "TB_TITULACAO")
public class TitulacaoModel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id_titulacao;
    @Column(length = 25, nullable = false)
    private String nom_titulacao;

    //region Getters and Setters

    public UUID getId_titulacao() {
        return id_titulacao;
    }
    public void setId_titulacao(UUID id_titulacao) {
        this.id_titulacao = id_titulacao;
    }

    public String getNom_titulacao() {
        return nom_titulacao;
    }
    public void setNom_titulacao(String nom_titulacao) {
        this.nom_titulacao = nom_titulacao;
    }

    //endregion
}
