import React from "react";
import {Link as RouterLink} from "react-router-dom";
import {Box, Stack, styled, useTheme, width} from "@mui/system";
import {theme} from "../../providers/themes";
import {Button, Input, Link, TextField, Typography} from "@mui/material";
import Center from "../../layouts/Center";
import axios from "axios";

function LoginForm(){

    const theme = useTheme();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <PanelWrapper>
            <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                    <Typography variant="h4" align="left" fontWeight="bold">Login</Typography>
                    <TextField label="Cpf" variant={"standard"} fullWidth autoFocus/>
                    <TextField label="Senha" variant={"standard"} fullWidth/>
                    <Center>
                        <Button variant="contained" size={"large"} fullWidth><Typography variant={"button"} fontSize={18}>Entrar</Typography></Button>
                    </Center>
                    <Typography variant={"body1"} textAlign={"center"}>
                        Não Possui Conta?&nbsp;<Link as={RouterLink} to={"#"}>Cadastre-se Aqui</Link>
                    </Typography>
                </Stack>
            </form>
        </PanelWrapper>
    );
}

const PanelWrapper = styled(Box)({
    borderRadius: "5px",
    maxWidth: "400px",
    width: "100%",
    backgroundColor: theme.palette.base.white,
    padding: "20px",
    boxShadow: "#00000030 0px 19px 38px, #00000022 0px 15px 12px",
})

export default LoginForm;