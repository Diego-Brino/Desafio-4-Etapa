package com.api.scilink.controllers;

import com.api.scilink.dtos.CientistaDto;
import com.api.scilink.exceptions.CpfNotFoundException;
import com.api.scilink.models.CientistaModel;
import com.api.scilink.services.LoginService;
import com.api.scilink.config.security.CpfPasswordAuthenticationToken;
import com.api.scilink.util.JwtTokenUtil;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/login")
public class LoginController {
    private final AuthenticationManager authenticationManager;
    private final LoginService loginService;
    private final JwtTokenUtil jwtTokenUtil;

    @Autowired
    public LoginController(AuthenticationManager authenticationManager, LoginService loginService, JwtTokenUtil jwtTokenUtil) {
        this.authenticationManager = authenticationManager;
        this.loginService = loginService;
        this.jwtTokenUtil = jwtTokenUtil;
    }

    //Quando o usuário entrar na página de login, ele deverá passar suas credenciais e caso estejam válidas
    //Será gerado um token para o mesmo continuar sua navegação
    @PostMapping()
    public ResponseEntity<?> createAuthenticationToken (@RequestBody CientistaDto cientistaDto) {
        CientistaModel cientistaModel = new CientistaModel();
        BeanUtils.copyProperties(cientistaDto, cientistaModel);

        authenticationManager.authenticate(new CpfPasswordAuthenticationToken(cientistaModel.getCpfCientista(),
                cientistaModel.getSnh_cientista(), Boolean.FALSE));

        final String token = jwtTokenUtil.doGenerateToken(new HashMap<>(), cientistaModel.getCpfCientista());

        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", token);

        return ResponseEntity.ok()
                .headers(headers)
                .body(token);
    }
}
