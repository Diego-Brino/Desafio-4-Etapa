package com.api.scilink.exceptions.user;

public class SenhaIncorretaException extends RuntimeException {
    public SenhaIncorretaException () {
        super("A senha digitada está incorreta!");
    }
}
