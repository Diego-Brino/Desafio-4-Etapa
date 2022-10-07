package com.api.scilink.util;

public abstract class LogInfoUtil<T> {
    public void printLogInfo (T message) {
        System.out.println("[INFO] " + message);
    }

    public void printLogErro (T message) {
        System.out.println("[ERRO] " + message);
    }
}
