package com.api.scilink.repositories;

import com.api.scilink.models.TitulacaoModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TitulacaoRepository extends JpaRepository<TitulacaoModel, Integer> {
    Optional<TitulacaoModel> findTitulacaoModelByNome (String nome);
}
