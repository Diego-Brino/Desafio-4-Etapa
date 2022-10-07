package com.api.scilink.config.security;

import com.api.scilink.exceptions.CpfNaoEncontradoException;
import com.api.scilink.exceptions.SenhaIncorretaException;
import com.api.scilink.models.CientistaModel;
import com.api.scilink.repositories.CientistaRepository;
import com.api.scilink.util.LogInfoUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class AuthenticationProviderImpl extends LogInfoUtil implements org.springframework.security.authentication.AuthenticationProvider {
    @Autowired
    private CientistaRepository cientistaRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public Authentication authenticate(Authentication authentication) {
        CientistaModel cientistaModel  = cientistaRepository
                .findCientistaModelByCpfCientista(authentication.getPrincipal().toString())
                .orElseThrow(() -> new CpfNaoEncontradoException());

        if (!authentication.getCredentials().toString().equals(cientistaModel.getSnhCientista())) {
            printLogErro("Senha digitada incorreta!");
            throw new SenhaIncorretaException();
        }

        return new CpfPasswordAuthenticationToken(authentication.getPrincipal(),
                authentication.getCredentials(), Boolean.TRUE);
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return false;
    }
}
