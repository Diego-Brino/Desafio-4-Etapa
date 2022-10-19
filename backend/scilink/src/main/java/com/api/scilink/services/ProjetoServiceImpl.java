package com.api.scilink.services;

import com.api.scilink.exceptions.NenhumProjetoCadastradoException;
import com.api.scilink.models.ProjetoModel;
import com.api.scilink.repositories.ProjetoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjetoServiceImpl implements ProjetoService {
    private final ProjetoRepository projetoRepository;
    public ProjetoServiceImpl(ProjetoRepository projetoRepository) {
        this.projetoRepository = projetoRepository;
    }

    @Override
    public List<ProjetoModel> buscarTodosOsProjetosPublicos () {
        if (projetoRepository.findAllByPubProjeto(0).isPresent()) {
            return projetoRepository.findAllByPubProjeto(0).get();
        }
        throw new NenhumProjetoCadastradoException(); //TODO - Exceção não é lançada, isPresent passa mesmo a lista sendo vazia.
    }
}
