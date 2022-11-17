package com.api.scilink.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "TB_REDES_SOCIAIS")
public class RedeSocialModel implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Column(name = "id_rede_social")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "rede_social_sequence")
    @SequenceGenerator(name = "rede_social_sequence", sequenceName = "SEQ_IDREDESSOCIAIS", allocationSize = 1)
    private Integer idRedeSocial;
    @ManyToOne
    @JoinColumn(name = "idCientista",
                referencedColumnName = "id_cientista")
    private CientistaModel cientista;
    @Column(name = "end_rede_social", length = 50)
    private String endereco;
    @Column(name = "tip_rede_social", length = 1)
    private Character tipo;

    //region Constructors

    public RedeSocialModel() { }

    public RedeSocialModel(CientistaModel cientista, String endereco, Character tipo) {
        this.cientista = cientista;
        this.endereco = endereco;
        this.tipo = tipo;
    }

    //endregion

    //region Getters and Setters

    public Integer getIdRedeSocial() {
        return idRedeSocial;
    }
    public void setIdRedeSocial(Integer idRedeSocial) {
        this.idRedeSocial = idRedeSocial;
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
