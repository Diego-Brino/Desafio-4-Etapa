import React, {useContext, useRef, useState} from "react";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {Box, Stack, styled, useTheme, width} from "@mui/system";
import theme from "../../themes";
import {Alert, AlertTitle, Button, Input, Link, TextField, Typography} from "@mui/material";
import Center from "../../layouts/Center";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setAuthToken} from "../../services/slices/authSlice";
import useLayout from "../../hooks/useLayout";
import InputMask from "react-input-mask";
import {LayoutContext} from "../../providers/LayoutProvider";
import Form from "../../components/Form";
import MaskedInput from "../../components/MaskedInput";

function LoginForm() {

    const theme = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const layout = useContext(LayoutContext);

    const [credentials, setCredentials] = useState({cpfCientista: "", snhCientista: ""});
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(credentials.cpfCientista == "999.999.999-99" && credentials.snhCientista == "admin"){
            setErrorMessage("")
            navigate("/pesquisar-projetos");
        }
        else {
            setErrorMessage("Cpf ou Senha inválido(a)!")
        }

    }

    return (
        <Form onSubmit={handleSubmit} heading='Login' sx={layout=== 'desktop' ? {width: "375px"} : {width: "100%"}}>
            <MaskedInput
                mask='999.999.999-99' value={credentials.cpfCientista}
                label='Cpf' required={true}
                onChange={e => {
                    setCredentials(prevCredentials => ({...prevCredentials, cpfCientista: e.target.value}));
                }}
            />
            <TextField
                label="Senha" variant="outlined"
                type="password" required
                onChange={e => {
                    setCredentials(prevCredentials => ({...prevCredentials, snhCientista: e.target.value}));
                }}
            />
            {errorMessage !== "" &&
                <Alert severity="error">
                    <Typography color={theme.palette.error.main}>{errorMessage}</Typography>
                </Alert>
            }
            <Center>
                <Button variant="contained" fullWidth type={"submit"}>
                    <Typography variant='button'>Entrar</Typography>
                </Button>
            </Center>
            <Typography variant="body1" textAlign={"center"}>
                Não possui conta?&nbsp;<Link as={RouterLink} to={"/cadastro"} variant={"underline-secondary"}>Cadastre-se aqui</Link>
            </Typography>
        </Form>
    );
}

export default LoginForm;