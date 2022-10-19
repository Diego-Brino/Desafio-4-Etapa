package com.api.scilink.repositories;

import com.api.scilink.models.CientistaModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CientistaRepository extends JpaRepository<CientistaModel, Integer> {
    public Optional<CientistaModel> findCientistaModelByNomCientista(String nomCientista);
    public Optional<CientistaModel> findCientistaModelByCpfCientista(String cpfCientista);
    public Boolean existsByCpfCientista (String cpfCientista);
    public Boolean existsByEmailCientista (String emailCientista);
    public Boolean existsByLattesCientista (String lattesCientista);
}
