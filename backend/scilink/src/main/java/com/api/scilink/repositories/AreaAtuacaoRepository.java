package com.api.scilink.repositories;

import com.api.scilink.models.AreaAtuacaoModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AreaAtuacaoRepository extends JpaRepository<AreaAtuacaoModel, Integer> {
    Optional<AreaAtuacaoModel> findAreaAtuacaoModelByNome (String nome);
}
