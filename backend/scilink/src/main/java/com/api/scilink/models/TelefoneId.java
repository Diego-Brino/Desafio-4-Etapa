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
    @Column(length = 2)
    private Integer ddd_telefone;
    @Column(length = 10)
    private String num_telefone;

    //region Getters and Setters

    public Integer getId_cientista() {
        return id_cientista;
    }
    public void setId_cientista(Integer id_cientista) {
        this.id_cientista = id_cientista;
    }

    public Integer getDdd_telefone() {
        return ddd_telefone;
    }
    public void setDdd_telefone(Integer ddd_telefone) {
        this.ddd_telefone = ddd_telefone;
    }

    public String getNum_telefone() {
        return num_telefone;
    }
    public void setNum_telefone(String num_telefone) {
        this.num_telefone = num_telefone;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TelefoneId that = (TelefoneId) o;
        return Objects.equals(id_cientista, that.id_cientista) && Objects.equals(ddd_telefone, that.ddd_telefone) && Objects.equals(num_telefone, that.num_telefone);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id_cientista, ddd_telefone, num_telefone);
    }

    //endregion
}
