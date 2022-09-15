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
    @MapsId("id_cientista")
    @JoinColumn(name = "id_cientista",
                referencedColumnName = "id_cientista")
    private CientistaModel cientista;

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
