package com.api.scilink.repositories;

import com.api.scilink.models.AreaAtuacaoCientistaId;
import com.api.scilink.models.AreaAtuacaoCientistaModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AreaAtuacaoCientistaRepository extends JpaRepository<AreaAtuacaoCientistaModel, AreaAtuacaoCientistaId> {
    AreaAtuacaoCientistaModel findAreaAtuacaoCientistaModelById (AreaAtuacaoCientistaId areaAtuacaoCientistaId);
}
