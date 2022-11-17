package com.api.scilink.services.titulacao;

import com.api.scilink.models.TitulacaoModel;
import com.api.scilink.repositories.TitulacaoRepository;
import com.api.scilink.util.LogInfoUtil;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TitulacaoServiceImpl extends LogInfoUtil implements TitulacaoService {
    private final TitulacaoRepository titulacaoRepository;
    public TitulacaoServiceImpl(TitulacaoRepository titulacaoRepository) {
        this.titulacaoRepository = titulacaoRepository;
    }

    @Override
    public List<TitulacaoModel> buscarTodasAsTitulacoes() {
        printLogInfo("Retornando lista de todos as titulacoes!");
        return titulacaoRepository.findAll();
    }

    @Override
    public Optional<TitulacaoModel> buscarTitulacaoByNome(String nome) {
        return titulacaoRepository.findTitulacaoModelByNome(nome);
    }
}
