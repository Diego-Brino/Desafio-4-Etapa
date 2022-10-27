package com.api.scilink.handlers;

import com.api.scilink.controllers.AuthController;
import com.api.scilink.exceptions.CpfNaoEncontradoException;
import com.api.scilink.exceptions.cientista.CientistaNaoEncontradoException;
import com.api.scilink.exceptions.auth.*;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.LinkedHashMap;

@ControllerAdvice(basePackageClasses = AuthController.class)
public class AuthHandler extends ResponseEntityExceptionHandler {
    private LinkedHashMap<Object, Object> _preencherMensagensDeErro(String message) {
        LinkedHashMap<Object, Object> body = new LinkedHashMap<>();
        body.put("timestamp", DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm").format(LocalDateTime.now()));
        body.put("message", message);
        return body;
    }

    private LinkedHashMap<Object, Object> _preencherMensagensDeErro(String message, String attribute) {
        LinkedHashMap<Object, Object> body = new LinkedHashMap<>();
        body.put("timestamp", DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm").format(LocalDateTime.now()));
        body.put("message", message);
        body.put("attribute", attribute);
        return body;
    }

    @ExceptionHandler(CientistaNaoEncontradoException.class)
    public ResponseEntity<Object> handleCientistaNotFoundException (CientistaNaoEncontradoException exception) {
        LinkedHashMap<Object, Object> body = _preencherMensagensDeErro(exception.getMessage());
        return new ResponseEntity<>(body, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(CpfNaoEncontradoException.class)
    public ResponseEntity<Object> handleCpfNotFoundException (CpfNaoEncontradoException exception) {
        LinkedHashMap<Object, Object> body = _preencherMensagensDeErro(exception.getMessage(), "cpf");
        return new ResponseEntity<>(body, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(SenhaIncorretaException.class)
    public ResponseEntity<Object> handleSenhaIncorretaException (SenhaIncorretaException exception) {
        LinkedHashMap<Object, Object> body = _preencherMensagensDeErro(exception.getMessage(), "senha");
        return new ResponseEntity<>(body, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(CpfInvalidoException.class)
    public ResponseEntity<Object> handleCpfInvalidoException (CpfInvalidoException exception) {
        LinkedHashMap<Object, Object> body = _preencherMensagensDeErro(exception.getMessage(), "cpf");
        return new ResponseEntity<>(body, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(CpfJaCadastradoException.class)
    public ResponseEntity<Object> handleCpfJaCadastradoException (CpfJaCadastradoException exception) {
        LinkedHashMap<Object, Object> body = _preencherMensagensDeErro(exception.getMessage(), "cpf");
        return new ResponseEntity<>(body, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(EmailInvalidoException.class)
    public ResponseEntity<Object> handleEmailInvalidoException (EmailInvalidoException exception) {
        LinkedHashMap<Object, Object> body = _preencherMensagensDeErro(exception.getMessage(), "email");
        return new ResponseEntity<>(body, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(EmailJaCadastradoException.class)
    public ResponseEntity<Object> handleEmailJaCadastradoException (EmailJaCadastradoException exception) {
        LinkedHashMap<Object, Object> body = _preencherMensagensDeErro(exception.getMessage(), "email");
        return new ResponseEntity<>(body, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(LattesJaCadastradoException.class)
    public ResponseEntity<Object> handleLattesJaCadastradoException (LattesJaCadastradoException exception) {
        LinkedHashMap<Object, Object> body = _preencherMensagensDeErro(exception.getMessage(), "lattes");
        return new ResponseEntity<>(body, HttpStatus.CONFLICT);
    }

    @Override
    protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        LinkedHashMap<Object, Object> body = _preencherMensagensDeErro("O body enviado é inválido!");
        return new ResponseEntity<>(body, status);
    }

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        LinkedHashMap<Object, Object> body = _preencherMensagensDeErro(ex.getFieldError().getDefaultMessage());
        return new ResponseEntity<>(body, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<Object> handleIllegalArgumentException (IllegalArgumentException exception) {
        LinkedHashMap<Object, Object> body = _preencherMensagensDeErro(exception.getMessage());
        return new ResponseEntity<>(body, HttpStatus.CONFLICT);
    }
}