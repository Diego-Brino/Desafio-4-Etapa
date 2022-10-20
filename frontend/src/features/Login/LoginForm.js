import React, {useContext, useState} from "react";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {Stack, useTheme} from "@mui/system";
import {Alert, Button, Checkbox, FormControlLabel, Link, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {LayoutContext} from "../../providers/LayoutProvider";
import AuthForm from "../../components/AuthForm";
import InputMask from "react-input-mask";
import {motion} from "framer-motion";

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
            setError(false)
            setErrorMessage("")
            navigate("/pesquisar-projetos");
        } else {
            setError(true)
            setErrorMessage("CPF ou Senha inválido(a)!")
        }

    }
    const handleOnChangeInputCpf = (e) => {
        setCredencial(prevState => ({...prevState, cpfCientista: e.target.value}));
    }
    const handleOnChangeInputSenha = (e) => {
        setCredencial(prevState => ({...prevState, snhCientista: e.target.value}));
    }
    const handleOnChangeInputLembrarSenha = (e) => {
        setLembrarSenha(!lembrarSenha)
    }

    return (
        <motion.div initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5}}>
            <AuthForm onSubmit={handleSubmit} heading='Login'>
                <InputMask
                    mask='999.999.999-99'
                    maskChar={''}
                    onChange={handleOnChangeInputCpf}>
                    {() => <TextField
                        autoFocus={true}
                        inputProps={{color: theme.palette.text.secondary}}
                        label="CPF"
                        variant="filled"
                        type="text"
                        error={error}
                        required={true}
                    />}
                </InputMask>
                <Stack direction='column' spacing={1}>
                    <TextField
                        inputProps={{color: theme.palette.text.secondary}}
                        label="Senha"
                        variant="filled"
                        type="password"
                        error={error}
                        required={true}
                        onChange={handleOnChangeInputSenha}
                    />
                    <FormControlLabel
                        sx={{width: 'min-content'}}
                        control={<Checkbox onChange={handleOnChangeInputLembrarSenha}/>}
                        label={<Typography sx={{userSelect: 'none'}} whiteSpace='nowrap'>Lembrar Senha</Typography>}
                    />
                </Stack>
                {error &&
                    <Alert severity="error">
                        {errorMessage}
                    </Alert>
                }
                <Stack direction='row' alignItems='center' justifyContent='space-between'>
                    <Button variant="contained" sx={{width: '50%'}} type={"submit"}>
                        <Typography color='secondary'>Entrar</Typography>
                    </Button>
                    <Typography variant="body1" textAlign={"center"}>
                        <Link as={RouterLink} to="/cadastro" variant="primary">Criar Conta</Link>
                    </Typography>
                </Stack>
            </AuthForm>
        </motion.div>
    );
}

export default LoginForm;