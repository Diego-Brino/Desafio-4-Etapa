import React, {useContext, useState} from "react";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {Box, Stack, useTheme} from "@mui/system";
import {Alert, Button, Link, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {LayoutContext} from "../../providers/LayoutProvider";
import InputMask from "react-input-mask";
import {motion} from "framer-motion";
import CadastroFormStep1 from "./CadastroFormStep1";

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
    const [errorMessage, setErrorMessage] = useState("");
    const [error, setError] = useState(false);
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
        <Box sx={layout === 'desktop' ? {width: "350px"} : {width: "100%", maxWidth: "350px"}} padding="25px 25px">
            <Stack spacing={4}>
                <Typography variant='h3' align='center' fontWeight="bold">
                    Cadastro
                </Typography>
                {step === 0 &&
                    <CadastroFormStep1 cadastro={cadastro} ={setCadastro} error={error} setStep={setStep}/>
                }
                {step === 1 &&
                    <motion.div initial={{opacity: 0}} key={step} animate={{
                        opacity: 1,
                        transition: {duration: 0.25}
                    }}>
                        <Stack spacing={4}>
                            <TextField
                                label="Nome "
                                variant="filled"
                                type="text"
                                value={cadastro.nomeCientista}
                                onChange={e => {
                                    setCadastro(prevState => ({...prevState, nomeCientista: e.target.value}))
                                }}
                            />
                            <TextField
                                label="Data de Nascimento"
                                variant="filled"
                                focused={true}
                                type="date"
                                onChange={e => {
                                    setCadastro(prevState => ({...prevState, dtnCientista: e.target.value}))
                                }}
                            />
                            <TextField
                                label="Email"
                                variant="filled"
                                type="email"
                                required
                                onChange={e => {
                                    setCadastro(prevState => ({...prevState, lattesCientista: e.target.value}))
                                }}
                            />
                            <TextField
                                label="Senha"
                                variant="filled"
                                type="password"
                                required
                                onChange={e => {
                                    setCadastro(prevState => ({...prevState, lattesCientista: e.target.value}))
                                }}
                            />
                            {error &&
                                <Alert severity="error">
                                    {errorMessage}
                                </Alert>
                            }
                            <Stack direction='row' alignItems='center' justifyContent='space-between'>
                                <Button variant="contained" sx={{width: '40%'}} type={"button"}
                                        onClick={() => setStep(0)}>
                                    <Typography color='secondary'>Voltar</Typography>
                                </Button>
                                <Button variant="contained" sx={{width: '40%'}} type={"button"}
                                        onClick={() => setStep(2)}>
                                    <Typography color='secondary'>Avançar</Typography>
                                </Button>
                            </Stack>
                        </Stack>
                    </motion.div>
                }
                <Typography variant="body1" textAlign={"center"}>
                    Já possui uma Conta?&nbsp;<Link as={RouterLink} to={"/auth/login"} variant={"underline-secondary"}>Entre aqui</Link>
                </Typography>
            </Stack>
        </Box>
    );
}


export default CadastroForm;