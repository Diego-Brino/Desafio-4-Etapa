package com.api.scilink.repositories;

import com.api.scilink.models.TitulacaoModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TitulacaoRepository extends JpaRepository<TitulacaoModel, Integer> {
    TitulacaoModel findTitulacaoModelByNome (String nome);
}
