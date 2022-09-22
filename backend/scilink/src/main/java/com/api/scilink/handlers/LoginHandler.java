package com.api.scilink.handlers;

import com.api.scilink.config.security.exceptions.CientistaNaoEncontradoException;
import com.api.scilink.config.security.exceptions.CpfNaoEncontradoException;
import com.api.scilink.config.security.exceptions.SenhaIncorretaException;
import com.api.scilink.controllers.LoginController;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.LinkedHashMap;

@ControllerAdvice(basePackageClasses = LoginController.class)
public class LoginHandler extends ResponseEntityExceptionHandler {
    private LinkedHashMap<Object, Object> _preencherMensagensDeErro(String message) {
        LinkedHashMap<Object, Object> body = new LinkedHashMap<>();
        body.put("timestamp", DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm").format(LocalDateTime.now()));
        body.put("message", message);
        return body;
    }

    @ExceptionHandler(CientistaNaoEncontradoException.class)
    public ResponseEntity<Object> handleCientistaNotFoundException (CientistaNaoEncontradoException execption) {
        LinkedHashMap<Object, Object> body = _preencherMensagensDeErro(execption.getMessage());
        return new ResponseEntity<>(body, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(CpfNaoEncontradoException.class)
    public ResponseEntity<Object> handleCpfNotFoundException (CpfNaoEncontradoException execption) {
        LinkedHashMap<Object, Object> body = _preencherMensagensDeErro(execption.getMessage());
        return new ResponseEntity<>(body, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(SenhaIncorretaException.class)
    public ResponseEntity<Object> handleSenhaIncorretaException (SenhaIncorretaException execption) {
        LinkedHashMap<Object, Object> body = _preencherMensagensDeErro(execption.getMessage());
        return new ResponseEntity<>(body, HttpStatus.CONFLICT);
    }

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        LinkedHashMap<Object, Object> body = _preencherMensagensDeErro(ex.getFieldError().getDefaultMessage());
        return new ResponseEntity<>(body, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<Object> handleIllegalArgumentException (IllegalArgumentException execption) {
        LinkedHashMap<Object, Object> body = _preencherMensagensDeErro(execption.getMessage());
        return new ResponseEntity<>(body, HttpStatus.CONFLICT);
    }
}