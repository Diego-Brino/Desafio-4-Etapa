package com.api.scilink.controllers;

import com.api.scilink.dtos.*;
import com.api.scilink.models.*;
import com.api.scilink.services.cientista.CientistaServiceImpl;
import com.api.scilink.util.CientistaUtil;
import com.api.scilink.util.JwtTokenUtil;
import com.api.scilink.util.LogInfoUtil;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/cientistas")
public class CientistaController extends LogInfoUtil {
    private final CientistaServiceImpl cientistaServiceImpl;
    private final JwtTokenUtil jwtTokenUtil;
    public CientistaController(CientistaServiceImpl cientistaServiceImpl, JwtTokenUtil jwtTokenUtil) {
        this.cientistaServiceImpl = cientistaServiceImpl;
        this.jwtTokenUtil = jwtTokenUtil;
    }

    @GetMapping()
    public ResponseEntity<?> buscarTodosOsCientistas () {
        printLogInfo("Iniciando busca por todos os cientistas!");

        List<CientistaDto> listaCientistaDto = cientistaServiceImpl.buscarTodosOsCientistas()
                                                                   .stream()
                                                                   .map(cientistaModel -> _retornaCientistaDto(cientistaModel, "publico"))
                                                                   .collect(Collectors.toList());

        return ResponseEntity.status(HttpStatus.OK).body(listaCientistaDto);
    }

    @GetMapping("/{cpfCientista}")
    public ResponseEntity<?> buscarMeuPerfil (@PathVariable(value = "cpfCientista") String cpfCientista,
                                              @RequestHeader("Authorization") String token) {
        printLogInfo("Iniciando busca por perfil!");
        CientistaModel cientistaModel = cientistaServiceImpl.findCientistaByCpf(cpfCientista);

        if (cientistaModel.equals(cientistaServiceImpl.findCientistaByCpf(jwtTokenUtil.getUsernameFromToken(token)))) {
            return ResponseEntity.status(HttpStatus.OK).body(_retornaCientistaDto(cientistaModel, "privado-publico"));
        }

        return ResponseEntity.status(HttpStatus.OK).body(_retornaCientistaDto(cientistaModel, "publico"));
    }

    @PutMapping("/editar/{cpfCientista}")
    public ResponseEntity<?> editarMeuPerfil (@PathVariable(value = "cpfCientista") String cpfCientista,
                                              @RequestBody @Valid CientistaDto cientistaDto,
                                              @RequestHeader("Authorization") String token) {
        CientistaModel cientistaModelTemp = cientistaServiceImpl.findCientistaByCpf(cpfCientista);
        if (cientistaModelTemp.equals(cientistaServiceImpl.findCientistaByCpf(jwtTokenUtil.getUsernameFromToken(token)))) {
            printLogInfo("Iniciando alteração de perfil");
            BeanUtils.copyProperties(CientistaUtil.retornaCientistaModel(cientistaDto), cientistaModelTemp);

            cientistaServiceImpl.editarCientista(cientistaModelTemp);
            return ResponseEntity.status(HttpStatus.OK).body(cientistaDto);
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Permissão para alteração de perfil negada!");
    }

    //region Métodos privados

    private List<ProjetoDto> _retornaListaProjetosPublicosDto (CientistaModel cientistaModel) {
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

    private List<ProjetoDto> _retornaListaProjetosDto (CientistaModel cientistaModel) {
        return cientistaModel.getProjetos()
                .stream()
                .map(projetoModel -> {
                    ProjetoDto projetoDto = new ProjetoDto();

                    BeanUtils.copyProperties(projetoModel, projetoDto);
                    BeanUtils.copyProperties(projetoModel.getCientista(), projetoDto);

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

    private CientistaDto _retornaCientistaDto (CientistaModel cientistaModel, String tipoBuscaProjeto) {
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

    //endregion
}