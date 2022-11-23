package com.api.scilink.services.redeSocial;

import com.api.scilink.models.RedeSocialModel;
import com.api.scilink.repositories.RedeSocialRepository;
import com.api.scilink.util.LogInfoUtil;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RedeSocialServiceImpl extends LogInfoUtil implements RedeSocialService {
    private final RedeSocialRepository redeSocialRepository;
    public RedeSocialServiceImpl(RedeSocialRepository redeSocialRepository) {
        this.redeSocialRepository = redeSocialRepository;
    }

    @Override
    public void cadastrarRedeSocial(RedeSocialModel redeSocialModel) {
        redeSocialRepository.save(redeSocialModel);
        printLogInfo("Cadastrando uma rede social!");
    }

    @Override
    public void deletarRedeSocial(RedeSocialModel redeSocialModel) {
        redeSocialRepository.delete(redeSocialModel);
        printLogInfo("Deletando uma rede social!");
    }
}
