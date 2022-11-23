package com.api.scilink.controllers;

import com.api.scilink.dtos.ProjetoDto;
import com.api.scilink.models.CientistaModel;
import com.api.scilink.models.ProjetoModel;
import com.api.scilink.services.cientista.CientistaServiceImpl;
import com.api.scilink.services.projeto.ProjetoServiceImpl;
import com.api.scilink.util.CientistaUtil;
import com.api.scilink.util.JwtTokenUtil;
import com.api.scilink.util.LogInfoUtil;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/projetos")
public class ProjetoController extends LogInfoUtil {
    private final JwtTokenUtil jwtTokenUtil;
    private final ProjetoServiceImpl projetoServiceImpl;
    private final CientistaServiceImpl cientistaServiceImpl;
    public ProjetoController(ProjetoServiceImpl projetoServiceImpl, CientistaServiceImpl cientistaServiceImpl, JwtTokenUtil jwtTokenUtil) {
        this.projetoServiceImpl = projetoServiceImpl;
        this.cientistaServiceImpl = cientistaServiceImpl;
        this.jwtTokenUtil = jwtTokenUtil;
    }

    @GetMapping()
    public ResponseEntity<?> buscarTodosOsProjetos () {
        printLogInfo("Iniciando busca por todos os projetos!");

        List<ProjetoDto> listaProjetosDto = projetoServiceImpl.buscarTodosOsProjetosPublicos().stream().map(projetoModel -> {
            ProjetoDto projetoDtoTemp = new ProjetoDto();
            BeanUtils.copyProperties(projetoModel, projetoDtoTemp);
            BeanUtils.copyProperties(projetoModel.getCientista(), projetoDtoTemp);

            return projetoDtoTemp;
        }).collect(Collectors.toList());

        return ResponseEntity.status(HttpStatus.OK).body(listaProjetosDto);
    }

    @GetMapping("/{cpfCientista}")
    public ResponseEntity<?> buscarMeusProjetos (@PathVariable(value = "cpfCientista") String cpfCientista,
                                                 @RequestHeader("Authorization") String token) {
        printLogInfo("iniciando busca por todos os meus projetos!");
        CientistaModel cientistaModel = cientistaServiceImpl.findCientistaByCpf(cpfCientista);

        if (cientistaModel.equals(cientistaServiceImpl.findCientistaByCpf(jwtTokenUtil.getUsernameFromToken(token)))) {
            List<ProjetoDto> listaProjetosDto = _retornaListaProjetosDto(cientistaModel, "privado-publico");
            return ResponseEntity.status(HttpStatus.OK).body(listaProjetosDto);
        }

        return ResponseEntity.status(HttpStatus.OK).body(_retornaListaProjetosDto(cientistaModel, "publico"));
    }

    @PostMapping("/cadastrarProjeto")
    public ResponseEntity<?> cadastrarProjeto (@RequestBody @Valid ProjetoDto projetoDto,
                                               @RequestHeader("Authorization") String token) {
        printLogInfo("Novo cadastro de projeto iniciado!");
        ProjetoModel projetoModel = new ProjetoModel();
        CientistaModel cientistaModel = cientistaServiceImpl.findCientistaByCpf(jwtTokenUtil.getUsernameFromToken(token));
        BeanUtils.copyProperties(projetoDto, projetoModel);
        projetoModel.setCientista(cientistaModel);

        projetoServiceImpl.cadastrarProjeto(projetoModel);

        return ResponseEntity.status(HttpStatus.CREATED).body("Projeto cadastrado com sucesso!");
    }

    @PutMapping("/editar/{idProjeto}")
    public ResponseEntity<?> editarProjeto (@RequestBody @Valid ProjetoDto projetoDto,
                                            @RequestHeader("Authorization") String token,
                                            @PathVariable(value = "idProjeto") Integer idProjeto) {
        ProjetoModel projetoModel = projetoServiceImpl.buscarProjetoPorId(idProjeto);
        CientistaModel cientistaModel = cientistaServiceImpl.findCientistaByCpf(jwtTokenUtil.getUsernameFromToken(token));

        if (projetoModel.getCientista().equals(cientistaModel) && Objects.equals(projetoModel.getIdProjeto(), projetoDto.getIdProjeto())) {
            printLogInfo("Iniciando edição de projeto!");
            ProjetoModel projetoModelNew = new ProjetoModel();
            BeanUtils.copyProperties(projetoDto, projetoModelNew);
            projetoModelNew.setCientista(cientistaModel);

            projetoServiceImpl.editarProjeto(projetoModelNew);
            return ResponseEntity.status(HttpStatus.OK).body("Projeto editado com sucesso!");
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Permissão para alteração de projeto negada!");
    }

    private List<ProjetoDto> _retornaListaProjetosDto (CientistaModel cientistaModel, String tipoDeBusca) {
        if (tipoDeBusca.equals("publico")) {
            return projetoServiceImpl.buscarTodosOsMeusProjetosPublicosOuPrivados(cientistaModel, 1).stream().map(projetoModel -> {
                ProjetoDto projetoDtoTemp = new ProjetoDto();
                BeanUtils.copyProperties(projetoModel, projetoDtoTemp);
                BeanUtils.copyProperties(projetoModel.getCientista(), projetoDtoTemp);
                return projetoDtoTemp;
            }).collect(Collectors.toList());
        }
        return projetoServiceImpl.buscarTodosOsMeusProjetos(cientistaModel).stream().map(projetoModel -> {
            ProjetoDto projetoDtoTemp = new ProjetoDto();
            BeanUtils.copyProperties(projetoModel, projetoDtoTemp);
            BeanUtils.copyProperties(projetoModel.getCientista(), projetoDtoTemp);
            return projetoDtoTemp;
        }).collect(Collectors.toList());
    }
}
