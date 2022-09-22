package com.api.scilink.config.security.filters;

import com.api.scilink.config.security.CpfPasswordAuthenticationToken;
import com.api.scilink.models.CientistaModel;
import com.api.scilink.services.LoginService;
import com.api.scilink.util.JwtTokenUtil;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class AuthenticationFilter extends OncePerRequestFilter {
    private final JwtTokenUtil jwtTokenUtil;
    private final LoginService loginService;

    public AuthenticationFilter(JwtTokenUtil jwtTokenUtil, LoginService loginService) {
        this.jwtTokenUtil = jwtTokenUtil;
        this.loginService = loginService;
    }

    @Override
    protected void doFilterInternal (HttpServletRequest request, HttpServletResponse response,
                                        FilterChain chain) throws ServletException, IOException {

        //Recupera o token do header
        final String token = request.getHeader("Authorization");
        String cpf = null;

        //Tenta achar o cpf do usuário
        if (token != null) {
            try {
                cpf = jwtTokenUtil.getUsernameFromToken(token);
            } catch (IllegalArgumentException e) {
                throw new IllegalArgumentException("Impossível recuperar o token!");
            } catch (ExpiredJwtException e) {
                System.out.println("Token expirado!");
            }
        }

        if (cpf != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            CientistaModel cientistaModel = loginService.loadUserByCpf(jwtTokenUtil.getUsernameFromToken(token));

            if(jwtTokenUtil.tokenIsValid(token, cientistaModel)){

                //Gera um novo token para o usuário
                String newJwtToken = jwtTokenUtil.generateToken(cientistaModel);
                response.setHeader("Authorization", newJwtToken);

                CpfPasswordAuthenticationToken authenticationToken = new CpfPasswordAuthenticationToken
                        (cientistaModel.getCpfCientista(),
                                cientistaModel.getSnhCientista(),
                                        Boolean.TRUE);
                SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            }
        }
        chain.doFilter(request, response);
    }
}
