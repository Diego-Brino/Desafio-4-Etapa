import React, {useRef, useState} from "react";
import {Link as RouterLink} from "react-router-dom";
import {Box, Stack, styled, useTheme, width} from "@mui/system";
import theme from "../../themes";
import {Button, Input, Link, TextField, Typography} from "@mui/material";
import Center from "../../layouts/Center";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setAuthToken} from "../../services/slices/authSlice";

function LoginForm(){

    const theme = useTheme();
    const dispatch = useDispatch();

    const [credentials, setCredentials] = useState({cpfCientista: "", snhCientista: ""});
    const [errorMessage, setErrorMessage] = useState("");

    const inputCpfRef = useRef("");
    const inputSenhaRef = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/login', credentials)
            .then(res => {
                inputCpfRef.current.value = "";
                inputSenhaRef.current.value = "";
                setErrorMessage("");
                dispatch(setAuthToken(res.data));
            })
            .catch(err => {
                inputCpfRef.current.value = "";
                inputSenhaRef.current.value = "";
                setCredentials({cpfCientista: "", snhCientista: ""});
                setErrorMessage("CPF ou senha incorretos!");
            });
    }

    return(
        <Panel>
            <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                    <Typography variant="h4" align="left" fontWeight="bold">Login</Typography>
                    <TextField label="CPF" variant={"outlined"} fullWidth autoFocus type={"text"} required error={errorMessage != ""} inputRef={inputCpfRef} onChange={ e => {setCredentials(prevCredentials => ({...prevCredentials, cpfCientista: e.target.value}));}}/>
                    <TextField label="Senha" variant={"outlined"} fullWidth type={"password"} required error={errorMessage != ""} inputRef={inputSenhaRef} onChange={ e => {setCredentials(prevCredentials => ({...prevCredentials, snhCientista: e.target.value}));}}/>
                    {errorMessage != "" &&
                        <Center>
                            <Typography variant={"body1"} color={theme.palette.error.main}>{errorMessage}</Typography>
                        </Center>
                    }
                    <Center>
                        <Button variant="contained" fullWidth type={"submit"}>
                            <Typography variant={"button"}>Entrar</Typography>
                        </Button>
                    </Center>
                    <Typography variant="body1" textAlign={"center"}>
                        Não Possui Conta?&nbsp;<Link as={RouterLink} to={"#"} variant={"underline-secondary"}>Cadastre-se Aqui</Link>
                    </Typography>
                </Stack>
            </form>
        </Panel>
    );
}

const Panel = styled(Box)({
    borderRadius: "5px",
    maxWidth: "375px",
    width: "100%",
    backgroundColor: theme.palette.base.white,
    padding: "20px",
    boxShadow: "#00000030 0px 19px 38px, #00000022 0px 15px 12px",
})

export default LoginForm;