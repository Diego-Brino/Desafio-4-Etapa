package com.api.scilink.services;

import com.api.scilink.config.security.exceptions.CpfNaoEncontradoException;
import com.api.scilink.models.CientistaModel;
import com.api.scilink.repositories.CientistaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class LoginService implements UserDetailsService {
    private final CientistaRepository cientistaRepository;
    public LoginService (CientistaRepository cientistaRepository) {
        this.cientistaRepository = cientistaRepository;
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername (String username) throws UsernameNotFoundException {
        CientistaModel cientistaModel = cientistaRepository.findCientistaModelByNomCientista(username)
                .orElseThrow(() -> new UsernameNotFoundException(username));

        return new CientistaModel(cientistaModel.getNomCientista(), cientistaModel.getCpfCientista(), cientistaModel.getSnhCientista());
    }

    //Tenta localizar o cientista, caso não encontre joga a exceção CpfNotFoundException.
    @Transactional
    public CientistaModel loadUserByCpf (String cpf) {
        CientistaModel cientistaModel = cientistaRepository.findCientistaModelByCpfCientista(cpf)
                .orElseThrow(() -> new CpfNaoEncontradoException());

        return new CientistaModel(cientistaModel.getNomCientista(), cientistaModel.getCpfCientista(), cientistaModel.getSnhCientista());
    }
}
