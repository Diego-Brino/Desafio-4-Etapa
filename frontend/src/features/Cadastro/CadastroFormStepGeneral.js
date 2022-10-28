import React, {useState} from "react";
import {Stack, useTheme} from "@mui/system";
import InputMask from "react-input-mask";
import {Alert, Button, Grid, TextField, Typography} from "@mui/material";
import {motion} from "framer-motion";
import InputText from "../../components/controls/InputText";
import {login} from "../../services/authService";
import InputEmail from "../../components/controls/InputEmail";
import InputPassword from "../../components/controls/InputPassword";
import LoadingButton from "../../components/buttons/LoadingButton";
import InputDate from "../../components/controls/InputDate";
import {useNavigate} from "react-router-dom";

function CadastroFormStepGeneral(props) {

    const theme = useTheme();

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        setTimeout(() => {
            props.setStep(1);
            setLoading(false)
        }, 1000);
    }

    const handleStepBack = () => {
        navigate("/login")
    }

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.25}}}>
            <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={4}>
                                <InputText
                                    mask='999.999.999-99'
                                    required={true}
                                    value={props.cadastro.cpf}
                                    name='cpf'
                                    label='CPF'
                                    onChange={props.onChange}
                                    autoFocus={true}
                                    inputProps={{maxLength: 14}}
                                    error={props.error.input == 'cpf'}
                                />
                                <InputText
                                    required={true}
                                    value={props.cadastro.lattes}
                                    name='lattes'
                                    label='Lattes'
                                    onChange={props.onChange}
                                    inputProps={{maxLength: 50}}
                                    error={props.error.lattes == 'lattes'}
                                />
                                <InputEmail
                                    required={true}
                                    value={props.cadastro.email}
                                    name='email'
                                    label='Email'
                                    onChange={props.onChange}
                                    inputProps={{maxLength: 50}}
                                    error={props.error.email == 'email'}
                                />
                                <InputPassword
                                    required={true}
                                    value={props.cadastro.senha}
                                    name='senha'
                                    label='Senha'
                                    onChange={props.onChange}
                                    inputProps={{maxLength: 10}}
                                />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={4}>
                                <InputText
                                    value={props.cadastro.nome}
                                    name='nome'
                                    label={'Nome'}
                                    onChange={props.onChange}
                                    autoFocus={true}
                                    inputProps={{maxLength: 50}}
                                />
                                <InputDate
                                    value={props.cadastro.dataNascimento}
                                    name='dataNascimento'
                                    label='Data Nascimento'
                                    onChange={props.onChange}
                                />
                                <InputEmail
                                    value={props.cadastro.emailAlternativo}
                                    name='emailAlternativo'
                                    label='Email Alternativo'
                                    onChange={props.onChange}
                                    inputProps={{maxLength: 50}}
                                />
                                <InputText
                                    mask={'(99)99999-9999'}
                                    value={props.cadastro.telefones[0]}
                                    name='telefones[0]'
                                    label='Telefone'
                                    onChange={props.onChange}
                                    inputProps={{maxLength: 14}}
                                />
                            </Stack>
                        </Grid>
                    </Grid>
                    <Stack direction='row' spacing={4} justifyContent='flex-end'>
                        <Button variant="contained" sx={{width: '120px'}} type='button' onClick={handleStepBack}>
                            <Typography color='secondary'>Cancelar</Typography>
                        </Button>
                        <LoadingButton sx={{width: '120px'}} type='submit' loading={loading}>
                            <Typography color='secondary'>Avançar</Typography>
                        </LoadingButton>
                    </Stack>
                </Stack>
            </form>
        </motion.div>
    )
}

export default CadastroFormStepGeneral;