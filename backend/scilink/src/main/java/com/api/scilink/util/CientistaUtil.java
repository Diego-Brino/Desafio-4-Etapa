package com.api.scilink.util;

import com.api.scilink.dtos.CientistaDto;
import com.api.scilink.models.*;
import org.springframework.beans.BeanUtils;

import java.util.List;
import java.util.stream.Collectors;

public class CientistaUtil {
    public static CientistaModel retornaCientistaModel (CientistaDto cientistaDto) {
        CientistaModel cientistaModel = new CientistaModel();

        BeanUtils.copyProperties(cientistaDto, cientistaModel);

        if (cientistaDto.getTelefones() != null) {
            cientistaModel.setTelefones(_retornaListaTelefonesModel(cientistaDto, cientistaModel));
        }

        if (cientistaDto.getRedesSociais() != null) {
            cientistaModel.setRedesSociais(_retornaListaRedesSociaisModel(cientistaDto));
        }

        if (cientistaDto.getAreasAtuacao() != null) {
            cientistaModel.setAreasAtuacao(_retornaListaAreasAtuacaoCientistaModel(cientistaDto, cientistaModel));
        }

        if (cientistaDto.getFormacoes() != null) {
            cientistaModel.setFormacoes(_retornaListaFormacoesModel(cientistaDto, cientistaModel));
        }

        return cientistaModel;
    }

    private static List<TelefoneModel> _retornaListaTelefonesModel (CientistaDto cientistaDto, CientistaModel cientistaModel) {
        return cientistaDto.getTelefones().stream().map(telefoneDto -> {
            TelefoneId telefoneIdTemp = new TelefoneId();
            BeanUtils.copyProperties(telefoneDto, telefoneIdTemp);

            return new TelefoneModel(telefoneIdTemp, cientistaModel);
        }).collect(Collectors.toList());
    }

    private static List<RedeSocialModel> _retornaListaRedesSociaisModel (CientistaDto cientistaDto) {
        return cientistaDto.getRedesSociais().stream().map(redeSocialDto -> {
            RedeSocialModel redeSocialModelTemp = new RedeSocialModel();

            BeanUtils.copyProperties(redeSocialDto, redeSocialModelTemp);

            return redeSocialModelTemp;
        }).collect(Collectors.toList());
    }

    private static List<AreaAtuacaoCientistaModel> _retornaListaAreasAtuacaoCientistaModel (CientistaDto cientistaDto, CientistaModel cientistaModel) {
        return cientistaDto.getAreasAtuacao().stream().map(areaAtuacaoCientistaDto -> {
            AreaAtuacaoCientistaId areaAtuacaoCientistaIdTemp = new AreaAtuacaoCientistaId();
            AreaAtuacaoCientistaModel areaAtuacaoCientistaModelTemp = new AreaAtuacaoCientistaModel();
            AreaAtuacaoModel areaAtuacaoModelTemp = new AreaAtuacaoModel();

            areaAtuacaoModelTemp.setNome(areaAtuacaoCientistaDto.getNome());

            areaAtuacaoCientistaModelTemp.setId(areaAtuacaoCientistaIdTemp);
            areaAtuacaoCientistaModelTemp.setCientista(cientistaModel);
            areaAtuacaoCientistaModelTemp.setAreaAtuacao(areaAtuacaoModelTemp);

            return areaAtuacaoCientistaModelTemp;
        }).collect(Collectors.toList());
    }

    private static List<FormacaoModel> _retornaListaFormacoesModel (CientistaDto cientistaDto, CientistaModel cientistaModel) {
        return cientistaDto.getFormacoes().stream().map(formacaoDto -> {
            FormacaoId formacaoId = new FormacaoId();
            FormacaoModel formacaoModelTemp = new FormacaoModel();
            TitulacaoModel titulacaoModelTemp = new TitulacaoModel();

            titulacaoModelTemp.setNome(formacaoDto.getNome());

            BeanUtils.copyProperties(formacaoDto, formacaoModelTemp);
            formacaoModelTemp.setFormacaoId(formacaoId);
            formacaoModelTemp.setCientista(cientistaModel);
            formacaoModelTemp.setTitulacao(titulacaoModelTemp);

            return formacaoModelTemp;
        }).collect(Collectors.toList());
    }
}
