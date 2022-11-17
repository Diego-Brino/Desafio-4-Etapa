package com.api.scilink.controllers;

import com.api.scilink.config.security.CpfPasswordAuthenticationToken;
import com.api.scilink.dtos.CientistaDto;
import com.api.scilink.dtos.LoginDto;
import com.api.scilink.exceptions.auth.*;
import com.api.scilink.models.CientistaModel;
import com.api.scilink.services.auth.AuthServiceImpl;
import com.api.scilink.util.CientistaUtil;
import com.api.scilink.util.JwtTokenUtil;
import com.api.scilink.util.LogInfoUtil;
import com.api.scilink.util.Util;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;

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
        CientistaModel cientistaModel = CientistaUtil.retornaCientistaModel(cientistaDto);

        authServiceImpl.saveCientista(cientistaModel);
        return ResponseEntity.status(HttpStatus.CREATED).body("Usuário criado com sucesso!");
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
}