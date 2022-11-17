package com.api.scilink.services.redeSocial;

import com.api.scilink.models.RedeSocialModel;
import com.api.scilink.models.TelefoneModel;

import java.util.List;

public interface RedeSocialService {
    List<RedeSocialModel> cadastrarListaRedesSociaisModels (List<RedeSocialModel> listaRedesSociais);
    RedeSocialModel cadastrarRedeSocial (RedeSocialModel redeSocialModel);
    RedeSocialModel buscarRedeSocialPorId (Integer idRedeSocial);
    void deletarRedeSocial (RedeSocialModel redeSocialModel);
}
