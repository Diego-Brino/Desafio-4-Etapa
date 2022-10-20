import React, {useContext, useEffect, useState} from "react";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {Stack, useTheme} from "@mui/system";
import {Alert, Button, Link, TextField, Typography} from "@mui/material";
import Center from "../../layouts/Center";
import {useDispatch} from "react-redux";
import AuthForm from "../../components/AuthForm";
import {LayoutContext} from "../../providers/LayoutProvider";
import InputMask from "react-input-mask";
import {motion, useAnimation} from "framer-motion";

function CadastroForm() {

    const theme = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const layout = useContext(LayoutContext);
    const controls = useAnimation()

    const [cadastro, setCadastro] = useState({
        lattesCientista: "",
        cpfCientista: "",
        emailCientista: "",
        snhCientista: "",
        nomeCientista: "",
        dtnCientista: "",
        emailAltCientista: "",
        tiktokCientista: "",
        youtubeCientista: "",
        instagramCientista: "",
        facebookCientista: "",
        linkedInCientista: "",
        telCientista: "",
        telAltCientista: "",
        areaAtuCientista: [],
        forCientista: [],
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [error, setError] = useState(false);
    const [step, setStep] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cadastro.emailCientista == "teste@teste.com") {
            setErrorMessage("email já cadastrado")
        } else if (cadastro.cpfCientista == "999.999.999-99") {
            setErrorMessage("cpf já cadastrado")
        } else {
            setErrorMessage("");
            navigate("/login");
        }

    }

    useEffect(() => {
        console.log(step)
        controls.start({
            opacity: 1,
            transition: {duration: 0.5}
        })
    }, [step, controls]);

    return (
        <motion.div initial={{opacity: 0}} animate={controls}>
            <AuthForm onSubmit={handleSubmit} heading='Cadastro'>
                {step == 0 &&
                    <>
                        <InputMask
                            mask='999.999.999-99'
                            maskChar={''}
                            onChange={e => {
                                setCadastro(prevState => ({...prevState, cpfCientista: e.target.value}))
                            }}>
                            {() => <TextField
                                autoFocus={true}
                                inputProps={{color: theme.palette.text.secondary}}
                                label="Cpf"
                                variant="filled"
                                type="text"
                                error={error}
                                required={true}
                            />}
                        </InputMask>
                        <TextField
                            label="Lattes"
                            variant="filled"
                            type="number"
                            required
                            onChange={e => {
                                setCadastro(prevState => ({...prevState, lattesCientista: e.target.value}))
                            }}
                        />
                        <TextField
                            label="Email"
                            variant="filled"
                            type="email"
                            required
                            onChange={e => {
                                setCadastro(prevState => ({...prevState, emailCientista: e.target.value}))
                            }}
                        />
                        <TextField
                            label="Senha"
                            variant="filled"
                            type="password"
                            required
                            onChange={e => {
                                setCadastro(prevState => ({...prevState, snhCientista: e.target.value}))
                            }}
                        />
                        {error &&
                            <Alert severity="error">
                                {errorMessage}
                            </Alert>
                        }
                        <Center>
                            <Button variant="contained" sx={{width: '50%'}} type={"button"} onClick={() => setStep(1)}>
                                <Typography color='secondary'>Avançar</Typography>
                            </Button>
                        </Center>
                    </>
                }
                {step == 1 &&
                    <>
                        <TextField
                            label="Nome "
                            variant="filled"
                            type="text"
                            onChange={e => {
                                setCadastro(prevState => ({...prevState, lattesCientista: e.target.value}))
                            }}
                        />
                        <TextField
                            label="Lattes"
                            variant="filled"
                            type="number"
                            required
                            onChange={e => {
                                setCadastro(prevState => ({...prevState, lattesCientista: e.target.value}))
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
                            <Button variant="contained" sx={{width: '40%'}} type={"button"} onClick={() => setStep(0)}>
                                <Typography color='secondary'>Voltar</Typography>
                            </Button>
                            <Button variant="contained" sx={{width: '40%'}} type={"button"} onClick={() => setStep(2)}>
                                <Typography color='secondary'>Avançar</Typography>
                            </Button>
                        </Stack>
                    </>
                }
                <Typography variant="body1" textAlign={"center"}>
                    Já possui conta?&nbsp;<Link as={RouterLink} to={"/login"} variant={"underline-secondary"}>Entre aqui</Link>
                </Typography>
            </AuthForm>
        </motion.div>
    );
}


export default CadastroForm;