package com.api.scilink.util;

public abstract class LogInfoUtil {
    public void printLogInfo (String message) {
        System.out.println("[INFO] " + message);
    }

    public void printLogErro (String message) {
        System.out.println("[ERRO] " + message);
    }
}
