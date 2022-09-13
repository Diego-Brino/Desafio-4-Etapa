package models;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.UUID;

@Embeddable
public class FormacaoId implements Serializable {

    @Column
    private UUID id_cientista;
    @Column
    private UUID id_titulacao;

    //region Getters and Setters

    public UUID getId_cientista() {
        return id_cientista;
    }
    public void setId_cientista(UUID id_cientista) {
        this.id_cientista = id_cientista;
    }

    public UUID getId_titulacao() {
        return id_titulacao;
    }
    public void setId_titulacao(UUID id_titulacao) {
        this.id_titulacao = id_titulacao;
    }


    //endregion
}
