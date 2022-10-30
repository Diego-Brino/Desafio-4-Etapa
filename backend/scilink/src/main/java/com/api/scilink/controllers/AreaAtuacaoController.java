package com.api.scilink.controllers;

import com.api.scilink.dtos.AreaAtuacaoDto;
import com.api.scilink.dtos.TitulacaoDto;
import com.api.scilink.services.areaAtuacao.AreaAtuacaoService;
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
@RequestMapping("/areasAtuacao")
public class AreaAtuacaoController extends LogInfoUtil {
    private final AreaAtuacaoService areaAtuacaoServiceImpl;
    public AreaAtuacaoController(AreaAtuacaoService areaAtuacaoServiceImpl) {
        this.areaAtuacaoServiceImpl = areaAtuacaoServiceImpl;
    }

    @GetMapping()
    public ResponseEntity<?> buscarTodosAsAreasDeAtuacao () {
        printLogInfo("Iniciando busca por todas as Areas de Atuacao!");
        List<AreaAtuacaoDto> listaAreaAtuacaoDto = new ArrayList<>();

        areaAtuacaoServiceImpl.buscarTodasAsAreasAtuacao().forEach(areaAtuacaoModel -> {
            AreaAtuacaoDto areaAtuacaoDto = new AreaAtuacaoDto();
            BeanUtils.copyProperties(areaAtuacaoModel, areaAtuacaoDto);

            listaAreaAtuacaoDto.add(areaAtuacaoDto);
        });

        return ResponseEntity.status(HttpStatus.OK).body(listaAreaAtuacaoDto);
    }
}
