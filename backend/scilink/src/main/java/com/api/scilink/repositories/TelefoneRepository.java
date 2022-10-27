package com.api.scilink.repositories;

import com.api.scilink.models.TelefoneId;
import com.api.scilink.models.TelefoneModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TelefoneRepository extends JpaRepository<TelefoneModel, TelefoneId> {
    Boolean existsTelefoneModelByTelefoneIdDddAndTelefoneIdNumero (Integer ddd, String numero);
}
