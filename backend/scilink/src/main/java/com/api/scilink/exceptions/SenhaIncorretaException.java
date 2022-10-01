package com.api.scilink.exceptions;

public class SenhaIncorretaException extends RuntimeException {
    public SenhaIncorretaException () {
        super("A senha digitada está incorreta!");
    }
}
