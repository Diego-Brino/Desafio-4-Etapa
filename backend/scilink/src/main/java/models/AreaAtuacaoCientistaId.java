package models;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.UUID;

@Embeddable
public class AreaAtuacaoCientistaId implements Serializable {
    @Column
    private UUID id_cientista;
    @Column
    private UUID id_area_atuacao;

    //region Getters and Setters

    public UUID getId_cientista() {
        return id_cientista;
    }
    public void setId_cientista(UUID id_cientista) {
        this.id_cientista = id_cientista;
    }

    public UUID getId_area_atuacao() {
        return id_area_atuacao;
    }
    public void setId_area_atuacao(UUID id_area_atuacao) {
        this.id_area_atuacao = id_area_atuacao;
    }


    //endregion
}
