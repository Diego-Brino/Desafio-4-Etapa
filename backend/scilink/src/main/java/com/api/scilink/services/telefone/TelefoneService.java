package com.api.scilink.services.telefone;

import com.api.scilink.models.TelefoneModel;

import java.util.List;

public interface TelefoneService {
    void cadastrarTelefoneModel (TelefoneModel telefoneModel);
    void deletarTelefoneModel (TelefoneModel telefoneModel);
}
