package com.api.scilink.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "TB_AREA_ATUACAO_CIENTISTA")
public class AreaAtuacaoCientistaModel implements Serializable {
    private static final long serialVersionUID = 1L;
    @EmbeddedId
    private AreaAtuacaoCientistaId id;
    @ManyToOne
    @MapsId("id_cientista")
    @JoinColumn(name = "id_cientista",
                referencedColumnName = "id_cientista")
    private CientistaModel cientista;
    @ManyToOne
    @MapsId("id_area_atuacao")
    @JoinColumn(name = "id_area_atuacao",
                referencedColumnName = "id_area_atuacao")
    private AreaAtuacaoModel areaAtuacao;

    //region Getters and Setters

    public AreaAtuacaoCientistaId getId() {
        return id;
    }
    public void setId(AreaAtuacaoCientistaId id) {
        this.id = id;
    }

    public CientistaModel getCientista() {
        return cientista;
    }
    public void setCientista(CientistaModel cientista) {
        this.cientista = cientista;
    }

    public AreaAtuacaoModel getAreaAtuacao() {
        return areaAtuacao;
    }
    public void setAreaAtuacao(AreaAtuacaoModel areaAtuacao) {
        this.areaAtuacao = areaAtuacao;
    }


    //endregion
}
