package com.api.scilink.config.security;

import com.api.scilink.config.security.filters.AuthenticationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig {
    private final AuthenticationConfiguration authenticationConfiguration;
    private final AuthenticationEntryPointImpl authenticationEntryPointImpl;
    private final AuthenticationFilter authenticationFilter;

    @Autowired
    public WebSecurityConfig(AuthenticationConfiguration authenticationConfiguration, AuthenticationEntryPointImpl authenticationEntryPointImpl, AuthenticationFilter authenticationFilter) {
        this.authenticationConfiguration = authenticationConfiguration;
        this.authenticationEntryPointImpl = authenticationEntryPointImpl;
        this.authenticationFilter = authenticationFilter;
    }

    @Bean
    public SecurityFilterChain filterChain (HttpSecurity httpSecurity) throws Exception {
        httpSecurity
                .httpBasic()
                .and()
                .authorizeRequests()
                .antMatchers("/auth/*").permitAll()
                .antMatchers("/auth/*?*").permitAll()
                .antMatchers("/titulacoes").permitAll()
                .antMatchers("/areasAtuacao").permitAll()
                .anyRequest().authenticated()
                .and()
                .csrf().disable()
                .exceptionHandling().authenticationEntryPoint(authenticationEntryPointImpl)
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .addFilterBefore(authenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return httpSecurity.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager() {
        return new AuthenticationManagerImpl();
    }

    @Bean
    public AuthenticationProvider authenticationProvider () {
        return new AuthenticationProviderImpl();
    }
}
