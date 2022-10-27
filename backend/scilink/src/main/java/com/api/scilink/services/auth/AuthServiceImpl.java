package com.api.scilink.services.auth;

import com.api.scilink.exceptions.CpfNaoEncontradoException;
import com.api.scilink.exceptions.auth.CpfJaCadastradoException;
import com.api.scilink.exceptions.auth.EmailJaCadastradoException;
import com.api.scilink.exceptions.auth.LattesJaCadastradoException;
import com.api.scilink.exceptions.auth.TelefoneJaCadastradoException;
import com.api.scilink.models.CientistaModel;
import com.api.scilink.repositories.CientistaRepository;
import com.api.scilink.repositories.TelefoneRepository;
import com.api.scilink.services.telefone.TelefoneServiceImpl;
import com.api.scilink.util.LogInfoUtil;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class AuthServiceImpl extends LogInfoUtil implements AuthService, UserDetailsService {
    private final CientistaRepository cientistaRepository;
    private final TelefoneServiceImpl telefoneServiceImpl;
    public AuthServiceImpl(CientistaRepository cientistaRepository, TelefoneServiceImpl telefoneServiceImpl) {
        this.cientistaRepository = cientistaRepository;
        this.telefoneServiceImpl = telefoneServiceImpl;
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
                .orElseThrow(CpfNaoEncontradoException::new);

        printLogInfo("Usuário logado!");
        return new CientistaModel(cientistaModel.getNome(), cientistaModel.getCpf(), cientistaModel.getSenha());
    }

    @Override
    @Transactional
    public CientistaModel saveCientista (CientistaModel cientistaModel) {
        if (cientistaRepository.existsByCpf(cientistaModel.getCpf())) {
            printLogErro("O Cpf informado já está cadastrado!");
            throw new CpfJaCadastradoException();
        }
        if (cientistaRepository.existsByEmail(cientistaModel.getEmail())) {
            printLogErro("O E-mail informado já está cadastrado!");
            throw new EmailJaCadastradoException();
        }
        if (cientistaRepository.existsByLattes(cientistaModel.getLattes())) {
            printLogErro("O Lattes informado já está cadastrado!");
            throw new LattesJaCadastradoException();
        }
        if (!cientistaModel.getTelefones().isEmpty()) {
            cientistaModel.getTelefones().forEach(telefoneModel -> {
                if (telefoneServiceImpl.existsTelefoneModelByDddAndNumero
                        (telefoneModel.getTelefoneId().getDdd(),
                         telefoneModel.getTelefoneId().getNumero())
                   ) {
                    printLogErro("O telefone informado já está cadastrado!");
                    throw new TelefoneJaCadastradoException();
                }
            });
        }
        printLogInfo("Cientista cadastrado!");
        cientistaRepository.save(cientistaModel);
        telefoneServiceImpl.cadastrarListaTelefoneModels(cientistaRepository
                .findCientistaModelByCpf(cientistaModel.getCpf()).get().getTelefones());
        return cientistaModel;
    }

    @Override
    public Boolean existsCientistaByCpf (String cpf) {
        printLogInfo("Verificando existência de um cientista pelo cpf!");
        return cientistaRepository.existsByCpf(cpf);
    }

    @Override
    public Boolean existsCientistaByLattes (String lattes) {
        printLogInfo("Verificando existência de um cientista pelo lattes!");
        return cientistaRepository.existsByLattes(lattes);
    }

    @Override
    public Boolean existsCientistaByEmail (String email) {
        printLogInfo("Verificando existência de um cientista pelo email!");
        return cientistaRepository.existsByEmail(email);
    }
}
