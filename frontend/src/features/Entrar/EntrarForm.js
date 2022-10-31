import React, {useContext, useEffect, useState} from "react";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {Box, Stack} from "@mui/system";
import {Alert, Link, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {LayoutContext} from "../../providers/LayoutProvider";
import {motion} from "framer-motion";
import {removeMaskCpf} from "../../utils/utils";
import InputText from "../../components/inputs/InputText";
import InputPassword from "../../components/inputs/InputPassword";
import InputCheckbox from "../../components/inputs/InputCheckbox";
import LoadingButton from "../../components/buttons/LoadingButton";
import useFetch from "../../hooks/useFetch";
import {Formik, Form, Field} from 'formik';
import InputMask from "react-input-mask";

function EntrarForm() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const layout = useContext(LayoutContext);

    const [formData, setFormData] = useState({
        cpf: "",
        senha: ""
    });
    const [formError, setFormError] = useState({
        input: '',
        message: ''
    })
    const [lembrarSenha, setLembrarSenha] = useState(false);
    const {response, error, loading, fetchData} = useFetch({
        method: 'POST',
        url: 'http://localhost:8080/auth/login',
        data: formData,
    }, false);

    function validateCpf(value) {
        let error;
        console.log(value)
        if (!value) {
            error = 'CPF: Campo Obrigatório';
        } else if (!value.length < 14) {
            error = 'CPF: Inválido';
        }
        return error;
    }

    useEffect(() => {
        setFormData(prevState => ({
            ...prevState, cpf: removeMaskCpf(formData.cpf)
        }));
    }, [formData.cpf])

    const handleOnSubmitForm = async (e, values) => {
        e.preventDefault();
        console.log(values)

        // fetchData({ //Para acessar a response e o erro dentro do onSubmit deve-se usar a promise aqui
        //     method: 'POST',
        //     url: 'http://localhost:8080/auth/login',
        //     data: formData
        // }).then((res) => {
        //     lembrarSenha ? localStorage.setItem("token", res.data) : localStorage.removeItem("token");
        //     navigate('/meus-projetos');
        // }).catch((err) => {
        //     setFormError({
        //         input: err.response.data.attribute,
        //         message: err.response.data.message
        //     })
        // })
    }

    const handleOnChangeForm = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleOnChangeLembrarSenha = (e) => {
        setLembrarSenha(!lembrarSenha);
    }

    //region styles
    const sxFormWrapper = {
        width: [layout === 'desktop' ? "350px" : "100%"],
        maxWidth: [layout === 'desktop' ? "initial" : "350px"],
        padding: "25px 25px"
    }
    const sxFormTitle = {
        fontWeight: "bold",
        textAlign: "center"
    }
    const sxButtonStack = {
        justifyContent: [layout === 'desktop' ? 'space-between' : 'center']
    }
    const sxLink = {
        textAlign: "center",
        display: 'flex',
        alignItems: 'center'
    }
    const sxButton = {
        width: '120px'
    }
    //endregion

    return (
        <Box sx={sxFormWrapper}>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.25}}}>
                <Stack spacing={4}>
                    <Typography variant='h3' sx={sxFormTitle}>Login</Typography>
                    <Formik
                        initialValues={{
                            cpf: '',
                            senha: ''
                        }}
                        onSubmit={ values => {handleOnSubmitForm(values)}}
                    >
                        {({errors, touched, validateField, validateForm}) => (
                            <Form>
                                <Stack spacing={4}>
                                    <Field
                                        name='cpf'
                                        validate={validateCpf}
                                        com={() => (
                                            <InputMask
                                                mask='999.999.999-99'
                                                maskChar=''
                                                onChange={handleOnChangeForm}
                                                type='text'>
                                                {() => (
                                                    <TextField
                                                        error={errors.cpf != null}
                                                        required
                                                        variant="filled"
                                                        autoFocus
                                                        inputProps={{maxLength: 14}}
                                                        label='CPF'
                                                    />)}
                                            </InputMask>
                                        )}
                                    />
                                    <Stack spacing={1}>
                                        <InputPassword
                                            required={true}
                                            value={formData.senha}
                                            name='senha'
                                            label='Senha'
                                            onChange={handleOnChangeForm}
                                            inputProps={{maxLength: 10}}
                                            error={formError.input === 'senha'}
                                        />
                                        <InputCheckbox
                                            onChange={handleOnChangeLembrarSenha}
                                            label='Lembrar Senha'
                                        />
                                    </Stack>
                                    {errors &&
                                        <Alert severity="error">
                                            {errors.cpf}
                                        </Alert>
                                    }
                                    <Stack direction='row' spacing={4} sx={sxButtonStack}>
                                        <Typography variant="body1" sx={sxLink}>
                                            <Link as={RouterLink} to="/cadastrar" variant="primary">Criar Conta</Link>
                                        </Typography>
                                        <LoadingButton type='submit' loading={loading} sx={sxButton}>
                                            <Typography color='secondary'>Entrar</Typography>
                                        </LoadingButton>
                                    </Stack>
                                </Stack>
                            </Form>
                        )}
                    </Formik>
                </Stack>
            </motion.div>
        </Box>
    );
}

export default EntrarForm;