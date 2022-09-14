package models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "TB_PROJETO")
public class ProjetoModel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id_projeto;
    @ManyToOne
    @JoinColumn(name = "id_cientista",
                referencedColumnName = "id_cientista")
    private CientistaModel cientista;
    @Column(length = 50)
    private String tit_projeto;
    @Column(length = 250)
    private String res_projeto;
    @Column
    private Date dti_projeto;
    @Column
    private Date dtt_projeto;
    @Column(nullable = false)
    private Boolean pub_projeto;

    //region Getters and Setters

    public UUID getId_projeto() {
        return id_projeto;
    }
    public void setId_projeto(UUID id_projeto) {
        this.id_projeto = id_projeto;
    }

    public CientistaModel getCientista() {
        return cientista;
    }
    public void setCientista(CientistaModel cientista) {
        this.cientista = cientista;
    }

    public String getTit_projeto() {
        return tit_projeto;
    }
    public void setTit_projeto(String tit_projeto) {
        this.tit_projeto = tit_projeto;
    }

    public String getRes_projeto() {
        return res_projeto;
    }
    public void setRes_projeto(String res_projeto) {
        this.res_projeto = res_projeto;
    }

    public Date getDti_projeto() {
        return dti_projeto;
    }
    public void setDti_projeto(Date dti_projeto) {
        this.dti_projeto = dti_projeto;
    }

    public Date getDtt_projeto() {
        return dtt_projeto;
    }
    public void setDtt_projeto(Date dtt_projeto) {
        this.dtt_projeto = dtt_projeto;
    }

    public Boolean getPub_projeto() {
        return pub_projeto;
    }
    public void setPub_projeto(Boolean pub_projeto) {
        this.pub_projeto = pub_projeto;
    }

    //endregion
}
