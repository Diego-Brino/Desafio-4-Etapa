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
        final String token = request.getHeader("Authorization");
        String cpf = null;

        if (token != null) {
            try {
                cpf = jwtTokenUtil.getUsernameFromToken(token);
            } catch (IllegalArgumentException e) {
                System.out.println("Impossível de recuperar o token!");
            } catch (ExpiredJwtException e) {
                System.out.println("O token já está expirado!");
            }
        }

        if (cpf != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            CientistaModel cientistaModel = loginService.loadUserByCpf(jwtTokenUtil.getUsernameFromToken(token));

            if(jwtTokenUtil.validateToken(token, cientistaModel)){

                // Refresh the token when already authenticated
                String newJwtToken = jwtTokenUtil.generateToken(cientistaModel);
                response.setHeader("Authorization", newJwtToken);

                CpfPasswordAuthenticationToken authenticationToken = new CpfPasswordAuthenticationToken
                        (cientistaModel.getCpf_cientista(),
                                cientistaModel.getSnh_cientista(),
                                        Boolean.TRUE);
                SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            }
        }
        chain.doFilter(request, response);
    }
}
