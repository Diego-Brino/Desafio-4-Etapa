package com.api.scilink.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "TB_TELEFONE")
public class TelefoneModel implements Serializable {
    private static final long serialVersionUID = 1L;
    @EmbeddedId
    private TelefoneId telefoneId;
    @ManyToOne
    @MapsId("idCientista")
    @JoinColumn(name = "idCientista",
                referencedColumnName = "id_cientista")
    private CientistaModel cientista;

    //region Constructors

    public TelefoneModel() {
    }
    public TelefoneModel(TelefoneId telefoneId, CientistaModel cientista) {
        this.telefoneId = telefoneId;
        this.cientista = cientista;
    }

    //endregion

    //region Getters and Setters

    public TelefoneId getTelefoneId() {
        return telefoneId;
    }
    public void setTelefoneId(TelefoneId telefoneId) {
        this.telefoneId = telefoneId;
    }

    public CientistaModel getCientista() {
        return cientista;
    }
    public void setCientista(CientistaModel cientista) {
        this.cientista = cientista;
    }

    //endregion
}
