import React, {useContext, useState} from "react";
import {Stack, useTheme} from "@mui/system";
import {Alert, Button, Grid, TextField, Typography} from "@mui/material";
import {motion} from "framer-motion";
import MaskedField from "../../components/inputs/MaskedField";
import InputEmail from "../../components/inputs/InputEmail";
import InputPassword from "../../components/inputs/PasswordField";
import LoadingButton from "../../components/buttons/LoadingButton";
import InputDate from "../../components/inputs/InputDate";
import {useNavigate} from "react-router-dom";
import {LayoutContext} from "../../providers/LayoutProvider";
import PasswordField from "../../components/inputs/PasswordField";
import {removeMaskCpf, removeMaskTelefone, telefoneStringToObject} from "../../utils/utils";

function CadastrarFormStepGeneral(props) {

    const theme = useTheme();

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const layout = useContext(LayoutContext)

    const handleStepBack = () => {
        navigate("/entrar")
    }

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.25}}}>
            <Stack spacing={4}>
                <Grid container spacing={4}>
                    <Grid item xs={12} lg={6}>
                        <Stack spacing={4}>
                            <MaskedField
                                mask='999.999.999-99'
                                value={props.formik.values.cpf}
                                name='cpf'
                                label='CPF *'
                                onChange={props.formik.handleChange}
                                autoFocus={true}
                                inputProps={{maxLength: 14}}
                                error={Boolean(props.formik.errors.cpf)}
                            />
                            <TextField
                                value={props.formik.values.lattes}
                                name='lattes'
                                label='Lattes *'
                                variant='filled'
                                onChange={props.formik.handleChange}
                                inputProps={{maxLength: 50}}
                                error={Boolean(props.formik.errors.lattes)}
                            />
                            <TextField
                                value={props.formik.values.email}
                                name='email'
                                label='Email *'
                                variant='filled'
                                onChange={props.formik.handleChange}
                                inputProps={{maxLength: 50}}
                                error={Boolean(props.formik.errors.email)}
                            />
                            <PasswordField
                                value={props.formik.values.senha}
                                name='senha'
                                label='Senha *'
                                onChange={props.formik.handleChange}
                                inputProps={{maxLength: 10}}
                                error={Boolean(props.formik.errors.senha)}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Stack spacing={4}>
                            <TextField
                                value={props.formik.values.nome}
                                name='nome'
                                label='Nome'
                                variant='filled'
                                onChange={props.formik.handleChange}
                                inputProps={{maxLength: 50}}
                            />
                            <TextField
                                value={props.formik.values.dataNascimento}
                                name='dataNascimento'
                                label='Data de Nascimento'
                                InputLabelProps={{ shrink: true}}
                                variant='filled'
                                onChange={props.formik.handleChange}
                                type='date'
                            />
                            <TextField
                                value={props.formik.values.emailAlternativo}
                                name='emailAlternativo'
                                label='Email Secundário'
                                onChange={props.formik.handleChange}
                                variant='filled'
                                inputProps={{maxLength: 50}}
                                error={Boolean(props.formik.errors.emailAlternativo)}
                            />
                            <MaskedField
                                mask={'(99)99999-9999'}
                                value={props.formik.values.telefones[0]}
                                name='telefones[0]'
                                label='Telefone'
                                onChange={(e) => {
                                    let str = removeMaskTelefone(e.target.value);
                                    let obj = telefoneStringToObject(str);
                                    props.formik.setFieldValue('telefones', obj, true)
                                }}
                                inputProps={{maxLength: 14}}
                                error={Boolean(props.formik.errors.telefones)}
                            />
                        </Stack>
                    </Grid>
                </Grid>
                {Object.keys(props.formik.errors).length > 0 &&
                    <Alert severity="error">
                        {Object.keys(props.formik.errors).map((key, index) => {
                            return (
                                <Typography
                                    color={theme.palette.error.main}
                                    key={index}>
                                    {props.formik.errors[key]}
                                </Typography>
                            )
                        })}
                    </Alert>
                }
                <Stack direction='row' spacing={4} justifyContent={layout == 'desktop' ? 'flex-end' : 'center'}>
                    <Button variant="contained" sx={{width: '120px'}} type='button' onClick={handleStepBack}>
                        <Typography color='secondary'>Cancelar</Typography>
                    </Button>
                    <LoadingButton sx={{width: '120px'}} type='submit' loading={loading}>
                        <Typography color='secondary'>Avançar</Typography>
                    </LoadingButton>
                </Stack>
            </Stack>
        </motion.div>
    )
}

export default CadastrarFormStepGeneral;