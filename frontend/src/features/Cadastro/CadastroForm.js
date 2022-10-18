import React, {useContext, useState} from "react";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {Box, styled, useTheme} from "@mui/system";
import theme from "../../themes";
import {Alert, Button, Link, TextField, Typography} from "@mui/material";
import Center from "../../layouts/Center";
import {useDispatch} from "react-redux";
import MaskedInput from "../../components/MaskedInput";
import AuthForm from "../../components/AuthForm";
import {LayoutContext} from "../../providers/LayoutProvider";

function CadastroForm() {

    const theme = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const layout = useContext(LayoutContext);

    const [cadastro, setCadastro] = useState({
        lattesCientista: "",
        cpfCientista: "",
        emailCientista: "",
        snhCientista: ""
    });

    const [errorMessage, setErrorMessage] = useState("");

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
        <AuthForm onSubmit={handleSubmit} heading='Cadastro' sx={layout=== 'desktop' ? {width: "375px"} : {width: "100%"}}>
            <MaskedInput
                mask='999.999.999-99' value={cadastro.cpfCientista}
                label='Cpf' required={true}
                onChange={e => {
                    setCadastro(prev => ({...prev, cpfCientista: e.target.value}));
                }}
            />
            <TextField
                label="Lattes" variant="outlined"
                type="text" required
                onChange={e => {
                    setCadastro(prev => ({...prev, lattesCientista: e.target.value}));
                }}
            />
            <TextField
                label="Email" variant="outlined"
                type="email" required
                onChange={e => {
                    setCadastro(prev => ({...prev, emailCientista: e.target.value}));
                }}
            />
            <TextField
                label="Senha" variant="outlined"
                type="password" required
                onChange={e => {
                    setCadastro(prev => ({...prev, snhCientista: e.target.value}));
                }}
            />
            {errorMessage !== "" &&
                <Alert severity="error">
                    <Typography color={theme.palette.error.main}>{errorMessage}</Typography>
                </Alert>
            }
            <Center>
                <Button variant="contained" fullWidth type={"submit"}>
                    <Typography variant='button'>Cadastrar</Typography>
                </Button>
            </Center>
            <Typography variant="body1" textAlign={"center"}>
                Já possui conta?&nbsp;<Link as={RouterLink} to={"/login"} variant={"underline-secondary"}>Entre aqui</Link>
            </Typography>
        </AuthForm>
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