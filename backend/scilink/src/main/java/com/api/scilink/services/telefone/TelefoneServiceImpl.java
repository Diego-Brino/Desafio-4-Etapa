package com.api.scilink.services.telefone;

import com.api.scilink.models.TelefoneModel;
import com.api.scilink.repositories.TelefoneRepository;
import com.api.scilink.util.LogInfoUtil;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TelefoneServiceImpl extends LogInfoUtil implements TelefoneService {
    private final TelefoneRepository telefoneRepository;
    public TelefoneServiceImpl(TelefoneRepository telefoneRepository) {
        this.telefoneRepository = telefoneRepository;
    }

    @Override
    public TelefoneModel cadastrarTelefoneModel(TelefoneModel telefoneModel) {
        printLogInfo("Cadastrando um telefone!");
        return telefoneRepository.save(telefoneModel);
    }

    @Override
    public List<TelefoneModel> cadastrarListaTelefoneModels(List<TelefoneModel> listaTelefoneModels) {
        printLogInfo("Cadastrando lista de telefones!");
        return telefoneRepository.saveAll(listaTelefoneModels);
    }

    @Override
    public Boolean existsTelefoneModelByDddAndNumero(Integer ddd, String numero) {
        printLogInfo("Verificando existência de um telefone!");
        return telefoneRepository.existsTelefoneModelByTelefoneIdDddAndTelefoneIdNumero(ddd, numero);
    }
}
