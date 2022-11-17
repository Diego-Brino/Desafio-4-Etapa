package com.api.scilink.models;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class FormacaoId implements Serializable {
    private static final long serialVersionUID = 1L;
    @Column(name = "id_cientista")
    private Integer idCientista;
    @Column(name = "id_titulacao")
    private Integer idTitulacao;

    //region Getters and Setters

    public Integer getIdCientista() {
        return idCientista;
    }
    public void setIdCientista(Integer idCientista) {
        this.idCientista = idCientista;
    }

    public Integer getIdTitulacao() {
        return idTitulacao;
    }
    public void setIdTitulacao(Integer idTitulacao) {
        this.idTitulacao = idTitulacao;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        FormacaoId that = (FormacaoId) o;
        return Objects.equals(idCientista, that.idCientista) && Objects.equals(idTitulacao, that.idTitulacao);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idCientista, idTitulacao);
    }

    //endregion
}
