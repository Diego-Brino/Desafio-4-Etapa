package com.api.scilink.repositories;

import com.api.scilink.models.CientistaModel;
import com.api.scilink.models.ProjetoModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjetoRepository extends JpaRepository<ProjetoModel, Integer> {
    List<ProjetoModel> findAllByPublico (Integer publico);
    List<ProjetoModel> findAllByCientista (CientistaModel cientistaModel);
}
