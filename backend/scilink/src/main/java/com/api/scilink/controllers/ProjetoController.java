package com.api.scilink.controllers;

import com.api.scilink.dtos.ProjetoDto;
import com.api.scilink.models.ProjetoModel;
import com.api.scilink.services.ProjetoServiceImpl;
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
@RequestMapping("/SciLink")
public class ProjetoController extends LogInfoUtil {
    private final ProjetoServiceImpl projetoServiceImpl;
    public ProjetoController(ProjetoServiceImpl projetoServiceImpl) {
        this.projetoServiceImpl = projetoServiceImpl;
    }

    @GetMapping()
    public ResponseEntity<?> buscarTodosOsProjetos () {
        List<ProjetoDto> listaProjetosDto = new ArrayList<>();

        for (ProjetoModel projetoModel : projetoServiceImpl.buscarTodosOsProjetosPublicos()) {
            ProjetoDto projetoDtoTemp = new ProjetoDto();
            BeanUtils.copyProperties(projetoModel, projetoDtoTemp);
            BeanUtils.copyProperties(projetoModel.getCientista(), projetoDtoTemp);

            listaProjetosDto.add(projetoDtoTemp);
        }

        return ResponseEntity.status(HttpStatus.OK).body(listaProjetosDto);
    }
}
