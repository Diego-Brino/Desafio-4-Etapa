package com.api.scilink.services.formacao;

import com.api.scilink.models.FormacaoModel;

public interface FormacaoService {
    void cadastrarFormacaoModel (FormacaoModel formacaoModel);
    void deletarFormacao (FormacaoModel formacaoModel);
}
