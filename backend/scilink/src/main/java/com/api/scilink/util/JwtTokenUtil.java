package com.api.scilink.util;

import com.api.scilink.models.CientistaModel;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public final class JwtTokenUtil implements Serializable {
    private static final long serialVersionUID = 1L;

    //Validade setada para 10 minutos
    public static final long JWT_VALIDADE_TOKEN = 1000 * 60 * 60 * 24 * 7; //1 * 60 * 1000;

    //O valor do segredo definido dentro do application properties é passado para essa variável
    @Value("${jwt.secret}")
    private String secret;

    //Retorna o usuário do token atual
    public String getUsernameFromToken (String token) {
        return getClaimFromToken(token, Claims::getSubject);
    }

    //Retorna a data de expiração do token atual
    public Date getExpirationDateFromToken (String token) {
        return getClaimFromToken(token, Claims::getExpiration);
    }

    //Retorna o payload do token atual
    public <T> T getClaimFromToken (String token, Function<Claims, T> claimsResolver) {
        final Claims claims = getAllClaimsFromToken(token);
        return claimsResolver.apply(claims);
    }

    //Retorna o payload do token atual descriptogrando-
    //Para recuperar qualquer informação do token será obrigatório a aplicação da chave
    public Claims getAllClaimsFromToken (String token) {
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
    }

    //Captura a expiração do token e compara com a data atual para verificar se o mesmo não está expirado
    private Boolean isTokenExpired (String token) {
        final Date expiration = getExpirationDateFromToken(token);
        return expiration.before(new Date());
    }

    //Gera o token para o usuário
    public String generateToken (UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        return doGenerateToken(claims, userDetails.getUsername());
    }

    //Enquanto o token for gerado esse algoritmo irá gerá-lo
    public String doGenerateToken (Map<String, Object> claims, String subject) {
        return Jwts.builder().setClaims(claims).setSubject(subject)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date((System.currentTimeMillis() + JWT_VALIDADE_TOKEN)))
                .signWith(SignatureAlgorithm.HS512, secret).compact();
    }

    //Verifica se o token é valido
    public Boolean tokenIsValid(String token, CientistaModel cientistaModel) {
        return !isTokenExpired(token) && getUsernameFromToken(token).equals(cientistaModel.getCpf());
    }
}
