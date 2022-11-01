package com.api.scilink.controllers;

import com.api.scilink.config.security.CpfPasswordAuthenticationToken;
import com.api.scilink.dtos.*;
import com.api.scilink.exceptions.auth.*;
import com.api.scilink.models.*;
import com.api.scilink.services.auth.AuthServiceImpl;
import com.api.scilink.util.JwtTokenUtil;
import com.api.scilink.util.LogInfoUtil;
import com.api.scilink.util.Util;
import org.springframework.beans.BeanUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/auth")
public class AuthController extends LogInfoUtil {
    private final AuthenticationManager authenticationManager;
    private final AuthServiceImpl authServiceImpl;
    private final JwtTokenUtil jwtTokenUtil;
    public AuthController(AuthenticationManager authenticationManager, AuthServiceImpl authServiceImpl, JwtTokenUtil jwtTokenUtil) {
        this.authenticationManager = authenticationManager;
        this.authServiceImpl = authServiceImpl;
        this.jwtTokenUtil = jwtTokenUtil;
    }

    @PostMapping("/login")
    public ResponseEntity<?> createAuthenticationToken (@RequestBody @Valid LoginDto loginDto) {
        CientistaModel cientistaModel = new CientistaModel();
        BeanUtils.copyProperties(loginDto, cientistaModel);

        printLogInfo("Usuário tentando conexão!");

        authenticationManager.authenticate(new CpfPasswordAuthenticationToken(cientistaModel.getCpf(),
                cientistaModel.getSenha(), Boolean.FALSE));

        final String token = jwtTokenUtil.doGenerateToken(new HashMap<>(), cientistaModel.getCpf());

        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", token);

        return ResponseEntity.ok()
                .headers(headers)
                .body(token);
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastroNovoCientista (@RequestBody @Valid CientistaDto cientistaDto) {
        printLogInfo("Novo cadastro iniciado!");
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

        authServiceImpl.saveCientista(cientistaModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(cientistaDto);
    }

    @PostMapping("/{valor}")
    public ResponseEntity<?> validarCamposCadastro (@PathVariable(value = "valor") String valor,
                                                    @RequestParam String tipoValidacao) {
        switch (tipoValidacao) {
            case "cpf":
                if (authServiceImpl.existsCientistaByCpf(valor)) {
                    throw new CpfJaCadastradoException();
                }
                if (!Util.validaCpf(valor)) {
                    throw new CpfInvalidoException();
                }
                return ResponseEntity.status(HttpStatus.OK).body("Cpf válido para utilizar!");

            case "lattes":
                if (authServiceImpl.existsCientistaByLattes(valor)) {
                    throw new LattesJaCadastradoException();
                }
                return ResponseEntity.status(HttpStatus.OK).body("Lattes válido para utilizar!");

            case "email":
                if (authServiceImpl.existsCientistaByEmail(valor)) {
                    throw new EmailJaCadastradoException();
                }
                if (!Util.validaEmail(valor)) {
                    throw new EmailInvalidoException();
                }
                return ResponseEntity.status(HttpStatus.OK).body("E-mail válido para utilizar!");

            default:
                return ResponseEntity.status(HttpStatus.OK).body("Parâmetro informado é inválido!");
        }
    }

    private List<TelefoneModel> _retornaListaTelefonesModel (CientistaDto cientistaDto, CientistaModel cientistaModel) {
        List<TelefoneModel> listaTelefoneModel = new ArrayList<>();

        cientistaDto.getTelefones().forEach(telefoneDto -> {
            TelefoneId telefoneIdTemp = new TelefoneId();
            BeanUtils.copyProperties(telefoneDto, telefoneIdTemp);
            TelefoneModel telefoneModelTemp = new TelefoneModel(telefoneIdTemp, cientistaModel);
            listaTelefoneModel.add(telefoneModelTemp);
        });

        return listaTelefoneModel;
    }
    private List<RedeSocialModel> _retornaListaRedesSociaisModel (CientistaDto cientistaDto) {
        List<RedeSocialModel> listaRedeSocialModel = new ArrayList<>();

        cientistaDto.getRedesSociais().forEach(redeSocialDto -> {
            RedeSocialModel redeSocialModelTemp = new RedeSocialModel();
            BeanUtils.copyProperties(redeSocialDto, redeSocialModelTemp);
            listaRedeSocialModel.add(redeSocialModelTemp);
        });

        return listaRedeSocialModel;
    }
    private List<AreaAtuacaoCientistaModel> _retornaListaAreasAtuacaoCientistaModel (CientistaDto cientistaDto, CientistaModel cientistaModel) {
        List<AreaAtuacaoCientistaModel> listaAreaAtuacaoCientistaModel = new ArrayList<>();

        cientistaDto.getAreasAtuacao().forEach(areaAtuacaoCientistaDto -> {
            AreaAtuacaoCientistaId areaAtuacaoCientistaIdTemp = new AreaAtuacaoCientistaId();
            AreaAtuacaoCientistaModel areaAtuacaoCientistaModelTemp = new AreaAtuacaoCientistaModel();
            AreaAtuacaoModel areaAtuacaoModelTemp = new AreaAtuacaoModel();

            areaAtuacaoModelTemp.setNome(areaAtuacaoCientistaDto.getNome());

            areaAtuacaoCientistaModelTemp.setId(areaAtuacaoCientistaIdTemp);
            areaAtuacaoCientistaModelTemp.setCientista(cientistaModel);
            areaAtuacaoCientistaModelTemp.setAreaAtuacao(areaAtuacaoModelTemp);

            listaAreaAtuacaoCientistaModel.add(areaAtuacaoCientistaModelTemp);
        });

        return listaAreaAtuacaoCientistaModel;
    }
    private List<FormacaoModel> _retornaListaFormacoesModel (CientistaDto cientistaDto, CientistaModel cientistaModel) {
        List<FormacaoModel> listaFormacaoModel = new ArrayList<>();

        cientistaDto.getFormacoes().forEach(formacaoDto -> {
            FormacaoId formacaoId = new FormacaoId();
            FormacaoModel formacaoModelTemp = new FormacaoModel();
            TitulacaoModel titulacaoModelTemp = new TitulacaoModel();

            titulacaoModelTemp.setNome(formacaoDto.getNome());

            BeanUtils.copyProperties(formacaoDto, formacaoModelTemp);
            formacaoModelTemp.setFormacaoId(formacaoId);
            formacaoModelTemp.setCientista(cientistaModel);
            formacaoModelTemp.setTitulacao(titulacaoModelTemp);

            listaFormacaoModel.add(formacaoModelTemp);
        });

        return listaFormacaoModel;
    }
}