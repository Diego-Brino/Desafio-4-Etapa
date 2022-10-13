import React, {useRef, useState} from "react";
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

function CadastroForm() {

    const theme = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [cadastro, setCadastro] = useState({
        lattesCientista: "",
        cpfCientista: "",
        emailCientista: "",
        snhCientista: ""
    });
    const [errorMessage, setErrorMessage] = useState("");

    const inputCpfRef = useRef("");
    const inputSenhaRef = useRef("");
    const inputEmailRef = useRef("");
    const inputLattesRef = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(cadastro.emailCientista == "teste@teste.com"){
            setErrorMessage("email já cadastrado")
        }
        else if(cadastro.cpfCientista == "999.999.999-99"){
            setErrorMessage("cpf já cadastrado")
        }
        else{
            setErrorMessage("");
            navigate("/login");
        }

    }

    return (
        <FormPanel>
            <Center>
                <form onSubmit={handleSubmit} style={{width: "100%"}}>
                    <Stack spacing={4}>
                        <Typography
                            variant={useLayout().width > theme.breakpoints['lg'] ? 'h4' : 'h3'}
                            align={useLayout().width > theme.breakpoints['lg'] ? 'left' : 'center'}
                            fontWeight="bold">
                            Cadastro
                        </Typography>
                        <InputMask
                            mask="999.999.999-99"
                            value={cadastro.cpfCientista}
                            disabled={false}
                            maskChar={null}
                            onChange={e => {
                                setCadastro(prev => ({...prev, cpfCientista: e.target.value}));
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
                            label="Lattes"
                            variant={"outlined"}
                            fullWidth
                            type={"text"}
                            required
                            error={errorMessage != ""}
                            inputRef={inputLattesRef}
                            onChange={e => {
                                setCadastro(prev => ({...prev, lattesCientista: e.target.value}));
                            }}
                        />
                        <TextField
                            label="Email"
                            variant={"outlined"}
                            fullWidth
                            type={"email"}
                            required
                            error={errorMessage != ""}
                            inputRef={inputEmailRef}
                            onChange={e => {
                                setCadastro(prev => ({...prev, emailCientista: e.target.value}));
                            }}
                        />
                        <TextField
                            label="Senha"
                            variant={"outlined"}
                            fullWidth
                            type={"password"}
                            required
                            error={errorMessage != ""}
                            inputRef={inputSenhaRef}
                            onChange={e => {
                                setCadastro(prev => ({...prev, snhCientista: e.target.value}));
                            }}
                        />
                        {errorMessage != "" &&
                            <Typography variant={"body1"} align='center' color={theme.palette.error.main}>{errorMessage}</Typography>
                        }
                        <Center>
                            <Button variant="contained" fullWidth type={"submit"}>
                                <Typography variant={"button"}>Cadastrar</Typography>
                            </Button>
                        </Center>
                        <Typography variant="body1" textAlign={"center"}>
                            Já possui conta?&nbsp;<Link as={RouterLink} to={"/login"} variant={"underline-secondary"}>Entre aqui</Link>
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


export default CadastroForm;