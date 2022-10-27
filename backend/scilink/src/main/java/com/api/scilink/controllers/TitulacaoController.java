package com.api.scilink.controllers;

import com.api.scilink.dtos.TitulacaoDto;
import com.api.scilink.services.titulacao.TitulacaoServiceImpl;
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
@RequestMapping("/titulacoes")
public class TitulacaoController extends LogInfoUtil {
    private final TitulacaoServiceImpl titulacaoServiceImpl;
    public TitulacaoController(TitulacaoServiceImpl titulacaoServiceImpl) {
        this.titulacaoServiceImpl = titulacaoServiceImpl;
    }

    @GetMapping()
    public ResponseEntity<?> buscarTodosAsTitulacoes () {
        printLogInfo("Iniciando busca por todas os titulacoes!");
        List<TitulacaoDto> listaTitulacaoDto = new ArrayList<>();

        titulacaoServiceImpl.buscarTodasAsTitulacoes().forEach(titulacaoModel -> {
            TitulacaoDto titulacaoDTO = new TitulacaoDto();
            BeanUtils.copyProperties(titulacaoModel, titulacaoDTO);

            listaTitulacaoDto.add(titulacaoDTO);
        });

        return ResponseEntity.status(HttpStatus.OK).body(listaTitulacaoDto);
    }
}
