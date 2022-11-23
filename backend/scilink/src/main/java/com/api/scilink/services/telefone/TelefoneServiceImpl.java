package com.api.scilink.services.telefone;

import com.api.scilink.models.TelefoneModel;
import com.api.scilink.repositories.TelefoneRepository;
import com.api.scilink.util.LogInfoUtil;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class TelefoneServiceImpl extends LogInfoUtil implements TelefoneService {
    private final TelefoneRepository telefoneRepository;
    public TelefoneServiceImpl(TelefoneRepository telefoneRepository) {
        this.telefoneRepository = telefoneRepository;
    }

    @Override
    @Transactional
    public void cadastrarTelefoneModel(TelefoneModel telefoneModel) {
        telefoneRepository.save(telefoneModel);
        printLogInfo("Cadastrando um telefone!");
    }

    @Override
    public void deletarTelefoneModel(TelefoneModel telefoneModel) {
        telefoneRepository.delete(telefoneModel);
        printLogInfo("Deletando um telefone!");
    }
}
