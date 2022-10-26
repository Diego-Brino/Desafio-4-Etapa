package com.api.scilink.controllers;

import com.api.scilink.config.security.CpfPasswordAuthenticationToken;
import com.api.scilink.dtos.CientistaDto;
import com.api.scilink.dtos.LoginDto;
import com.api.scilink.exceptions.auth.*;
import com.api.scilink.models.CientistaModel;
import com.api.scilink.services.auth.AuthServiceImpl;
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
import java.util.InputMismatchException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

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

        return ResponseEntity.status(HttpStatus.CREATED).body(authServiceImpl.saveCientista(cientistaModel));
    }

    @PostMapping("/{valor}")
    public ResponseEntity<?> validarCamposCadastro (@PathVariable(value = "valor") String valor,
                                                    @RequestParam String tipoValidacao) {
        switch (tipoValidacao) {
            case "cpf":
                if (authServiceImpl.existsCientistaByCpf(valor)) {
                    throw new CpfJaCadastradoException();
                }
                if (!_validaCpf(valor)) {
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
                if (!_validaEmail(valor)) {
                    throw new EmailInvalidoException();
                }
                return ResponseEntity.status(HttpStatus.OK).body("E-mail válido para utilizar!");

            default:
                return ResponseEntity.status(HttpStatus.OK).body("Parâmetro informado é inválido!");
        }
    }

    private static Boolean _validaCpf (String cpf) {
        if (cpf.equals("00000000000") ||
                cpf.equals("11111111111") ||
                cpf.equals("22222222222") || cpf.equals("33333333333") ||
                cpf.equals("44444444444") || cpf.equals("55555555555") ||
                cpf.equals("66666666666") || cpf.equals("77777777777") ||
                cpf.equals("88888888888") || cpf.equals("99999999999") ||
                (cpf.length() != 11))
            return(false);

        char dig10, dig11;
        int sm, i, r, num, peso;

        try {
            sm = 0;
            peso = 10;
            for (i=0; i<9; i++) {
                num = (int)(cpf.charAt(i) - 48);
                sm = sm + (num * peso);
                peso = peso - 1;
            }

            r = 11 - (sm % 11);
            if ((r == 10) || (r == 11))
                dig10 = '0';
            else dig10 = (char)(r + 48);

            sm = 0;
            peso = 11;
            for(i=0; i<10; i++) {
                num = (int)(cpf.charAt(i) - 48);
                sm = sm + (num * peso);
                peso = peso - 1;
            }

            r = 11 - (sm % 11);
            if ((r == 10) || (r == 11))
                dig11 = '0';
            else dig11 = (char)(r + 48);

            if ((dig10 == cpf.charAt(9)) && (dig11 == cpf.charAt(10)))
                return(true);
            else return(false);
        } catch (InputMismatchException erro) {
            return(false);
        }
    }

    public static boolean _validaEmail (String email) {
        boolean valido = false;
        if (email != null && email.length() > 0) {
            String expression = "^[\\w\\.-]+@([\\w\\-]+\\.)+[A-Z]{2,4}$";
            Pattern pattern = Pattern.compile(expression, Pattern.CASE_INSENSITIVE);
            Matcher matcher = pattern.matcher(email);
            if (matcher.matches()) {
                valido = true;
            }
        }
        return valido;
    }
}