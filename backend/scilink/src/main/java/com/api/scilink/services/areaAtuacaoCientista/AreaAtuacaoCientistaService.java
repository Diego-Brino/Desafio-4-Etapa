package com.api.scilink.services.areaAtuacaoCientista;

import com.api.scilink.models.AreaAtuacaoCientistaId;
import com.api.scilink.models.AreaAtuacaoCientistaModel;

public interface AreaAtuacaoCientistaService {
    AreaAtuacaoCientistaModel cadastrarAreaAtuacaoCientistaModel (AreaAtuacaoCientistaModel areaAtuacaoCientistaModel);
    void deletarAreaAtuacaoCientista (AreaAtuacaoCientistaModel areaAtuacaoCientistaModel);
}
