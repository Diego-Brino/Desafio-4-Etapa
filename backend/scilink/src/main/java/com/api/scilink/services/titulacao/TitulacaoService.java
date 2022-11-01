package com.api.scilink.services.titulacao;

import com.api.scilink.models.TitulacaoModel;

import java.util.List;
import java.util.Optional;

public interface TitulacaoService {
    List<TitulacaoModel> buscarTodasAsTitulacoes();
    Optional<TitulacaoModel> buscarTitulacaoByNome(String nome);
}
