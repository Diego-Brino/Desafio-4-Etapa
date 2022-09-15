package com.api.scilink.models;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;
import java.util.UUID;

@Embeddable
public class AreaAtuacaoCientistaId implements Serializable {

    private static final long serialVersionUID = 1L;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AreaAtuacaoCientistaId that = (AreaAtuacaoCientistaId) o;
        return Objects.equals(id_cientista, that.id_cientista) && Objects.equals(id_area_atuacao, that.id_area_atuacao);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id_cientista, id_area_atuacao);
    }

    //endregion
}
