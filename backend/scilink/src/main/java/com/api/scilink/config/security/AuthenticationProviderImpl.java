package com.api.scilink.config.security;

import com.api.scilink.exceptions.CpfNotFoundException;
import com.api.scilink.models.CientistaModel;
import com.api.scilink.repositories.CientistaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class AuthenticationProviderImpl implements org.springframework.security.authentication.AuthenticationProvider {

    @Autowired
    private CientistaRepository cientistaRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        CientistaModel cientistaModel  = cientistaRepository
                .findCientistaModelByCpfCientista(authentication.getPrincipal().toString())
                .orElseThrow(() -> new CpfNotFoundException());

        if (!authentication.getCredentials().toString().equals(cientistaModel.getSnh_cientista())) {
            throw new CpfNotFoundException();
        }

        return new CpfPasswordAuthenticationToken(authentication.getPrincipal(),
                authentication.getCredentials(), Boolean.TRUE);
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return false;
    }
}
