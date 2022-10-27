package com.api.scilink.models;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;
import java.util.UUID;

@Embeddable
public class TelefoneId implements Serializable {
    private static final long serialVersionUID = 1L;
    @Column
    private Integer id_cientista;
    @Column(name = "ddd_telefone",length = 2)
    private Integer ddd;
    @Column(name = "num_telefone", length = 10)
    private String numero;

    //region Getters and Setters

    public Integer getId_cientista() {
        return id_cientista;
    }
    public void setId_cientista(Integer id_cientista) {
        this.id_cientista = id_cientista;
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
    public TelefoneId (Integer id_cientista, Integer ddd, String numero) {
        this.id_cientista = id_cientista;
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
        return Objects.equals(id_cientista, that.id_cientista) && Objects.equals(ddd, that.ddd) && Objects.equals(numero, that.numero);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id_cientista, ddd, numero);
    }

    //endregion
}
