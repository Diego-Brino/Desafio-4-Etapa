package com.api.scilink.services.cientista;

import com.api.scilink.models.CientistaModel;

import java.util.List;

public interface CientistaService {
    CientistaModel findCientistaByCpf (String cpfCientista);
    List<CientistaModel> buscarTodosOsCientistas ();
    void editarCientista (CientistaModel cientistaModelNew);
}
