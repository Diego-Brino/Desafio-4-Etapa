package com.api.scilink.repositories;

import com.api.scilink.models.CientistaModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface CientistaRepository extends JpaRepository<CientistaModel, UUID> {
    public Optional<CientistaModel> findCientistaModelByNomCientista(String Nom_cientista);
    public Optional<CientistaModel> findCientistaModelByCpfCientista(String Cpf_cientista);
}
