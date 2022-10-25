package com.api.scilink.controllers;

import com.api.scilink.dtos.ProjetoDto;
import com.api.scilink.models.CientistaModel;
import com.api.scilink.models.ProjetoModel;
import com.api.scilink.services.cientista.CientistaServiceImpl;
import com.api.scilink.services.projeto.ProjetoServiceImpl;
import com.api.scilink.util.JwtTokenUtil;
import com.api.scilink.util.LogInfoUtil;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/scilink") //TODO - TROCAR PARA PROJETOS
public class ProjetoController extends LogInfoUtil {
    private final JwtTokenUtil jwtTokenUtil;
    private final ProjetoServiceImpl projetoServiceImpl;
    private final CientistaServiceImpl cientistaServiceImpl;
    public ProjetoController(ProjetoServiceImpl projetoServiceImpl, CientistaServiceImpl cientistaServiceImpl, JwtTokenUtil jwtTokenUtil) {
        this.projetoServiceImpl = projetoServiceImpl;
        this.cientistaServiceImpl = cientistaServiceImpl;
        this.jwtTokenUtil = jwtTokenUtil;
    }

    @GetMapping("/projetos")
    public ResponseEntity<?> buscarTodosOsProjetos () {
        printLogInfo("Iniciando busca por todos os projetos!");
        List<ProjetoDto> listaProjetosDto = new ArrayList<>();

        for (ProjetoModel projetoModel : projetoServiceImpl.buscarTodosOsProjetosPublicos()) {
            ProjetoDto projetoDtoTemp = new ProjetoDto();
            BeanUtils.copyProperties(projetoModel, projetoDtoTemp);
            BeanUtils.copyProperties(projetoModel.getCientista(), projetoDtoTemp);

            listaProjetosDto.add(projetoDtoTemp);
        }

        return ResponseEntity.status(HttpStatus.OK).body(listaProjetosDto);
    }

    @GetMapping("/meusProjetos") //TODO - TR0CAR PARA /Nome do cara e verificar se sou eu para listar projetos privados.
    public ResponseEntity<?> buscarMeusProjetos (@RequestHeader("Authorization") String token) {
        printLogInfo("iniciando busca por todos os meus projetos!");
        List<ProjetoDto> listaProjetosDto = new ArrayList<>();
        CientistaModel cientistaModel = cientistaServiceImpl.findCientistaModelByCpfCientista(jwtTokenUtil.getUsernameFromToken(token));

        for (ProjetoModel projetoModel : projetoServiceImpl.buscarTodosOsMeusProjetos(cientistaModel)) {
            ProjetoDto projetoDtoTemp = new ProjetoDto();
            BeanUtils.copyProperties(projetoModel, projetoDtoTemp);
            BeanUtils.copyProperties(projetoModel.getCientista(), projetoDtoTemp);

            listaProjetosDto.add(projetoDtoTemp);
        }

        return ResponseEntity.status(HttpStatus.OK).body(listaProjetosDto);
    }

    @PostMapping("/cadastrarProjeto")
    public ResponseEntity<?> cadastrarProjeto (@RequestBody @Valid ProjetoDto projetoDto,
                                               @RequestHeader("Authorization") String token) {
        printLogInfo("Novo cadastro iniciado!");
        ProjetoModel projetoModel = new ProjetoModel();
        CientistaModel cientistaModel = cientistaServiceImpl.findCientistaModelByCpfCientista(jwtTokenUtil.getUsernameFromToken(token));
        BeanUtils.copyProperties(projetoDto, projetoModel);
        projetoModel.setCientista(cientistaModel);

        projetoServiceImpl.cadastrarProjeto(projetoModel);

        return ResponseEntity.status(HttpStatus.CREATED).body("Projeto cadastrado com sucesso!");
    }

    //TODO - EDITAR PROJETO
}
