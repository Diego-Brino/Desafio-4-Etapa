package com.api.scilink.config.security;

import com.api.scilink.util.LogInfoUtil;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.Serializable;

@Component
public class AuthenticationEntryPointImpl extends LogInfoUtil implements AuthenticationEntryPoint, Serializable {
    private static final long SerialVersionUID = 1L;

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response,
                         AuthenticationException authException) throws IOException, ServletException {
        printLogInfo("Usuário não autorizado!");
        response.sendError(response.SC_UNAUTHORIZED, "Não autorizado!");
    }
}
