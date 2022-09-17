package com.api.scilink.config.security;

import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public class CpfPasswordAuthenticationToken extends AbstractAuthenticationToken {
    private static final long serialVersionUID = 1L;
    private final Object principal;
    private final Object credentials;

    public CpfPasswordAuthenticationToken (Collection<? extends GrantedAuthority> authorities, Object principal, Object credentials, Boolean authenticated) {
        super(authorities);
        this.principal = principal;
        this.credentials = credentials;
        this.setAuthenticated(authenticated);
    }

    public CpfPasswordAuthenticationToken(Object principal, Object credentials, Boolean authenticated) {
        super(null);
        this.principal = principal;
        this.credentials = credentials;
        this.setAuthenticated(authenticated);
    }

    @Override
    public Object getCredentials() {
        return credentials;
    }
    @Override
    public Object getPrincipal() {
        return principal;
    }
}
