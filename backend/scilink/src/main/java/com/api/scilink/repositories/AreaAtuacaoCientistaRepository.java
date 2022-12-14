package com.api.scilink.repositories;

import com.api.scilink.models.AreaAtuacaoCientistaId;
import com.api.scilink.models.AreaAtuacaoCientistaModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AreaAtuacaoCientistaRepository extends JpaRepository<AreaAtuacaoCientistaModel, AreaAtuacaoCientistaId> {
}
