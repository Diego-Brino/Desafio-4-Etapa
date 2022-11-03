package com.api.scilink.controllers;

import com.api.scilink.dtos.*;
import com.api.scilink.models.CientistaModel;
import com.api.scilink.services.cientista.CientistaServiceImpl;
import com.api.scilink.util.LogInfoUtil;
import org.springframework.beans.BeanUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/cientistas") //TODO - Criar visualização de perfil / Editar
public class CientistaController extends LogInfoUtil {
    private final CientistaServiceImpl cientistaServiceImpl;
    public CientistaController(CientistaServiceImpl cientistaServiceImpl) {
        this.cientistaServiceImpl = cientistaServiceImpl;
    }

    @GetMapping()
    public ResponseEntity<?> buscarTodosOsCientistas () {
        printLogInfo("Iniciando busca por todos os cientistas!");

        List<CientistaDto> listaCientistaDto = cientistaServiceImpl.buscarTodosOsCientistas().stream().map(cientistaModel -> {
            CientistaDto cientistaDtoTemp = new CientistaDto();

            BeanUtils.copyProperties(cientistaModel, cientistaDtoTemp);
            cientistaDtoTemp.setProjetos(_retornaListaProjetosDto(cientistaModel));
            cientistaDtoTemp.setTelefones(_retornaListaTelefonesDto(cientistaModel));
            cientistaDtoTemp.setRedesSociais(_retornaListaRedesSociaisDto(cientistaModel));
            cientistaDtoTemp.setAreasAtuacao(_retornaListaAreasAtuacaoCientistaDto(cientistaModel));
            cientistaDtoTemp.setFormacoes(_retornaListaFormacoesDto(cientistaModel));

            return cientistaDtoTemp;
        }).collect(Collectors.toList());

        return ResponseEntity.status(HttpStatus.OK).body(listaCientistaDto);
    }

    //region Métodos privados

    private List<ProjetoDto> _retornaListaProjetosDto (CientistaModel cientistaModel) {
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

    private List<TelefoneDto> _retornaListaTelefonesDto (CientistaModel cientistaModel) {
        return cientistaModel.getTelefones().stream().map(telefoneModel -> {
            TelefoneDto telefoneDtoTemp = new TelefoneDto();

            BeanUtils.copyProperties(telefoneModel.getTelefoneId(), telefoneDtoTemp);

            return telefoneDtoTemp;
        }).collect(Collectors.toList());
    }

    private List<RedeSocialDto> _retornaListaRedesSociaisDto (CientistaModel cientistaModel) {
        return cientistaModel.getRedesSociais().stream().map(redeSocialModel -> {
            RedeSocialDto redeSocialDtoTemp = new RedeSocialDto();

            BeanUtils.copyProperties(redeSocialModel, redeSocialDtoTemp);

            return redeSocialDtoTemp;
        }).collect(Collectors.toList());
    }

    private List<AreaAtuacaoCientistaDto> _retornaListaAreasAtuacaoCientistaDto (CientistaModel cientistaModel) {
        return cientistaModel.getAreasAtuacao().stream().map(areaAtuacaoCientistaModel -> {
            AreaAtuacaoCientistaDto areaAtuacaoCientistaDtoTemp = new AreaAtuacaoCientistaDto();

            areaAtuacaoCientistaDtoTemp.setNome(areaAtuacaoCientistaModel.getAreaAtuacao().getNome());

            return areaAtuacaoCientistaDtoTemp;
        }).collect(Collectors.toList());
    }

    private List<FormacaoDto> _retornaListaFormacoesDto (CientistaModel cientistaModel) {
        return cientistaModel.getFormacoes().stream().map(formacaoModel -> {
            FormacaoDto formacaoDto = new FormacaoDto();

            BeanUtils.copyProperties(formacaoModel, formacaoDto);
            formacaoDto.setNome(formacaoModel.getTitulacao().getNome());

            return formacaoDto;
        }).collect(Collectors.toList());
    }

    //endregion
}