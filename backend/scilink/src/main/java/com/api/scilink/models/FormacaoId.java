package com.api.scilink.models;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;
import java.util.UUID;

@Embeddable
public class FormacaoId implements Serializable {
    private static final long serialVersionUID = 1L;
    @Column
    private Integer id_cientista;
    @Column
    private Integer id_titulacao;

    //region Getters and Setters

    public Integer getId_cientista() {
        return id_cientista;
    }
    public void setId_cientista(Integer id_cientista) {
        this.id_cientista = id_cientista;
    }

    public Integer getId_titulacao() {
        return id_titulacao;
    }
    public void setId_titulacao(Integer id_titulacao) {
        this.id_titulacao = id_titulacao;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        FormacaoId that = (FormacaoId) o;
        return Objects.equals(id_cientista, that.id_cientista) && Objects.equals(id_titulacao, that.id_titulacao);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id_cientista, id_titulacao);
    }

    //endregion
}
