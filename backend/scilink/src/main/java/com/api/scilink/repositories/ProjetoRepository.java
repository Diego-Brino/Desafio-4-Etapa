package com.api.scilink.repositories;

import com.api.scilink.models.CientistaModel;
import com.api.scilink.models.ProjetoModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProjetoRepository extends JpaRepository<ProjetoModel, Integer> {
    Optional<ProjetoModel> findByIdProjeto (Integer id);
    Optional<List<ProjetoModel>> findAllByPublico (Integer publico);
    Optional<List<ProjetoModel>> findAllByCientista (CientistaModel cientistaModel);
    Optional<List<ProjetoModel>> findAllByCientistaAndPublico (CientistaModel cientistaModel, Integer publico);
    void deleteByIdProjeto (Integer id);
}
