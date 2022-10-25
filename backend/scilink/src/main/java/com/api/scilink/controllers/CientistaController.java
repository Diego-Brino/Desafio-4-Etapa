package com.api.scilink.controllers;

import com.api.scilink.dtos.CientistaDto;
import com.api.scilink.models.CientistaModel;
import com.api.scilink.services.cientista.CientistaServiceImpl;
import com.api.scilink.util.LogInfoUtil;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/cientistas") //TODO - Criar visualização de perfil / Editar / EndPoint para area de atuação, curso, titulação
public class CientistaController extends LogInfoUtil {
    private final CientistaServiceImpl cientistaServiceImpl;
    public CientistaController(CientistaServiceImpl cientistaServiceImpl) {
        this.cientistaServiceImpl = cientistaServiceImpl;
    }

    @GetMapping()
    public ResponseEntity<?> buscarTodosOsCientistas () { //TODO - Recuperar suas áreas de atuacao
        printLogInfo("Iniciando busca por todos os cientistas!");
        List<CientistaDto> listaCientistaDto = new ArrayList<>();

        for (CientistaModel cientistaModel : cientistaServiceImpl.buscarTodosOsCientistas()) {
            CientistaDto cientistaDtoTemp = new CientistaDto();
            BeanUtils.copyProperties(cientistaModel, cientistaDtoTemp);

            listaCientistaDto.add(cientistaDtoTemp);
        }

        return ResponseEntity.status(HttpStatus.OK).body(listaCientistaDto);
    }
}