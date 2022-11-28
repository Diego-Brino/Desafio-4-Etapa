package com.api.scilink.services.projeto;

import com.api.scilink.exceptions.projeto.NenhumProjetoCadastradoException;
import com.api.scilink.exceptions.projeto.NenhumProjetoEncontradoException;
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
    public ProjetoModel buscarProjetoPorId(Integer id) {
        return projetoRepository.findByIdProjeto(id)
                .orElseThrow(NenhumProjetoEncontradoException::new);
    }

    @Override
    public List<ProjetoModel> buscarTodosOsMeusProjetos(CientistaModel cientistaModel) {
        if (projetoRepository.findAllByCientista(cientistaModel).isEmpty()) {
            printLogInfo(cientistaModel.getNome() + " não possui nenhum projeto cadastrado");
            throw new NenhumProjetoCadastradoException();
        }
        printLogInfo("Retornando lista de todos os projetos do cientista " + cientistaModel.getNome());
        return projetoRepository.findAllByCientista(cientistaModel).get();
    }

    @Override
    public List<ProjetoModel> buscarTodosOsProjetosPublicos () {
        if (projetoRepository.findAllByPublico(1).isEmpty()) {
            printLogInfo("Nenhum projeto cadastrado no sistema!");
            throw new NenhumProjetoCadastradoException();
        }
        printLogInfo("Retornando lista de todos os projetos públicos");
        return projetoRepository.findAllByPublico(1).get();
    }

    @Override
    public List<ProjetoModel> buscarTodosOsMeusProjetosPublicosOuPrivados(CientistaModel cientistaModel, Integer publico) {
        if (projetoRepository.findAllByCientistaAndPublico(cientistaModel, publico).isEmpty()) {
            printLogInfo(cientistaModel.getNome() + " não possui nenhum projeto público cadastrado");
            throw new NenhumProjetoCadastradoException();
        }
        printLogInfo("Retornando lista de todos os projetos do cientista " + cientistaModel.getNome());
        return projetoRepository.findAllByCientistaAndPublico(cientistaModel, publico).get();
    }

    @Override
    @Transactional
    public void cadastrarProjeto (ProjetoModel projetoModel) {
        projetoRepository.save(projetoModel);
        printLogInfo("Projeto cadastrado!");
    }

    @Override
    @Transactional
    public void editarProjeto (ProjetoModel projetoModel) {
        projetoRepository.save(projetoModel);
        printLogInfo("Projeto editado!");
    }

    @Override
    @Transactional
    public void deletarProjeto(Integer id) {
        projetoRepository.deleteByIdProjeto(id);
        printLogInfo("Projeto deletado!");
    }
}
