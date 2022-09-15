package com.api.scilink.services;

import com.api.scilink.exceptions.CpfNotFoundException;
import com.api.scilink.models.CientistaModel;
import com.api.scilink.repositories.CientistaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;

@Service
public class LoginService implements UserDetailsService {
    private final CientistaRepository cientistaRepository;

    public LoginService (CientistaRepository cientistaRepository) {
        this.cientistaRepository = cientistaRepository;
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername (String username) throws UsernameNotFoundException {
        CientistaModel cientistaModel = cientistaRepository.findCientistaModelByNom_cientista(username)
                .orElseThrow(() -> new UsernameNotFoundException(username));

        return new CientistaModel(cientistaModel.getNom_cientista(), cientistaModel.getCpf_cientista(), cientistaModel.getSnh_cientista());
    }

    //Tenta localizar o cientista, caso não encontre joga a exceção CpfNotFoundException.
    @Transactional
    public CientistaModel loadUserByCpf (String cpf) throws CpfNotFoundException {
        CientistaModel cientistaModel = cientistaRepository.findCientistaModelByCpf_cientista(cpf)
                .orElseThrow(() -> new CpfNotFoundException());

        return new CientistaModel(cientistaModel.getNom_cientista(), cientistaModel.getCpf_cientista(), cientistaModel.getSnh_cientista());
    }
}
