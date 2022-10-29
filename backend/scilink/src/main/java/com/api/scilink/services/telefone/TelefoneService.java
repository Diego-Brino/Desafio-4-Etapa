package com.api.scilink.services.telefone;

import com.api.scilink.models.TelefoneModel;

import java.util.List;

public interface TelefoneService {
    List<TelefoneModel> cadastrarListaTelefoneModels (List<TelefoneModel> listaTelefoneModels);
    TelefoneModel cadastrarTelefoneModel (TelefoneModel telefoneModel);
    Boolean existsTelefoneModelByDddAndNumero (Integer ddd, String numero);
}
