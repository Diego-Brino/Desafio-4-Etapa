package com.api.scilink.services.titulacao;

import com.api.scilink.models.TitulacaoModel;

import java.util.List;

public interface TitulacaoService {
    List<TitulacaoModel> buscarTodasAsTitulacoes();
    TitulacaoModel buscarTitulacaoByNome(String nome);
}
