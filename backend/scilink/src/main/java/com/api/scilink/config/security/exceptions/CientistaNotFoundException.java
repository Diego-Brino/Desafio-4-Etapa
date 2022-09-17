package com.api.scilink.config.security.exceptions;

public class CientistaNotFoundException extends RuntimeException {
    public CientistaNotFoundException() {
        super("Cientista não encontrado, tente novamente!");
    }
}
