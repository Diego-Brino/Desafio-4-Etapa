import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Box, Stack, useTheme} from "@mui/system";
import {Alert, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {LayoutContext} from "../../providers/LayoutProvider";
import {motion} from "framer-motion";
import CadastrarFormStepGeneral from "./CadastrarFormStepGeneral";
import CadastrarFormStepSelect from "./CadastrarFormStepSelect";
import useFetch from "../../hooks/useFetch";
import * as yup from "yup";
import {useFormik} from "formik";

function CadastrarForm() {

    const theme = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const layout = useContext(LayoutContext);

    const [step, setStep] = useState(0);

    const validationSchemaStepGeneral = yup.object({
        cpf: yup
            .string()
            .min(14, 'Campo CPF inválido!')
            .required('Campo CPF é obrigatório!'),
        senha: yup
            .string()
            .required('Campo Senha é obrigatório!'),
        lattes: yup
            .string()
            .required('Campo Lattes é obrigatório!'),
        email: yup
            .string()
            .required('Campo Email é obrigatório!')
            .email('Campo Email inválido!'),
        emailAlternativo: yup
            .string()
            .email('Campo Email Alternativo inválido!'),
        telefones: yup
            .array()
            .of(yup.object().shape({
                ddd: yup.string(),
                numero: yup.string(),
            }))
            .min(11, 'Campo Telefone inválido!'),
    });
    const formik = useFormik({
        initialValues: {
            cpf: '',
            senha: '',
            email: '',
            lattes: '',
            emailAlternativo: '',
            nome: '',
            telefones: [],
            dataNascimento: '',
        },
        onSubmit: (values) => {
            handleSubmit(values)
        },
        validationSchema: step === 0 ? validationSchemaStepGeneral : validationSchemaStepGeneral,
        validateOnBlur: false,
        validateOnChange: false
    })

    const {response, error, loading, fetchData} = useFetch({
        method: 'POST',
        url: 'http://localhost:8080/auth/login',
        data: formik.values,
    }, false);

    const handleSubmit = () => {
        alert('submited')
    }

    //region styles
    const sxFormWrapper = {
        width: [layout === 'desktop' ? "682px" : "100%"],
        maxWidth: [layout === 'desktop' ? "initial" : "350px"],
        padding: "25px 25px"
    }
    const sxFormTitle = {
        textAlign: 'center',
        fontWeight: "bold"
    }
    const sxFormSubtitle = {
        textAlign: 'center',
        fontWeight: "bold"
    }
    //endregion

    return (
        <Box sx={sxFormWrapper}>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.25}}}>
                <form onSubmit={formik.handleSubmit}>
                    <Stack spacing={4}>
                        <Stack spacing={1}>
                            <Typography sx={sxFormTitle} variant='h3'>
                                Cadastro
                            </Typography>
                        </Stack>
                        {step === 0 &&
                            <CadastrarFormStepGeneral formik={formik} setStep={setStep}/>
                        }
                        {step === 1 &&
                            <CadastrarFormStepSelect formik={formik} setStep={setStep}/>
                        }
                    </Stack>
                </form>
            </motion.div>
        </Box>
    );
}


export default CadastrarForm;