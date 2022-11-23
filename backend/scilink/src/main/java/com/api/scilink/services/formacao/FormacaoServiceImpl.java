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
    public void cadastrarFormacaoModel(FormacaoModel formacaoModel) {
        formacaoRepository.save(formacaoModel);
        printLogInfo("Cadastrando uma formação!");
    }

    @Override
    public void deletarFormacao(FormacaoModel formacaoModel) {
        formacaoRepository.delete(formacaoModel);
        printLogInfo("Deletando uma formacao!");
    }
}
