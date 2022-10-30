package com.api.scilink.repositories;

import com.api.scilink.models.FormacaoId;
import com.api.scilink.models.FormacaoModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FormacaoRepository extends JpaRepository<FormacaoModel, FormacaoId> {
}
