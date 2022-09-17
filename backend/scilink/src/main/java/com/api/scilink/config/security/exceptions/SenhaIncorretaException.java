package com.api.scilink.config.security.exceptions;

public class SenhaIncorretaException extends RuntimeException {
    public SenhaIncorretaException () {
        super("A senha digitada está incorreta!");
    }
}
