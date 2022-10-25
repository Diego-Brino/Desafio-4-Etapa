package com.api.scilink.handlers;

import com.api.scilink.controllers.CientistaController;
import com.api.scilink.exceptions.cientista.NenhumCientistaCadastradoException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.LinkedHashMap;

@ControllerAdvice(basePackageClasses = CientistaController.class)
public class CientistaHandler extends ResponseEntityExceptionHandler {
    private LinkedHashMap<Object, Object> _preencherMensagensDeErro(String message) {
        LinkedHashMap<Object, Object> body = new LinkedHashMap<>();
        body.put("timestamp", DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm").format(LocalDateTime.now()));
        body.put("message", message);
        return body;
    }

    @ExceptionHandler(NenhumCientistaCadastradoException.class)
    public ResponseEntity<Object> handleNenhumCientistaCadastradoException (NenhumCientistaCadastradoException execption) {
        LinkedHashMap<Object, Object> body = _preencherMensagensDeErro(execption.getMessage());
        return new ResponseEntity<>(body, HttpStatus.EXPECTATION_FAILED);
    }
}