import React, {useContext, useRef, useState} from "react";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {Box, color, Stack, styled, useTheme, width} from "@mui/system";
import theme from "../../themes";
import {
    Alert,
    Button, Checkbox, FormControlLabel,
    Link,
    TextField,
    Typography
} from "@mui/material";
import Center from "../../layouts/Center";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setAuthToken} from "../../services/slices/authSlice";
import useLayout from "../../hooks/useLayout";
import InputMask from "react-input-mask";
import {LayoutContext} from "../../providers/LayoutProvider";
import Form from "../../components/Form";
import MaskedInput from "../../components/MaskedInput";
import {CheckBox} from "@mui/icons-material";

function LoginForm() {

    const theme = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const layout = useContext(LayoutContext);

    const [credencial, setCredencial] = useState({cpfCientista: "", snhCientista: ""});
    const [lembrarSenha, setLembrarSenha] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (credencial.cpfCientista == "999.999.999-99" && credencial.snhCientista == "admin") {
            setErrorMessage("")
            navigate("/pesquisar-projetos");
        } else {
            setErrorMessage("Cpf ou Senha inválido(a)!")
        }

    }

    return (
        <Form onSubmit={handleSubmit} heading='Login'
              sx={layout === 'desktop' ? {width: "350px"} : {width: "100%", maxWidth: "350px"}}>
            <TextField
                inputProps={{color: theme.palette.text.secondary}}
                label="Cpf"
                variant="filled"
                type="text"
                error={errorMessage != ""}
                required={true}
                onChange={e => {
                    setCredencial(prevCredentials => ({...prevCredentials, cpfCientista: e.target.value}));
                }}
            />
            <Stack direction='column' spacing={1}>
                <TextField
                    inputProps={{color: theme.palette.text.secondary}}
                    label="Senha"
                    variant="filled"
                    type="password"
                    error={errorMessage != ""}
                    required={true}
                    onChange={e => {
                        setCredencial(prevCredentials => ({...prevCredentials, snhCientista: e.target.value}));
                    }}
                />
                <FormControlLabel control={<Checkbox value={lembrarSenha} onChange={(e) => setLembrarSenha(!lembrarSenha)}/>}
                                  label={<Typography whiteSpace='nowrap'>Lembrar Senha</Typography>}
                                  sx={{width: 'min-content'}}
                />
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
        </Form>
    );
}

export default LoginForm;