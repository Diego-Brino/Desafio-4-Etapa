package com.api.scilink.repositories;

import com.api.scilink.models.ProjetoModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProjetoRepository extends JpaRepository<ProjetoModel, Integer> {
//    List<ProjetoModel> findAllByPubProjeto (Integer pubProjeto);

    Optional<List<ProjetoModel>> findAllByPubProjeto (Integer pubProjeto);
}
