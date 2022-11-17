package com.api.scilink.services.formacao;

import com.api.scilink.models.FormacaoModel;
import com.api.scilink.repositories.FormacaoRepository;
import com.api.scilink.util.LogInfoUtil;
import org.springframework.stereotype.Service;

@Service
public class FormacaoServiceImpl extends LogInfoUtil implements FormacaoService {
    private final FormacaoRepository formacaoRepository;
    public FormacaoServiceImpl(FormacaoRepository formacaoRepository) {
        this.formacaoRepository = formacaoRepository;
    }

    @Override
    public FormacaoModel cadastrarFormacaoModel(FormacaoModel formacaoModel) {
        printLogInfo("Cadastrando uma formação!");
        return formacaoRepository.save(formacaoModel);
    }

    @Override
    public void deletarFormacao(FormacaoModel formacaoModel) {
        printLogInfo("Deletando uma formacao!");
        formacaoRepository.delete(formacaoModel);
    }
}
