package com.api.scilink.services.auth;

import com.api.scilink.exceptions.CpfNaoEncontradoException;
import com.api.scilink.exceptions.auth.CpfJaCadastradoException;
import com.api.scilink.exceptions.auth.EmailJaCadastradoException;
import com.api.scilink.exceptions.auth.LattesJaCadastradoException;
import com.api.scilink.exceptions.auth.TelefoneJaCadastradoException;
import com.api.scilink.models.CientistaModel;
import com.api.scilink.models.RedeSocialModel;
import com.api.scilink.models.TitulacaoModel;
import com.api.scilink.repositories.CientistaRepository;
import com.api.scilink.repositories.TelefoneRepository;
import com.api.scilink.services.formacao.FormacaoServiceImpl;
import com.api.scilink.services.redeSocial.RedeSocialServiceImpl;
import com.api.scilink.services.telefone.TelefoneServiceImpl;
import com.api.scilink.services.titulacao.TitulacaoServiceImpl;
import com.api.scilink.util.LogInfoUtil;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class AuthServiceImpl extends LogInfoUtil implements AuthService, UserDetailsService {
    private final CientistaRepository cientistaRepository;
    private final TelefoneServiceImpl telefoneServiceImpl;
    private final RedeSocialServiceImpl redeSocialServiceImpl;
    private final FormacaoServiceImpl formacaoServiceImpl;
    private final TitulacaoServiceImpl titulacaoServiceImpl;
    public AuthServiceImpl(CientistaRepository cientistaRepository,
                           TelefoneServiceImpl telefoneServiceImpl,
                           RedeSocialServiceImpl redeSocialServiceImpl,
                           FormacaoServiceImpl formacaoServiceImpl,
                           TitulacaoServiceImpl titulacaoServiceImpl) {
        this.cientistaRepository = cientistaRepository;
        this.telefoneServiceImpl = telefoneServiceImpl;
        this.redeSocialServiceImpl = redeSocialServiceImpl;
        this.formacaoServiceImpl = formacaoServiceImpl;
        this.titulacaoServiceImpl = titulacaoServiceImpl;
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

        printLogInfo("Cientista cadastrado!");
        cientistaRepository.save(cientistaModel);

        CientistaModel cientistaModelTemp = cientistaRepository
                .findCientistaModelByCpf(cientistaModel.getCpf()).get();

        if (cientistaModel.getTelefones() != null) {
            cientistaModel.getTelefones().forEach(telefoneModel -> {
                telefoneModel.setCientista(cientistaModelTemp);
                telefoneServiceImpl.cadastrarTelefoneModel(telefoneModel);
            });
        }

        if (cientistaModel.getRedesSociais() != null) {
            cientistaModel.getRedesSociais().forEach(redeSocialModel -> {
                redeSocialModel.setCientista(cientistaModelTemp);
                redeSocialServiceImpl.cadastrarRedeSocial(redeSocialModel);
            });
        }

        if (cientistaModel.getFormacoes() != null) {
            cientistaModel.getFormacoes().forEach(formacaoModel -> {
                formacaoModel.setCientista(cientistaModelTemp);
                formacaoModel.setTitulacao(titulacaoServiceImpl.buscarTitulacaoByNome
                                                                (formacaoModel.getTitulacao().getNome()));
                formacaoServiceImpl.cadastrarFormacaoModel(formacaoModel);
            });
        }

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
