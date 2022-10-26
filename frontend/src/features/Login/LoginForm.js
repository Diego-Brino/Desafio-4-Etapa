import React, {useContext, useEffect, useState} from "react";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {Box, Stack} from "@mui/system";
import {Alert, Button, CircularProgress, Link, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {LayoutContext} from "../../providers/LayoutProvider";
import {motion} from "framer-motion";
import {login} from "../../services/authService";
import {removeMaskCpf} from "../../utils/utils";
import InputText from "../../components/controls/InputText";
import InputPassword from "../../components/controls/InputPassword";
import InputCheckbox from "../../components/controls/InputCheckbox";

function LoginForm() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const layout = useContext(LayoutContext);

    const [credencial, setCredencial] = useState({
        cpf: "",
        senha: ""
    });
    const [lembrarSenha, setLembrarSenha] = useState(false);
    const [errorMessages, setErrorMessages] = useState({
        cpf: "",
        senha: ""
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setCredencial(prevState => ({
            ...prevState, cpf: removeMaskCpf(credencial.cpf)
        }));
    }, [credencial.cpf])

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        setTimeout(() => {
            login(credencial).then((res) => {
                setErrorMessages(prevState => ({
                    ...prevState,
                    cpf: '',
                    senha: ''
                }));
                if (lembrarSenha) {
                    localStorage.setItem("token", res.data);
                } else {
                    localStorage.removeItem("token");
                }
                //navigate('/meus-projetos');
                setLoading(false);
            }).catch((err) => {
                switch (err.response.data.message){
                    case 'O CPF é obrigatório!':
                        setErrorMessages(prevState => ({
                            ...prevState, cpf: 'CPF é obrigatório!'
                        }));
                        break
                    case 'O cpf informado está incorreto!':
                        setErrorMessages(prevState => ({
                            ...prevState, cpf: 'CPF não cadastrado!'
                        }));
                        break
                    case 'A Senha é obrigatória!':
                        setErrorMessages(prevState => ({
                            ...prevState, cpf: 'Senha é obrigatória!'
                        }));
                        break
                    case 'A senha digitada está incorreta!':
                        setErrorMessages(prevState => ({
                            ...prevState, cpf: 'Senha inválida!'
                        }));
                        break
                }
                setLoading(false);
            })
        }, 1000);
    }

    const handleOnChange = (e) => {
        setCredencial(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleOnChangeLembrarSenha = (e) => {
        setLembrarSenha(!lembrarSenha);
    }

    return (
        <Box sx={layout === 'desktop' ? {width: "350px"} : {width: "100%", maxWidth: "350px"}} padding="25px 25px">
            <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.25}}}>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={4}>
                        <Typography variant='h3' align='center' fontWeight="bold">Login</Typography>
                        <InputText
                            mask='999.999.999-99'
                            required={true}
                            value={credencial.cpf}
                            name='cpf'
                            label='CPF'
                            onChange={handleOnChange}
                            autoFocus={true}
                            inputProps={{maxLength: 14}}
                            error={errorMessages.cpf !== ''}
                        />
                        <Stack direction='column' spacing={1}>
                            <InputPassword
                                required={true}
                                value={credencial.senha}
                                name='senha'
                                label='Senha'
                                onChange={handleOnChange}
                                inputProps={{maxLength: 10}}
                                error={errorMessages.senha !== ''}
                            />
                            <InputCheckbox
                                onChange={handleOnChangeLembrarSenha}
                                label='Lembrar Senha'
                            />
                        </Stack>
                        {(errorMessages.cpf !== '' || errorMessages.senha !== '') &&
                            <Alert severity="error">
                                {
                                    Object.keys(errorMessages).map((i) => {
                                        if(errorMessages[i] !== ''){
                                            return errorMessages[i]
                                        }
                                    })
                                }
                            </Alert>
                        }
                        <Stack direction='row' alignItems='center' justifyContent='space-between'>
                            <Button variant="contained" sx={{width: '120px'}} type="submit" disabled={loading}>
                                {!loading
                                    ? <Typography color='secondary'>Entrar</Typography>
                                    : <CircularProgress size={24} color='secondary'/>
                                }
                            </Button>
                            <Typography variant="body1" textAlign="center">
                                <Link as={RouterLink} to="/auth/cadastro" variant="primary">Criar Conta</Link>
                            </Typography>
                        </Stack>
                    </Stack>
                </form>
            </motion.div>
        </Box>
    );
}

export default LoginForm;