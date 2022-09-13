package models;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.UUID;

@Embeddable
public class TelefoneId implements Serializable {

    @Column
    private UUID id_cientista;
    @Column(length = 2)
    private Integer ddd_telefone;
    @Column(length = 10)
    private String num_telefone;

    //region Getters and Setters

    public UUID getId_cientista() {
        return id_cientista;
    }
    public void setId_cientista(UUID id_cientista) {
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

    //endregion
}
