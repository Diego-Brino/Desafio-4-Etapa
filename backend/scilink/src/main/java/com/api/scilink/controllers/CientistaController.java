package com.api.scilink.controllers;

import com.api.scilink.dtos.CientistaDto;
import com.api.scilink.models.CientistaModel;
import com.api.scilink.services.cientista.CientistaServiceImpl;
import com.api.scilink.util.CientistaUtil;
import com.api.scilink.util.JwtTokenUtil;
import com.api.scilink.util.LogInfoUtil;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/cientistas") //TODO - Criar visualização de perfil / Editar / EndPoint para area de atuação, curso, titulação
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
                                                                   .map(cientistaModel -> CientistaUtil.retornaCientistaDto(cientistaModel, "publico"))
                                                                   .collect(Collectors.toList());

        return ResponseEntity.status(HttpStatus.OK).body(listaCientistaDto);
    }

    @GetMapping("/{cpfCientista}")
    public ResponseEntity<?> buscarMeuPerfil (@PathVariable(value = "cpfCientista") String cpfCientista,
                                              @RequestHeader("Authorization") String token) {
        printLogInfo("Iniciando busca por perfil!");
        CientistaModel cientistaModel = cientistaServiceImpl.findCientistaByCpf(cpfCientista);

        if (cientistaModel.equals(cientistaServiceImpl.findCientistaByCpf(jwtTokenUtil.getUsernameFromToken(token)))) {
            return ResponseEntity.status(HttpStatus.OK).body(CientistaUtil.retornaCientistaDto(cientistaModel, "privado-publico"));
        }

        return ResponseEntity.status(HttpStatus.OK).body(CientistaUtil.retornaCientistaDto(cientistaModel, "publico"));
    }

    @PutMapping("/editar/{cpfCientista}")
    public ResponseEntity<?> editarMeuPerfil (@PathVariable(value = "cpfCientista") String cpfCientista,
                                              @RequestBody @Valid CientistaDto cientistaDto,
                                              @RequestHeader("Authorization") String token) {
        CientistaModel cientistaModel = cientistaServiceImpl.findCientistaByCpf(cpfCientista);

        if (cientistaModel.equals(cientistaServiceImpl.findCientistaByCpf(jwtTokenUtil.getUsernameFromToken(token)))
                && Objects.equals(cientistaDto.getIdCientista(), cientistaModel.getIdCientista())) {
            printLogInfo("Iniciando alteração de perfil");
            CientistaModel cientistaModelNew = CientistaUtil.retornaCientistaModel(cientistaDto);

            cientistaServiceImpl.editarCientista(cientistaModelNew);
            return ResponseEntity.status(HttpStatus.OK).body("Cientista editado com sucesso!");
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Permissão para alteração de perfil negada!");
    }
}