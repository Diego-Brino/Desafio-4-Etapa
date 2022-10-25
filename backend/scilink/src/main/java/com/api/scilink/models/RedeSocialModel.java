package com.api.scilink.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "TB_REDES_SOCIAIS")
public class RedeSocialModel implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "rede_social_sequence")
    @SequenceGenerator(name = "rede_social_sequence", sequenceName = "SEQ_IDREDESSOCIAIS", allocationSize = 1)
    private Integer id_rede_social;
    @ManyToOne
    @JoinColumn(name = "id_cientista",
                referencedColumnName = "id_cientista")
    private CientistaModel cientista;
    @Column(name = "end_rede_social", length = 50)
    private String endereco;
    @Column(name = "tip_rede_social", length = 1)
    private Character tipo;

    //region Getters and Setters

    public Integer getId_rede_social() {
        return id_rede_social;
    }
    public void setId_rede_social(Integer id_rede_social) {
        this.id_rede_social = id_rede_social;
    }

    public CientistaModel getCientista() {
        return cientista;
    }
    public void setCientista(CientistaModel cientista) {
        this.cientista = cientista;
    }

    public String getEndereco() {
        return endereco;
    }
    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public Character getTipo() {
        return tipo;
    }
    public void setTipo(Character tipo) {
        this.tipo = tipo;
    }

    //endregion
}
