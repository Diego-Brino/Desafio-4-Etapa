package com.api.scilink.services.areaAtuacaoCientista;

import com.api.scilink.models.AreaAtuacaoCientistaModel;
import com.api.scilink.repositories.AreaAtuacaoCientistaRepository;
import com.api.scilink.util.LogInfoUtil;
import org.springframework.stereotype.Service;

@Service
public class AreaAtuacaoCientistaServiceImpl extends LogInfoUtil implements AreaAtuacaoCientistaService {
    private final AreaAtuacaoCientistaRepository areaAtuacaoCientistaRepository;
    public AreaAtuacaoCientistaServiceImpl(AreaAtuacaoCientistaRepository areaAtuacaoCientistaRepository) {
        this.areaAtuacaoCientistaRepository = areaAtuacaoCientistaRepository;
    }

    @Override
    public AreaAtuacaoCientistaModel cadastrarAreaAtuacaoCientistaModel(AreaAtuacaoCientistaModel areaAtuacaoCientistaModel) {
        printLogInfo("Cadastrando uma Área de Atuação Cientista!");
        return areaAtuacaoCientistaRepository.save(areaAtuacaoCientistaModel);
    }
}
