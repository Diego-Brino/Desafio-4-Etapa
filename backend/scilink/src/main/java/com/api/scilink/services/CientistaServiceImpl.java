package com.api.scilink.services;

import com.api.scilink.exceptions.CpfNaoEncontradoException;
import com.api.scilink.exceptions.NenhumCientistaCadastradoException;
import com.api.scilink.models.CientistaModel;
import com.api.scilink.repositories.CientistaRepository;
import com.api.scilink.util.LogInfoUtil;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CientistaServiceImpl extends LogInfoUtil implements CientistaService {
    private final CientistaRepository cientistaRepository;
    public CientistaServiceImpl(CientistaRepository cientistaRepository) {
        this.cientistaRepository = cientistaRepository;
    }

    @Override
    public CientistaModel findCientistaModelByCpfCientista (String cpfCientista) {
        return cientistaRepository.findCientistaModelByCpfCientista(cpfCientista)
                .orElseThrow(() -> new CpfNaoEncontradoException());
    }

    @Override
    public List<CientistaModel> buscarTodosOsCientistas() {
        if (cientistaRepository.findAll().isEmpty()) {
            printLogInfo("Nenhum cientista cadastrado no sistema!");
            throw new NenhumCientistaCadastradoException();
        }
        printLogInfo("Retornando lista de todos os cientistas!");
        return cientistaRepository.findAll();
    }
}