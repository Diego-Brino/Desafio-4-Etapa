package com.api.scilink.models;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class TelefoneId implements Serializable {
    private static final long serialVersionUID = 1L;
    @Column(name = "id_cientista")
    private Integer idCientista;
    @Column(name = "ddd_telefone",length = 2)
    private Integer ddd;
    @Column(name = "num_telefone", length = 10)
    private String numero;

    //region Getters and Setters

    public Integer getIdCientista() {
        return idCientista;
    }
    public void setIdCientista(Integer idCientista) {
        this.idCientista = idCientista;
    }

    public Integer getDdd() {
        return ddd;
    }
    public void setDdd(Integer ddd) {
        this.ddd = ddd;
    }

    public String getNumero() {
        return numero;
    }
    public void setNumero(String numero) {
        this.numero = numero;
    }

    //endregion

    //region constructors

    public TelefoneId() {

    }
    public TelefoneId (Integer idCientista, Integer ddd, String numero) {
        this.idCientista = idCientista;
        this.ddd = ddd;
        this.numero = numero;
    }

    //endregion

    //region methods

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TelefoneId that = (TelefoneId) o;
        return Objects.equals(idCientista, that.idCientista) && Objects.equals(ddd, that.ddd) && Objects.equals(numero, that.numero);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idCientista, ddd, numero);
    }

    //endregion
}
