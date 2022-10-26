package com.api.scilink.exceptions.auth;

public class SenhaIncorretaException extends RuntimeException {
    public SenhaIncorretaException () {
        super("A senha digitada está incorreta!");
    }
}
