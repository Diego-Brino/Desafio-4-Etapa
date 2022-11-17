package com.api.scilink.util;

import com.api.scilink.dtos.*;
import com.api.scilink.models.*;
import org.springframework.beans.BeanUtils;

import java.util.List;
import java.util.stream.Collectors;

public class CientistaUtil {
    //Retornando cientista Model
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

    //Retornando cientista Dto
    public static CientistaDto retornaCientistaDto (CientistaModel cientistaModel, String tipoBuscaProjeto) {
        CientistaDto cientistaDto = new CientistaDto();

        BeanUtils.copyProperties(cientistaModel, cientistaDto);

        if (tipoBuscaProjeto.equals("publico")) {
            cientistaDto.setProjetos(_retornaListaProjetosPublicosDto(cientistaModel));
        }else{
            cientistaDto.setProjetos(_retornaListaProjetosDto(cientistaModel));
        }

        cientistaDto.setTelefones(_retornaListaTelefonesDto(cientistaModel));
        cientistaDto.setRedesSociais(_retornaListaRedesSociaisDto(cientistaModel));
        cientistaDto.setAreasAtuacao(_retornaListaAreasAtuacaoCientistaDto(cientistaModel));
        cientistaDto.setFormacoes(_retornaListaFormacoesDto(cientistaModel));

        return cientistaDto;
    }

    private static List<ProjetoDto> _retornaListaProjetosPublicosDto (CientistaModel cientistaModel) {
        return cientistaModel.getProjetos()
                .stream()
                .filter(projetoModel -> projetoModel.getPublico() != 0)
                .map(projetoModel -> {
                    ProjetoDto projetoDto = new ProjetoDto();

                    if (projetoModel.getPublico() != 0) {
                        BeanUtils.copyProperties(projetoModel, projetoDto);
                        BeanUtils.copyProperties(projetoModel.getCientista(), projetoDto);
                    }

                    return projetoDto;
                }).collect(Collectors.toList());
    }

    private static List<ProjetoDto> _retornaListaProjetosDto (CientistaModel cientistaModel) {
        return cientistaModel.getProjetos()
                .stream()
                .map(projetoModel -> {
                    ProjetoDto projetoDto = new ProjetoDto();

                    BeanUtils.copyProperties(projetoModel, projetoDto);
                    BeanUtils.copyProperties(projetoModel.getCientista(), projetoDto);

                    return projetoDto;
                }).collect(Collectors.toList());
    }

    private static List<TelefoneDto> _retornaListaTelefonesDto (CientistaModel cientistaModel) {
        return cientistaModel.getTelefones().stream().map(telefoneModel -> {
            TelefoneDto telefoneDtoTemp = new TelefoneDto();

            BeanUtils.copyProperties(telefoneModel.getTelefoneId(), telefoneDtoTemp);

            return telefoneDtoTemp;
        }).collect(Collectors.toList());
    }

    private static List<RedeSocialDto> _retornaListaRedesSociaisDto (CientistaModel cientistaModel) {
        return cientistaModel.getRedesSociais().stream().map(redeSocialModel -> {
            RedeSocialDto redeSocialDtoTemp = new RedeSocialDto();

            BeanUtils.copyProperties(redeSocialModel, redeSocialDtoTemp);

            return redeSocialDtoTemp;
        }).collect(Collectors.toList());
    }

    private static List<AreaAtuacaoCientistaDto> _retornaListaAreasAtuacaoCientistaDto (CientistaModel cientistaModel) {
        return cientistaModel.getAreasAtuacao().stream().map(areaAtuacaoCientistaModel -> {
            AreaAtuacaoCientistaDto areaAtuacaoCientistaDtoTemp = new AreaAtuacaoCientistaDto();

            areaAtuacaoCientistaDtoTemp.setIdAreaAtuacao(areaAtuacaoCientistaModel.getAreaAtuacao().getIdAreaAtuacao());
            areaAtuacaoCientistaDtoTemp.setIdCientista(areaAtuacaoCientistaModel.getCientista().getIdCientista());
            areaAtuacaoCientistaDtoTemp.setNome(areaAtuacaoCientistaModel.getAreaAtuacao().getNome());

            return areaAtuacaoCientistaDtoTemp;
        }).collect(Collectors.toList());
    }

    private static List<FormacaoDto> _retornaListaFormacoesDto (CientistaModel cientistaModel) {
        return cientistaModel.getFormacoes().stream().map(formacaoModel -> {
            FormacaoDto formacaoDto = new FormacaoDto();

            BeanUtils.copyProperties(formacaoModel, formacaoDto);
            BeanUtils.copyProperties(formacaoModel.getFormacaoId(), formacaoDto);

            formacaoDto.setNome(formacaoModel.getTitulacao().getNome());

            return formacaoDto;
        }).collect(Collectors.toList());
    }
}
