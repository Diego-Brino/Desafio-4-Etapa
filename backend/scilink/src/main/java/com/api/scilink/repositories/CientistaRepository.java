package com.api.scilink.repositories;

import com.api.scilink.models.CientistaModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CientistaRepository extends JpaRepository<CientistaModel, Integer> {
    Optional<CientistaModel> findCientistaModelByNome(String nome);
    Optional<CientistaModel> findCientistaModelByCpf(String cpf);
    Optional<CientistaModel> findCientistaModelByIdCientista(Integer id);
    Boolean existsByCpf (String cpf);
    Boolean existsByEmail (String email);
    Boolean existsByLattes (String lattes);
}
