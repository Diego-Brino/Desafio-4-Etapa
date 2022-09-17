package com.api.scilink.models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.UUID;

@Entity
@Table(name = "TB_REDE_SOCIAL")
public class RedeSocialModel implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id_rede_social;
    @ManyToOne
    @JoinColumn(name = "id_cientista",
                referencedColumnName = "id_cientista")
    private CientistaModel cientista;
    @Column(name = "end_rede_social", length = 50)
    private String endRedeSocial;
    @Column(name = "tip_rede_social", length = 1)
    private Character tipRedeSocial;

    //region Getters and Setters

    public UUID getId_rede_social() {
        return id_rede_social;
    }
    public void setId_rede_social(UUID id_rede_social) {
        this.id_rede_social = id_rede_social;
    }

    public CientistaModel getCientista() {
        return cientista;
    }
    public void setCientista(CientistaModel cientista) {
        this.cientista = cientista;
    }

    public String getEndRedeSocial() {
        return endRedeSocial;
    }
    public void setEndRedeSocial(String endRedeSocial) {
        this.endRedeSocial = endRedeSocial;
    }

    public Character getTipRedeSocial() {
        return tipRedeSocial;
    }
    public void setTipRedeSocial(Character tipRedeSocial) {
        this.tipRedeSocial = tipRedeSocial;
    }

    //endregion
}
