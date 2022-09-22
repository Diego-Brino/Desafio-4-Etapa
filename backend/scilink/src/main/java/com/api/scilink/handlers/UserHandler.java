package com.api.scilink.handlers;

import com.api.scilink.config.security.exceptions.*;
import com.api.scilink.controllers.UserController;
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

@ControllerAdvice(basePackageClasses = UserController.class)
public class UserHandler extends ResponseEntityExceptionHandler {
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

    @ExceptionHandler(CpfJaCadastradoException.class)
    public ResponseEntity<Object> handleCpfJaCadastradoException (CpfJaCadastradoException execption) {
        LinkedHashMap<Object, Object> body = _preencherMensagensDeErro(execption.getMessage());
        return new ResponseEntity<>(body, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(EmailJaCadastradoException.class)
    public ResponseEntity<Object> handleEmailJaCadastradoException (EmailJaCadastradoException execption) {
        LinkedHashMap<Object, Object> body = _preencherMensagensDeErro(execption.getMessage());
        return new ResponseEntity<>(body, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(LattesJaCadastradoException.class)
    public ResponseEntity<Object> handleLattesJaCadastradoException (LattesJaCadastradoException execption) {
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