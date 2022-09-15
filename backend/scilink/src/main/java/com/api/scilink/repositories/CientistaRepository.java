package com.api.scilink.repositories;

import com.api.scilink.models.CientistaModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface CientistaRepository extends JpaRepository<CientistaModel, UUID> {

    public Optional<CientistaModel> findCientistaModelByNom_cientista(String Nom_cientista);
    public Optional<CientistaModel> findCientistaModelByCpf_cientista(String Cpf_cientista);
}
