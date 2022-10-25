package com.api.scilink.services.auth;

import com.api.scilink.models.CientistaModel;

public interface AuthService {
    CientistaModel loadUserByCpf (String cpf);
    CientistaModel saveCientista (CientistaModel cientistaModel);
    Boolean existsCientistaByCpf (String cpfCientista);
}