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
    public List<RedeSocialModel> cadastrarListaRedesSociaisModels(List<RedeSocialModel> listaRedesSociaisModel) {
        printLogInfo("Cadastrando lista de redes sociais!");
        return redeSocialRepository.saveAll(listaRedesSociaisModel);
    }

    @Override
    public RedeSocialModel cadastrarRedeSocial(RedeSocialModel redeSocialModel) {
        printLogInfo("Cadastrando uma rede social!");
        return redeSocialRepository.save(redeSocialModel);
    }

    @Override
    public void deletarRedeSocial(RedeSocialModel redeSocialModel) {
        printLogInfo("Deletando uma rede social!");
        redeSocialRepository.delete(redeSocialModel);
    }

    @Override
    public RedeSocialModel buscarRedeSocialPorId(Integer idRedeSocial) {
        printLogInfo("Buscando uma rede social");
        return redeSocialRepository.findRedeSocialModelByIdRedeSocial(idRedeSocial);
    }
}
