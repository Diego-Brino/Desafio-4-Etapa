package com.api.scilink.services.auth;

import com.api.scilink.exceptions.user.CpfJaCadastradoException;
import com.api.scilink.exceptions.CpfNaoEncontradoException;
import com.api.scilink.exceptions.user.EmailJaCadastradoException;
import com.api.scilink.exceptions.user.LattesJaCadastradoException;
import com.api.scilink.models.CientistaModel;
import com.api.scilink.repositories.CientistaRepository;
import com.api.scilink.util.LogInfoUtil;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class AuthServiceImpl extends LogInfoUtil implements AuthService, UserDetailsService {
    private final CientistaRepository cientistaRepository;
    public AuthServiceImpl(CientistaRepository cientistaRepository) {
        this.cientistaRepository = cientistaRepository;
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername (String username) throws UsernameNotFoundException {
        CientistaModel cientistaModel = cientistaRepository.findCientistaModelByNome(username)
                .orElseThrow(() -> new UsernameNotFoundException(username));

        printLogInfo("Usuário logado!");
        return new CientistaModel(cientistaModel.getNome(), cientistaModel.getCpf(), cientistaModel.getSenha());
    }

    //Tenta localizar o cientista, caso não encontre joga a exceção CpfNotFoundException.
    @Override
    @Transactional
    public CientistaModel loadUserByCpf (String cpf) {
        CientistaModel cientistaModel = cientistaRepository.findCientistaModelByCpf(cpf)
                .orElseThrow(() -> new CpfNaoEncontradoException());

        printLogInfo("Usuário logado!");
        return new CientistaModel(cientistaModel.getNome(), cientistaModel.getCpf(), cientistaModel.getSenha());
    }

    @Override
    @Transactional
    public CientistaModel saveCientista (CientistaModel cientistaModel) {
        if (cientistaRepository.existsByCpf(cientistaModel.getCpf())) {
            printLogErro("O Cpf informado já está cadastrado!");
            throw new CpfJaCadastradoException();
        } else if (cientistaRepository.existsByEmail(cientistaModel.getEmail())) {
            printLogErro("O E-mail informado já está cadastrado!");
            throw new EmailJaCadastradoException();
        } else if (cientistaRepository.existsByLattes(cientistaModel.getLattes())) {
            printLogErro("O Lattes informado já está cadastrado!");
            throw new LattesJaCadastradoException();
        } else {
            printLogInfo("Cientista cadastrado!");
            cientistaRepository.save(cientistaModel);
            return cientistaModel;
        }
    }

    @Override
    public Boolean existsCientistaByCpf (String cpfCientista) {
        return cientistaRepository.existsByCpf(cpfCientista);
    }
}
