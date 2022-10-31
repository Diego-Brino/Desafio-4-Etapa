import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Box, Stack, useTheme} from "@mui/system";
import {Alert, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {LayoutContext} from "../../providers/LayoutProvider";
import {motion} from "framer-motion";
import CadastrarFormStepGeneral from "./CadastrarFormStepGeneral";
import CadastrarFormStepSelect from "./CadastrarFormStepSelect";

function CadastrarForm() {

    const theme = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const layout = useContext(LayoutContext);

    const [formData, setFormData] = useState({
        lattes: "",
        cpf: "",
        email: "",
        senha: "",
        nome: "",
        dataNascimento: "",
        emailAlternativo: "",
        redesSociais: [],
        telefones: [],
        areasAtuacao: [],
        formacoes: [],
    });
    const [formError, setFormError] = useState({
        input: '',
        message: ''
    })
    const [step, setStep] = useState(0);

    const handleOnChangeForm = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleOnSubmitForm = (e) => {
        e.preventDefault();
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
                <Stack spacing={4}>
                    <Stack spacing={1}>
                        <Typography sx={sxFormTitle} variant='h3'>
                            Cadastro
                        </Typography>
                        <Typography sx={sxFormSubtitle} variant='h6'>
                            Campos obrigatórios *
                        </Typography>
                    </Stack>
                    {step === 0 &&
                        <CadastrarFormStepGeneral
                            formData={formData}
                            handleOnChangeForm={handleOnChangeForm}
                            formError={formError}
                            setFormError={setFormError}
                            setStep={setStep}/>
                    }
                    {step === 1 &&
                        <CadastrarFormStepSelect
                            formData={formData}
                            handleOnChangeForm={handleOnChangeForm}
                            formError={formError}
                            setFormError={setFormError}
                            setStep={setStep}/>
                    }
                    {formError.message != '' &&
                        <Alert severity="error">
                            {formError.message}
                        </Alert>
                    }
                </Stack>
            </motion.div>
        </Box>
    );
}


export default CadastrarForm;