package com.api.scilink.services.projeto;

import com.api.scilink.models.CientistaModel;
import com.api.scilink.models.ProjetoModel;

import java.util.List;

public interface ProjetoService {
    ProjetoModel buscarProjetoPorId (Integer id);
    List<ProjetoModel> buscarTodosOsMeusProjetos (CientistaModel cientistaModel);
    List<ProjetoModel> buscarTodosOsProjetosPublicos();
    List<ProjetoModel> buscarTodosOsMeusProjetosPublicosOuPrivados (CientistaModel cientistaModel, Integer publico);
    void cadastrarProjeto (ProjetoModel projetoModel);
    void editarProjeto (ProjetoModel projetoModel);
    void deletarProjeto (Integer id);
}
