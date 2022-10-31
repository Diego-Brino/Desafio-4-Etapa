import React, {useContext, useEffect, useState} from "react";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {Box, Stack} from "@mui/system";
import {Alert, Link, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {LayoutContext} from "../../providers/LayoutProvider";
import {motion} from "framer-motion";
import {removeMaskCpf} from "../../utils/utils";
import InputText from "../../components/controls/InputText";
import InputPassword from "../../components/controls/InputPassword";
import InputCheckbox from "../../components/controls/InputCheckbox";
import LoadingButton from "../../components/buttons/LoadingButton";
import useFetch from "../../hooks/useFetch";
import sx from "@mui/system/sx";

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

    useEffect(() => {
        setFormData(prevState => ({
            ...prevState, cpf: removeMaskCpf(formData.cpf)
        }));
    }, [formData.cpf])

    const handleSubmit = async (e) => {
        e.preventDefault();
        fetchData({
            method: 'POST',
            url: 'http://localhost:8080/auth/login',
            data: formData
        }).then((res) => {
            lembrarSenha ? localStorage.setItem("token", res.data) : localStorage.removeItem("token");
            navigate('/meus-projetos');
        }).catch((err) => {
            setFormError({
                input: err.response.data.attribute,
                message: err.response.data.message
            })
        })
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
                <form onSubmit={handleSubmit}>
                    <Stack spacing={4}>
                        <Typography variant='h3' sx={sxFormTitle}>Login</Typography>
                        <InputText
                            mask='999.999.999-99'
                            required={true}
                            value={formData.cpf}
                            name='cpf'
                            label='CPF'
                            onChange={handleOnChangeForm}
                            autoFocus={false}
                            inputProps={{maxLength: 14}}
                            error={formError.input === 'cpf'}
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
                        {formError.message !== '' &&
                            <Alert severity="error">
                                {formError.message}
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
                </form>
            </motion.div>
        </Box>
    );
}

export default EntrarForm;