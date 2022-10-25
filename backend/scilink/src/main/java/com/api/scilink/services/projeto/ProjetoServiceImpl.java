package com.api.scilink.services.projeto;

import com.api.scilink.exceptions.projeto.NenhumProjetoCadastradoException;
import com.api.scilink.models.CientistaModel;
import com.api.scilink.models.ProjetoModel;
import com.api.scilink.repositories.ProjetoRepository;
import com.api.scilink.util.LogInfoUtil;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class ProjetoServiceImpl extends LogInfoUtil implements ProjetoService {
    private final ProjetoRepository projetoRepository;
    public ProjetoServiceImpl(ProjetoRepository projetoRepository) {
        this.projetoRepository = projetoRepository;
    }

    @Override
    public List<ProjetoModel> buscarTodosOsProjetosPublicos () {
        if (projetoRepository.findAllByPubProjeto(1).isEmpty()) {
            printLogInfo("Nenhum projeto cadastrado no sistema!");
            throw new NenhumProjetoCadastradoException();
        }
        printLogInfo("Retornando lista de todos os projetos públicos");
        return projetoRepository.findAllByPubProjeto(1);
    }

    @Override
    public List<ProjetoModel> buscarTodosOsMeusProjetos (CientistaModel cientistaModel) {
        if (projetoRepository.findAllByCientista(cientistaModel).isEmpty()) {
            printLogInfo(cientistaModel.getNomCientista() + " não possui nenhum projeto cadastrado");
            throw new NenhumProjetoCadastradoException();
        }
        printLogInfo("Retornando lista de todos os projetos do cientista " + cientistaModel.getNomCientista());
        return projetoRepository.findAllByCientista(cientistaModel);
    }

    @Override
    @Transactional
    public void cadastrarProjeto (ProjetoModel projetoModel) {
        printLogInfo("Projeto cadastrado!");
        projetoRepository.save(projetoModel);
    }
}
