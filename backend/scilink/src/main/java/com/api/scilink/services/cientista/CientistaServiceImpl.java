package com.api.scilink.services.cientista;

import com.api.scilink.exceptions.CpfNaoEncontradoException;
import com.api.scilink.exceptions.areaAtuacao.AreaAtuacaoNaoEncontradaException;
import com.api.scilink.exceptions.cientista.CientistaNaoEncontradoException;
import com.api.scilink.exceptions.cientista.NenhumCientistaCadastradoException;
import com.api.scilink.exceptions.titulacao.TitulacaoNaoEncontradaException;
import com.api.scilink.models.AreaAtuacaoCientistaId;
import com.api.scilink.models.AreaAtuacaoCientistaModel;
import com.api.scilink.models.CientistaModel;
import com.api.scilink.models.RedeSocialModel;
import com.api.scilink.repositories.CientistaRepository;
import com.api.scilink.services.areaAtuacao.AreaAtuacaoServiceImpl;
import com.api.scilink.services.areaAtuacaoCientista.AreaAtuacaoCientistaServiceImpl;
import com.api.scilink.services.formacao.FormacaoServiceImpl;
import com.api.scilink.services.redeSocial.RedeSocialServiceImpl;
import com.api.scilink.services.telefone.TelefoneServiceImpl;
import com.api.scilink.services.titulacao.TitulacaoServiceImpl;
import com.api.scilink.util.LogInfoUtil;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class CientistaServiceImpl extends LogInfoUtil implements CientistaService {
    private final CientistaRepository cientistaRepository;
    private final TelefoneServiceImpl telefoneServiceImpl;
    private final RedeSocialServiceImpl redeSocialServiceImpl;
    private final FormacaoServiceImpl formacaoServiceImpl;
    private final TitulacaoServiceImpl titulacaoServiceImpl;
    private final AreaAtuacaoServiceImpl areaAtuacaoServiceImpl;
    private final AreaAtuacaoCientistaServiceImpl areaAtuacaoCientistaServiceImpl;
    public CientistaServiceImpl(CientistaRepository cientistaRepository,
                                TelefoneServiceImpl telefoneServiceImpl,
                                RedeSocialServiceImpl redeSocialServiceImpl,
                                FormacaoServiceImpl formacaoServiceImpl,
                                TitulacaoServiceImpl titulacaoServiceImpl,
                                AreaAtuacaoServiceImpl areaAtuacaoServiceImpl,
                                AreaAtuacaoCientistaServiceImpl areaAtuacaoCientistaServiceImpl) {
        this.cientistaRepository = cientistaRepository;
        this.telefoneServiceImpl = telefoneServiceImpl;
        this.redeSocialServiceImpl = redeSocialServiceImpl;
        this.formacaoServiceImpl = formacaoServiceImpl;
        this.titulacaoServiceImpl = titulacaoServiceImpl;
        this.areaAtuacaoServiceImpl = areaAtuacaoServiceImpl;
        this.areaAtuacaoCientistaServiceImpl = areaAtuacaoCientistaServiceImpl;
    }

    @Override
    public CientistaModel findCientistaById(Integer id) {
        return cientistaRepository.findCientistaModelByIdCientista(id)
                .orElseThrow(CientistaNaoEncontradoException::new);
    }

    @Override
    public CientistaModel findCientistaByCpf (String cpfCientista) {
        return cientistaRepository.findCientistaModelByCpf(cpfCientista)
                .orElseThrow(CientistaNaoEncontradoException::new);
    }

    @Override
    public CientistaModel findCientistaByNome(String nome) {
        return cientistaRepository.findCientistaModelByNome(nome)
                .orElseThrow(CientistaNaoEncontradoException::new);
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

    @Override
    @Transactional
    public CientistaModel editarCientista(CientistaModel cientistaModelNew) {
        CientistaModel cientistaModelTemp = cientistaRepository
                .findCientistaModelByIdCientista(cientistaModelNew.getIdCientista()).get();

        if (cientistaModelNew.getTelefones() != null) {
            cientistaModelTemp.getTelefones().forEach(telefoneServiceImpl::deletarTelefoneModel);

            cientistaModelNew.getTelefones().forEach(telefoneModel -> {
                telefoneModel.setCientista(cientistaModelTemp);
                telefoneServiceImpl.cadastrarTelefoneModel(telefoneModel);
            });
        }

        if (cientistaModelNew.getRedesSociais() != null) {
            cientistaModelTemp.getRedesSociais().forEach(redeSocialServiceImpl::deletarRedeSocial);

            cientistaModelNew.getRedesSociais().forEach(redeSocialModel -> {
                redeSocialModel.setCientista(cientistaModelTemp);
                redeSocialServiceImpl.cadastrarRedeSocial(redeSocialModel);
            });
        }

        if (cientistaModelNew.getAreasAtuacao() != null) {
            cientistaModelTemp.getAreasAtuacao().forEach(areaAtuacaoCientistaServiceImpl::deletarAreaAtuacaoCientista);

            cientistaModelNew.getAreasAtuacao().forEach(areaAtuacaoCientistaModel -> {
                areaAtuacaoCientistaModel.setCientista(cientistaModelTemp);
                areaAtuacaoCientistaModel.setAreaAtuacao
                        (areaAtuacaoServiceImpl.buscarAreaAtuacaoByNome
                                        (areaAtuacaoCientistaModel.getAreaAtuacao().getNome())
                                .orElseThrow(AreaAtuacaoNaoEncontradaException::new));
                areaAtuacaoCientistaServiceImpl
                        .cadastrarAreaAtuacaoCientistaModel(areaAtuacaoCientistaModel);
            });
        }

        if (cientistaModelNew.getFormacoes() != null) {
            cientistaModelTemp.getFormacoes().forEach(formacaoServiceImpl::deletarFormacao);

            cientistaModelNew.getFormacoes().forEach(formacaoModel -> {
                formacaoModel.setCientista(cientistaModelTemp);
                formacaoModel.setTitulacao
                        (titulacaoServiceImpl.buscarTitulacaoByNome
                                        (formacaoModel.getTitulacao().getNome())
                                .orElseThrow(TitulacaoNaoEncontradaException::new));
                formacaoServiceImpl.cadastrarFormacaoModel(formacaoModel);
            });
        }

        cientistaRepository.save(cientistaModelNew);
        printLogInfo("Cientista editado!");

        return cientistaModelNew;
    }
}