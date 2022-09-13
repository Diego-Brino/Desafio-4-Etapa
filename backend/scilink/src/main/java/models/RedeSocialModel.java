package models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.UUID;

@Entity
@Table(name = "TB_REDE_SOCIAL")
public class RedeSocialModel implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id_rede_social;
    @ManyToOne
    @JoinColumn(name = "id_cientista",
                referencedColumnName = "id_cientista")
    private CientistaModel cientista;
    @Column(length = 50)
    private String end_rede_social;
    @Column(length = 1)
    private Character tip_rede_social;

    //region Getters and Setters

    public UUID getId_rede_social() {
        return id_rede_social;
    }
    public void setId_rede_social(UUID id_rede_social) {
        this.id_rede_social = id_rede_social;
    }

    public CientistaModel getCientista() {
        return cientista;
    }
    public void setCientista(CientistaModel cientista) {
        this.cientista = cientista;
    }

    public String getEnd_rede_social() {
        return end_rede_social;
    }
    public void setEnd_rede_social(String end_rede_social) {
        this.end_rede_social = end_rede_social;
    }

    public Character getTip_rede_social() {
        return tip_rede_social;
    }
    public void setTip_rede_social(Character tip_rede_social) {
        this.tip_rede_social = tip_rede_social;
    }


    //endregion
}
