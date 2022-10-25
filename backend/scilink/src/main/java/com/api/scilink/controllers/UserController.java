package com.api.scilink.controllers;

import com.api.scilink.config.security.CpfPasswordAuthenticationToken;
import com.api.scilink.dtos.CientistaDto;
import com.api.scilink.dtos.LoginDto;
import com.api.scilink.exceptions.user.CpfJaCadastradoException;
import com.api.scilink.models.CientistaModel;
import com.api.scilink.services.user.UserServiceImpl;
import com.api.scilink.util.JwtTokenUtil;
import com.api.scilink.util.LogInfoUtil;
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
@RequestMapping("/user") //TODO - TROCAR PARA /AUTH
public class UserController extends LogInfoUtil {
    private final AuthenticationManager authenticationManager;
    private final UserServiceImpl userServiceImpl;
    private final JwtTokenUtil jwtTokenUtil;
    public UserController(AuthenticationManager authenticationManager, UserServiceImpl userServiceImpl, JwtTokenUtil jwtTokenUtil) {
        this.authenticationManager = authenticationManager;
        this.userServiceImpl = userServiceImpl;
        this.jwtTokenUtil = jwtTokenUtil;
    }

    //Quando o usuário entrar na página de login, ele deverá passar suas credenciais e caso estejam válidas
    //Será gerado um token para o mesmo continuar sua navegação
    @PostMapping({"/login", ""})
    public ResponseEntity<?> createAuthenticationToken (@RequestBody @Valid LoginDto loginDto) {
        CientistaModel cientistaModel = new CientistaModel();
        BeanUtils.copyProperties(loginDto, cientistaModel);

        printLogInfo("Usuário tentando conexão!");

        authenticationManager.authenticate(new CpfPasswordAuthenticationToken(cientistaModel.getCpfCientista(),
                cientistaModel.getSnhCientista(), Boolean.FALSE));

        final String token = jwtTokenUtil.doGenerateToken(new HashMap<>(), cientistaModel.getCpfCientista());

        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", token);

        return ResponseEntity.ok()
                .headers(headers)
                .body(token);
    }

    @PostMapping("/cadastrarCientista")
    public ResponseEntity<?> cadastroNovoCientista (@RequestBody @Valid CientistaDto cientistaDto) {
        printLogInfo("Novo cadastro iniciado!");
        CientistaModel cientistaModel = new CientistaModel();
        BeanUtils.copyProperties(cientistaDto, cientistaModel);

        return ResponseEntity.status(HttpStatus.CREATED).body(userServiceImpl.saveCientista(cientistaModel));
    }

    @PostMapping("/validarCpf/{CPF}")
    public ResponseEntity<?> validarCpf (@PathVariable(value = "CPF") String cpf) {
        if (userServiceImpl.existsCientistaByCpf(cpf)) {
            throw new CpfJaCadastradoException();
        }
        return ResponseEntity.status(HttpStatus.OK).body("Cpf válido para utilizar!");
    }
}
