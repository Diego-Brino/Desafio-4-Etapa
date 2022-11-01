import React, {useContext, useState} from "react";
import {Stack, useTheme} from "@mui/system";
import {Button, Grid, Typography} from "@mui/material";
import {motion} from "framer-motion";
import InputText from "../../components/inputs/InputText";
import InputEmail from "../../components/inputs/InputEmail";
import InputPassword from "../../components/inputs/PasswordField";
import LoadingButton from "../../components/buttons/LoadingButton";
import InputDate from "../../components/inputs/InputDate";
import {useNavigate} from "react-router-dom";
import {LayoutContext} from "../../providers/LayoutProvider";

function CadastrarFormStepGeneral(props) {

    const theme = useTheme();

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const layout = useContext(LayoutContext)

    const handleOnSubmitForm = (e) => {
        e.preventDefault();

        setLoading(true);
    }

    const handleStepBack = () => {
        navigate("/entrar")
    }

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.25}}}>
            <form onSubmit={handleOnSubmitForm}>
                <Stack spacing={4}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={4}>
                                <InputText
                                    mask='999.999.999-99'
                                    required={true}
                                    value={props.formData.cpf}
                                    name='cpf'
                                    label='CPF'
                                    onChange={props.handleOnChangeForm}
                                    autoFocus={true}
                                    inputProps={{maxLength: 14}}
                                    error={props.formError.input === 'cpf'}
                                />
                                <InputText
                                    value={props.formData.nome}
                                    name='nome'
                                    label={'Nome'}
                                    onChange={props.handleOnChangeForm}
                                    autoFocus={true}
                                    inputProps={{maxLength: 50}}
                                />
                                <InputEmail
                                    required={true}
                                    value={props.formData.email}
                                    name='email'
                                    label='Email'
                                    onChange={props.handleOnChangeForm}
                                    inputProps={{maxLength: 50}}
                                    error={props.formError.email === 'email'}
                                />
                                <InputPassword
                                    required={true}
                                    value={props.formData.senha}
                                    name='senha'
                                    label='Senha'
                                    onChange={props.handleOnChangeForm}
                                    inputProps={{maxLength: 10}}
                                />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={4}>
                                <InputText
                                    required={true}
                                    value={props.formData.lattes}
                                    name='lattes'
                                    label='Lattes'
                                    onChange={props.handleOnChangeForm}
                                    inputProps={{maxLength: 50}}
                                    error={props.formError.lattes === 'lattes'}
                                />
                                <InputDate
                                    value={props.formData.dataNascimento}
                                    name='dataNascimento'
                                    label='Data de Nascimento'
                                    onChange={props.handleOnChangeForm}
                                />
                                <InputEmail
                                    value={props.formData.emailAlternativo}
                                    name='emailAlternativo'
                                    label='Email Secundário'
                                    onChange={props.handleOnChangeForm}
                                    inputProps={{maxLength: 50}}
                                />
                                <InputText
                                    mask={'(99)99999-9999'}
                                    value={props.formData.telefones[0]}
                                    name='telefones[0]'
                                    label='Telefone'
                                    onChange={props.handleOnChangeForm}
                                    inputProps={{maxLength: 14}}
                                />
                            </Stack>
                        </Grid>
                    </Grid>
                    <Stack direction='row' spacing={4} justifyContent={layout == 'desktop' ? 'flex-end' : 'center'}>
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

export default CadastrarFormStepGeneral;