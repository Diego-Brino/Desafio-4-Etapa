package com.api.scilink.services;

import com.api.scilink.models.CientistaModel;

public interface UserService {
    CientistaModel loadUserByCpf (String cpf);
    CientistaModel saveCientista (CientistaModel cientistaModel);
}
