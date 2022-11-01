package com.api.scilink.services.areaAtuacao;

import com.api.scilink.models.AreaAtuacaoModel;

import java.util.List;
import java.util.Optional;

public interface AreaAtuacaoService {
    List<AreaAtuacaoModel> buscarTodasAsAreasAtuacao ();
    AreaAtuacaoModel cadastrarAreaAtuacaoModel (AreaAtuacaoModel areaAtuacaoModel);
    Optional<AreaAtuacaoModel> buscarAreaAtuacaoByNome (String nome);
}
