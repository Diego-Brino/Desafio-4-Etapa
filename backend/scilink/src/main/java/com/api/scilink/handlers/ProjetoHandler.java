package com.api.scilink.handlers;

import com.api.scilink.controllers.ProjetoController;
import com.api.scilink.exceptions.projeto.NenhumProjetoCadastradoException;
import com.api.scilink.exceptions.projeto.NenhumProjetoEncontradoException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.LinkedHashMap;

@ControllerAdvice(basePackageClasses = ProjetoController.class)
public class ProjetoHandler extends ResponseEntityExceptionHandler {
    private LinkedHashMap<Object, Object> _preencherMensagensDeErro(String message) {
        LinkedHashMap<Object, Object> body = new LinkedHashMap<>();
        body.put("timestamp", DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm").format(LocalDateTime.now()));
        body.put("message", message);
        return body;
    }

    @ExceptionHandler(NenhumProjetoEncontradoException.class)
    public ResponseEntity<Object> handleNenhumProjetoEncontradoException (NenhumProjetoEncontradoException execption) {
        LinkedHashMap<Object, Object> body = _preencherMensagensDeErro(execption.getMessage());
        return new ResponseEntity<>(body, HttpStatus.EXPECTATION_FAILED);
    }

    @ExceptionHandler(NenhumProjetoCadastradoException.class)
    public ResponseEntity<Object> handleNenhumProjetoCadastradoException (NenhumProjetoCadastradoException execption) {
        LinkedHashMap<Object, Object> body = _preencherMensagensDeErro(execption.getMessage());
        return new ResponseEntity<>(body, HttpStatus.EXPECTATION_FAILED);
    }
}
