package com.api.scilink.models;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class AreaAtuacaoCientistaId implements Serializable {
    private static final long serialVersionUID = 1L;
    @Column(name = "id_cientista")
    private Integer idCientista;
    @Column(name = "id_area_atuacao")
    private Integer idAreaAtuacao;

    //region Getters and Setters

    public Integer getIdCientista() {
        return idCientista;
    }
    public void setIdCientista(Integer idCientista) {
        this.idCientista = idCientista;
    }

    public Integer getIdAreaAtuacao() {
        return idAreaAtuacao;
    }
    public void setIdAreaAtuacao(Integer idAreaAtuacao) {
        this.idAreaAtuacao = idAreaAtuacao;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AreaAtuacaoCientistaId that = (AreaAtuacaoCientistaId) o;
        return Objects.equals(idCientista, that.idCientista) && Objects.equals(idAreaAtuacao, that.idAreaAtuacao);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idCientista, idAreaAtuacao);
    }

    //endregion
}
