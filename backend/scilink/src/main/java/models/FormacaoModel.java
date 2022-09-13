package models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "TB_FORMACAO")
public class FormacaoModel implements Serializable {
    @EmbeddedId
    private FormacaoId formacaoId;
    @ManyToOne
    @MapsId("id_cientista")
    @JoinColumn(name = "id_cientista",
            referencedColumnName = "id_cientista")
    private CientistaModel cientista;
    @ManyToOne
    @MapsId("id_titulacao")
    @JoinColumn(name = "id_titulacao",
            referencedColumnName = "id_titulacao")
    private TitulacaoModel titulacao;
    @Column
    private Date dti_formacao;
    @Column
    private Date dtt_formacao;

    //region Getters and Setters

    public FormacaoId getFormacaoId() {
        return formacaoId;
    }
    public void setFormacaoId(FormacaoId formacaoId) {
        this.formacaoId = formacaoId;
    }

    public CientistaModel getCientista() {
        return cientista;
    }
    public void setCientista(CientistaModel cientista) {
        this.cientista = cientista;
    }

    public TitulacaoModel getTitulacao() {
        return titulacao;
    }
    public void setTitulacao(TitulacaoModel titulacao) {
        this.titulacao = titulacao;
    }

    public Date getDti_formacao() {
        return dti_formacao;
    }
    public void setDti_formacao(Date dti_formacao) {
        this.dti_formacao = dti_formacao;
    }

    public Date getDtt_formacao() {
        return dtt_formacao;
    }
    public void setDtt_formacao(Date dtt_formacao) {
        this.dtt_formacao = dtt_formacao;
    }


    //endregion
}
