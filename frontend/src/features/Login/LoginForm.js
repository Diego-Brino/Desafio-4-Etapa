import React, {useContext, useState} from "react";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {Stack, useTheme} from "@mui/system";
import {Alert, Button, Checkbox, FormControlLabel, Link, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {LayoutContext} from "../../providers/LayoutProvider";
import AuthForm from "../../components/AuthForm";
import InputMask from "react-input-mask";

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
            setErrorMessage("Cpf ou Senha inválido(a)!")
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
        <AuthForm onSubmit={handleSubmit} heading='Login'>
            <InputCpf error={error} onChange={handleOnChangeInputCpf}/>
            <Stack direction='column' spacing={1}>
                <InputSenha error={error} onChange={handleOnChangeInputSenha}/>
                <InputLembrarSenha onChange={handleOnChangeInputLembrarSenha}/>
            </Stack>
            {error &&
                <Alert severity="error">
                    {errorMessage}
                </Alert>
            }
            <Stack direction='row' alignItems='center' justifyContent='space-between'>
                <Button variant="contained" sx={{width: '50%'}} type={"submit"}>
                    <Typography variant='button' color='secondary'>Entrar</Typography>
                </Button>
                <Typography variant="body1" textAlign={"center"}>
                    <Link as={RouterLink} to="/cadastro" variant="primary">Criar Conta</Link>
                </Typography>
            </Stack>
        </AuthForm>
    );
}

function InputCpf(props) {

    const theme = useTheme();

    return (
        <InputMask
            mask='999.999.999-99'
            maskChar={''}
            onChange={props.onChange}>
            {() => <TextField
                inputProps={{color: theme.palette.text.secondary}}
                label="Cpf"
                variant="filled"
                type="text"
                error={props.error}
                required={true}
            />}
        </InputMask>
    )
}
function InputSenha(props) {

    const theme = useTheme();

    return (
        <TextField
            inputProps={{color: theme.palette.text.secondary}}
            label="Senha"
            variant="filled"
            type="password"
            error={props.error}
            required={true}
            onChange={props.onChange}
        />
    )
}
function InputLembrarSenha(props) {

    const theme = useTheme();

    return (
        <FormControlLabel
            sx={{width: 'min-content'}}
            control={<Checkbox value={props.value} onChange={props.onChange}/>}
            label={<Typography whiteSpace='nowrap'>Lembrar Senha</Typography>}
        />
    )
}

export default LoginForm;