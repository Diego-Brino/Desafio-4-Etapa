import React, {useContext, useState} from "react";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {Box, Stack, useTheme} from "@mui/system";
import {Alert, Button, Grid, Link, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {LayoutContext} from "../../providers/LayoutProvider";
import InputMask from "react-input-mask";
import {motion} from "framer-motion";
import CadastroFormStepGeneral from "./CadastroFormStepGeneral";
import CadastroFormStep2 from "./CadastroFormStep2";
import {compareAllObjectKeys} from "../../utils/utils";
import CadastroFormStep3 from "./CadastroFormStep3";

function CadastroForm() {

    const theme = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const layout = useContext(LayoutContext);

    const [cadastro, setCadastro] = useState({
        lattes: "",
        cpf: "",
        email: "",
        senha: "",
        nome: "",
        dataNascimento: "",
        emailAlternativo: "",
        redesSociais: [],
        telefones: [],
        areasAtuacao: [],
        formacoes: [],
    });
    const [error, setError] = useState({
        input: null,
        message: null
    });
    const [step, setStep] = useState(0);

    const handleOnChange = (e) => {
        setCadastro(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cadastro.email == "teste@teste.com") {
            setErrorMessage("email já cadastrado")
        } else if (cadastro.cpf == "999.999.999-99") {
            setErrorMessage("cpf já cadastrado")
        } else {
            setErrorMessage("");
            navigate("/login");
        }
    }

    return (
        <Box padding="25px 25px">
            <Stack spacing={4}>
                <Typography variant='h3' align='center' fontWeight="bold">
                    Cadastro
                </Typography>
                <Typography variant='h6' align='center' fontWeight="bold">
                    Campos obrigatórios *
                </Typography>
                {step === 0 &&
                    <CadastroFormStepGeneral cadastro={cadastro} onChange={handleOnChange} error={error} setError={setError} setStep={setStep}/>
                }
                {step === 1 &&
                    <CadastroFormStep3 cadastro={cadastro} onChange={handleOnChange} error={error} setError={setError} setStep={setStep}/>
                }
                {error.message != null &&
                    <Alert severity="error">
                        {error.message}
                    </Alert>
                }
            </Stack>
        </Box>
    );
}


export default CadastroForm;