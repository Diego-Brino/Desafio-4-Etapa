package com.api.scilink.services;

import com.api.scilink.dtos.ProjetoDto;
import com.api.scilink.models.CientistaModel;
import com.api.scilink.models.ProjetoModel;

import java.util.List;

public interface ProjetoService {
    List<ProjetoModel> buscarTodosOsProjetosPublicos ();
    void cadastrarProjeto (ProjetoModel projetoModel);
    List<ProjetoModel> buscarTodosOsMeusProjetos (CientistaModel cientistaModel);
}
