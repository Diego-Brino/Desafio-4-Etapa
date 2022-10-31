package com.api.scilink.services.areaAtuacao;

import com.api.scilink.models.AreaAtuacaoModel;
import com.api.scilink.repositories.AreaAtuacaoRepository;
import com.api.scilink.util.LogInfoUtil;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AreaAtuacaoServiceImpl extends LogInfoUtil implements AreaAtuacaoService {
    private final AreaAtuacaoRepository areaAtuacaoRepository;
    public AreaAtuacaoServiceImpl(AreaAtuacaoRepository areaAtuacaoRepository) {
        this.areaAtuacaoRepository = areaAtuacaoRepository;
    }

    @Override
    public List<AreaAtuacaoModel> buscarTodasAsAreasAtuacao() {
        printLogInfo("Retornando lista de todos as Áreas de Atuação!");
        return areaAtuacaoRepository.findAll();
    }

    @Override
    public AreaAtuacaoModel cadastrarAreaAtuacaoModel(AreaAtuacaoModel areaAtuacaoModel) {
        printLogInfo("Cadastrando uma Área de Atuação!");
        return areaAtuacaoRepository.save(areaAtuacaoModel);
    }
}
