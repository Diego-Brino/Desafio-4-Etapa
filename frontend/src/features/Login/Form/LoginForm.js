import React, {useContext, useState} from "react";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {Stack, useTheme} from "@mui/system";
import {Alert, Button, Checkbox, FormControlLabel, Link, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {LayoutContext} from "../../../providers/LayoutProvider";
import AuthForm from "../../../components/AuthForm";
import LoginInputCpf from "./LoginInputCpf";
import LoginInputSenha from "./LoginInputSenha";
import LoginInputLembrarSenha from "./LoginInputLembrarSenha";

function LoginForm() {

    const theme = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const layout = useContext(LayoutContext);

    const [credencial, setCredencial] = useState({cpfCientista: "", snhCientista: ""});
    const [lembrarSenha, setLembrarSenha] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (credencial.cpfCientista == "999.999.999-99" && credencial.snhCientista == "admin") {
            setErrorMessage("")
            navigate("/pesquisar-projetos");
        } else {
            setErrorMessage("Cpf ou Senha inválido(a)!")
        }

    }

    const handleOnChangeInputCpf = (e) => {
        setCredencial(prevState => ({...prevState, cpfCientista: e.target.value}));
    }

    const handleOnChangeInputSenha = (e) => {
        setCredencial(prevState => ({...prevState, snhCientista: e.target.value}));
    }

    return (
        <AuthForm onSubmit={handleSubmit} heading='Login'
                  sx={layout === 'desktop' ? {width: "350px"} : {width: "100%", maxWidth: "350px"}}>
            <LoginInputCpf error={error} onChange={handleOnChangeInputCpf}/>
            <Stack direction='column' spacing={1}>
                <LoginInputSenha error={error} onChange={handleOnChangeInputSenha}/>
                <LoginInputLembrarSenha/>
            </Stack>
            {errorMessage !== "" &&
                <Alert severity="error">
                    {errorMessage}
                </Alert>
            }
            <Stack direction='row' alignItems='center' justifyContent='space-between'>
                <Button variant="contained" sx={{width: '50%'}} type={"submit"}>
                    <Typography variant='button' color={theme.palette.text.secondary}>Entrar</Typography>
                </Button>
                <Typography variant="body1" textAlign={"center"}>
                    <Link as={RouterLink} to="/cadastro" variant="primary">Criar Conta</Link>
                </Typography>
            </Stack>
        </AuthForm>
    );
}

export default LoginForm;