package com.api.scilink.services.redeSocial;

import com.api.scilink.models.RedeSocialModel;
import com.api.scilink.models.TelefoneModel;

import java.util.List;

public interface RedeSocialService {
    void cadastrarRedeSocial (RedeSocialModel redeSocialModel);
    void deletarRedeSocial (RedeSocialModel redeSocialModel);
}
