package com.api.scilink.handlers;

import com.api.scilink.controllers.LoginController;
import com.api.scilink.config.security.exceptions.CientistaNotFoundException;
import com.api.scilink.config.security.exceptions.CpfNotFoundException;
import com.api.scilink.config.security.exceptions.SenhaIncorretaException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.LinkedHashMap;

@ControllerAdvice(basePackageClasses = LoginController.class)
public class LoginHandler extends ResponseEntityExceptionHandler {
    private LinkedHashMap<Object, Object> _preencherMensagensDeErro(String message) {
        LinkedHashMap<Object, Object> body = new LinkedHashMap<>();
        body.put("timestamp", DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm").format(LocalDateTime.now()));
        body.put("message", message);
        return body;
    }

    @ExceptionHandler(CientistaNotFoundException.class)
    public ResponseEntity<Object> handleCientistaNotFoundException (CientistaNotFoundException execption) {
        LinkedHashMap<Object, Object> body = _preencherMensagensDeErro(execption.getMessage());
        return new ResponseEntity<>(body, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(CpfNotFoundException.class)
    public ResponseEntity<Object> handleCpfNotFoundException (CpfNotFoundException execption) {
        LinkedHashMap<Object, Object> body = _preencherMensagensDeErro(execption.getMessage());
        return new ResponseEntity<>(body, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(SenhaIncorretaException.class)
    public ResponseEntity<Object> handleSenhaIncorretaException (SenhaIncorretaException execption) {
        LinkedHashMap<Object, Object> body = _preencherMensagensDeErro(execption.getMessage());
        return new ResponseEntity<>(body, HttpStatus.CONFLICT);
    }
}
