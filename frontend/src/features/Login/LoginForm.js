import React, {useContext, useEffect, useState} from "react";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {Box, Stack} from "@mui/system";
import {Alert, AlertTitle, Button, CircularProgress, Link, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {LayoutContext} from "../../providers/LayoutProvider";
import {motion} from "framer-motion";
import {login} from "../../services/authService";
import {compareAllObjectKeys, removeMaskCpf} from "../../utils/utils";
import InputText from "../../components/controls/InputText";
import InputPassword from "../../components/controls/InputPassword";
import InputCheckbox from "../../components/controls/InputCheckbox";
import LoadingButton from "../../components/buttons/LoadingButton";

function LoginForm() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const layout = useContext(LayoutContext);

    const [credencial, setCredencial] = useState({
        cpf: "",
        senha: ""
    });
    const [lembrarSenha, setLembrarSenha] = useState(false);
    const [error, setError] = useState({
        input: null,
        message: null
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
                setError(() => ({
                    input: null,
                    message: null
                }));
                if (lembrarSenha) {
                    localStorage.setItem("token", res.data);
                } else {
                    localStorage.removeItem("token");
                }
                //navigate('/meus-projetos');
                setLoading(false);
            }).catch((err) => {
                switch (err.response.data){
                    case 'O cpf informado está incorreto!':
                        setError(() => ({
                            input: 'cpf',
                            message: 'CPF não cadastrado!'
                        }));
                        break
                    case 'A senha digitada está incorreta!':
                        setError(() => ({
                            input: 'senha',
                            message: 'Senha inválida!'
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
                            autoFocus={false}
                            inputProps={{maxLength: 14}}
                            error={error.input == 'cpf'}
                        />
                        <Stack direction='column' spacing={1}>
                            <InputPassword
                                required={true}
                                value={credencial.senha}
                                name='senha'
                                label='Senha'
                                onChange={handleOnChange}
                                inputProps={{maxLength: 10}}
                                error={error.input == 'senha'}
                            />
                            <InputCheckbox
                                onChange={handleOnChangeLembrarSenha}
                                label='Lembrar Senha'
                            />
                        </Stack>
                        {error.message != null &&
                            <Alert severity="error">
                                {error.message}
                            </Alert>
                        }
                        <Stack direction='row' alignItems='center' justifyContent='space-between'>
                            <LoadingButton sx={{width: '120px'}} type='submit' loading={loading}>
                                <Typography color='secondary'>Entrar</Typography>
                            </LoadingButton>
                            <Typography variant="body1" textAlign="center">
                                <Link as={RouterLink} to="/cadastro" variant="primary">Criar Conta</Link>
                            </Typography>
                        </Stack>
                    </Stack>
                </form>
            </motion.div>
        </Box>
    );
}

export default LoginForm;