package com.api.scilink.controllers;

import com.api.scilink.exceptions.CpfNotFoundException;
import com.api.scilink.models.CientistaModel;
import com.api.scilink.services.LoginService;
import com.api.scilink.config.security.CpfPasswordAuthenticationToken;
import com.api.scilink.util.JwtTokenUtil;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/login")
public class LoginController {
    private final AuthenticationManager authenticationManager;
    private final LoginService loginService;
    private final JwtTokenUtil jwtTokenUtil;

    public LoginController(AuthenticationManager authenticationManager, LoginService loginService, JwtTokenUtil jwtTokenUtil) {
        this.authenticationManager = authenticationManager;
        this.loginService = loginService;
        this.jwtTokenUtil = jwtTokenUtil;
    }

    //Quando o usuário entrar na página de login, ele deverá passar suas credenciais e caso estejam válidas
    //Será gerado um token para o mesmo continuar sua navegação
    @PostMapping("/")
    public ResponseEntity<?> createAuthenticationToken (@RequestBody CientistaModel cientistaModel) throws CpfNotFoundException {
        authenticationManager.authenticate(new CpfPasswordAuthenticationToken(cientistaModel.getCpf_cientista(),
                cientistaModel.getSnh_cientista(), Boolean.FALSE));

        UserDetails userDetails = loginService.loadUserByCpf(cientistaModel.getCpf_cientista());
        final String token = jwtTokenUtil.generateToken(userDetails);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", token);

        return ResponseEntity.ok()
                .headers(headers)
                .body("");
    }
}
