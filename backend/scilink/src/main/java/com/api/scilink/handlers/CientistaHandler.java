package com.api.scilink.handlers;

import com.api.scilink.controllers.CientistaController;
import com.api.scilink.exceptions.CpfNaoEncontradoException;
import com.api.scilink.exceptions.auth.EmailJaCadastradoException;
import com.api.scilink.exceptions.auth.LattesJaCadastradoException;
import com.api.scilink.exceptions.cientista.CientistaNaoEncontradoException;
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

    private LinkedHashMap<Object, Object> _preencherMensagensDeErro(String message, String attribute) {
        LinkedHashMap<Object, Object> body = new LinkedHashMap<>();
        body.put("timestamp", DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm").format(LocalDateTime.now()));
        body.put("message", message);
        body.put("attribute", attribute);
        return body;
    }

    @ExceptionHandler(CientistaNaoEncontradoException.class)
    public ResponseEntity<Object> handleCientistaNaoEncontradoException (CientistaNaoEncontradoException exception) {
        LinkedHashMap<Object, Object> body = _preencherMensagensDeErro(exception.getMessage());
        return new ResponseEntity<>(body, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(NenhumCientistaCadastradoException.class)
    public ResponseEntity<Object> handleNenhumCientistaCadastradoException (NenhumCientistaCadastradoException execption) {
        LinkedHashMap<Object, Object> body = _preencherMensagensDeErro(execption.getMessage());
        return new ResponseEntity<>(body, HttpStatus.EXPECTATION_FAILED);
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
}
