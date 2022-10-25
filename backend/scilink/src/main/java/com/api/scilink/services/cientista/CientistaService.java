package com.api.scilink.services.cientista;

import com.api.scilink.models.CientistaModel;

import java.util.List;

public interface CientistaService {
    List<CientistaModel> buscarTodosOsCientistas ();
    CientistaModel findCientistaByCpf (String cpfCientista);
}
