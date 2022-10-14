import React, {useContext, useRef, useState} from "react";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {Box, Stack, styled, useTheme, width} from "@mui/system";
import theme from "../../themes";
import {Button, Input, Link, TextField, Typography} from "@mui/material";
import Center from "../../layouts/Center";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setAuthToken} from "../../services/slices/authSlice";
import useLayout from "../../hooks/useLayout";
import InputMask from "react-input-mask";
import {LayoutContext} from "../../providers/LayoutProvider";

function LoginForm() {

    const theme = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const layout = useContext(LayoutContext);

    const [credentials, setCredentials] = useState({cpfCientista: "", snhCientista: ""});
    const [errorMessage, setErrorMessage] = useState("");

    const inputCpfRef = useRef("");
    const inputSenhaRef = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(credentials.cpfCientista == "999.999.999-99" && credentials.snhCientista == "admin"){
            setErrorMessage("")
            navigate("/pesquisar-projetos");
        }
        else {
            setErrorMessage("cpf ou senha inválidos")
        }

    }

    return (
        <FormPanel>
            <Center>
                <form onSubmit={handleSubmit} style={{width: "100%"}}>
                    <Stack spacing={4}>
                        <Typography
                            variant={layout === 'desktop' ? 'h4' : 'h5'}
                            align={layout === 'desktop' ? 'left' : 'center'}
                            fontWeight="bold">
                            Login
                        </Typography>
                        <InputMask
                            mask="999.999.999-99"
                            value={credentials.cpfCientista}
                            disabled={false}
                            maskChar={null}
                            onChange={e => {
                                setCredentials(prevCredentials => ({...prevCredentials, cpfCientista: e.target.value}));
                            }}>
                            {() => <TextField
                                label="CPF"
                                variant={"outlined"}
                                fullWidth
                                autoFocus
                                type={"text"}
                                required
                                error={errorMessage != ""}
                                inputRef={inputCpfRef}/>}
                        </InputMask>
                        <TextField
                            label="Senha"
                            variant={"outlined"}
                            fullWidth type={"password"}
                            required
                            error={errorMessage != ""}
                            inputRef={inputSenhaRef}
                            onChange={e => {
                                setCredentials(prevCredentials => ({...prevCredentials, snhCientista: e.target.value}));
                            }}
                        />
                        {errorMessage != "" &&
                            <Typography variant={"body1"} align='center' color={theme.palette.error.main}>{errorMessage}</Typography>
                        }
                        <Center>
                            <Button variant="contained" fullWidth type={"submit"}>
                                <Typography variant='button'>Entrar</Typography>
                            </Button>
                        </Center>
                        <Typography variant="body1" textAlign={"center"}>
                            Não possui conta?&nbsp;<Link as={RouterLink} to={"/cadastro"} variant={"underline-secondary"}>Cadastre-se aqui</Link>
                        </Typography>
                    </Stack>
                </form>
            </Center>
        </FormPanel>
    );
}

const FormPanel = styled(Box)({
    [theme.breakpoints.down('lg')]: {
        height: '100%',
        width: "100vw",
        padding: "25px 15%",
    },
    [theme.breakpoints.up('lg')]: {
        width: "375px",
        minWidth: '375px',
    },
    borderRadius: "5px",
    backgroundColor: theme.palette.secondary.main,
    padding: "25px 25px",
    boxShadow: "#00000030 0px 19px 38px, #00000022 0px 15px 12px",
})


export default LoginForm;