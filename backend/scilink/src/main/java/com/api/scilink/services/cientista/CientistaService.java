package com.api.scilink.services.cientista;

import com.api.scilink.models.CientistaModel;

import java.util.List;

public interface CientistaService {
    List<CientistaModel> buscarTodosOsCientistas ();
    CientistaModel findCientistaById (Integer id);
    CientistaModel findCientistaByCpf (String cpfCientista);
    CientistaModel findCientistaByNome (String nome);
    CientistaModel editarCientista (CientistaModel cientistaModel);
}
