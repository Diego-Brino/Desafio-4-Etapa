package com.api.scilink.repositories;

import com.api.scilink.models.CientistaModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CientistaRepository extends JpaRepository<CientistaModel, Integer> {
    public Optional<CientistaModel> findCientistaModelByNome(String nome);
    public Optional<CientistaModel> findCientistaModelByCpf(String cpf);
    public Boolean existsByCpf (String cpf);
    public Boolean existsByEmail (String email);
    public Boolean existsByLattes (String lattes);
}
