package com.api.scilink.services;

import com.api.scilink.models.CientistaModel;

import java.util.List;

public interface CientistaService {
    List<CientistaModel> buscarTodosOsCientistas ();
    CientistaModel findCientistaModelByCpfCientista (String cpfCientista);
}
