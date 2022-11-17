package com.api.scilink.repositories;

import com.api.scilink.models.CientistaModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CientistaRepository extends JpaRepository<CientistaModel, Integer> {
    Optional<CientistaModel> findCientistaModelByIdCientista(Integer id);
    Optional<CientistaModel> findCientistaModelByCpf(String cpf);
    Optional<CientistaModel> findCientistaModelByNome(String nome);
    Boolean existsByCpf (String cpf);
    Boolean existsByEmail (String email);
    Boolean existsByEmailAndIdCientista (String email, Integer id);
    Boolean existsByLattes (String lattes);
    Boolean existsByLattesAndIdCientista (String lattes, Integer id);
}
