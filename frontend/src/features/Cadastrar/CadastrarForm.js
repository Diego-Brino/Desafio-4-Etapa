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

    const [cadastro, setCadastro] = useState({
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
    const [error, setError] = useState({
        input: null,
        message: null
    });
    const [step, setStep] = useState(0);

    const handleOnChange = (e) => {
        setCadastro(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cadastro.email == "teste@teste.com") {
            setErrorMessage("email já cadastrado")
        } else if (cadastro.cpf == "999.999.999-99") {
            setErrorMessage("cpf já cadastrado")
        } else {
            setErrorMessage("");
            navigate("/login");
        }
    }

    return (
        <Box sx={layout === 'desktop' ? {width: "682px"} : {width: "100%", maxWidth: "350px"}} padding="25px 25px">
            <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.25}}}>
                <Stack spacing={4}>
                    <Stack spacing={1}>
                        <Typography variant='h3' align='center' fontWeight="bold">
                            Cadastro
                        </Typography>
                        <Typography variant='h6' align='center' fontWeight="bold">
                            Campos obrigatórios *
                        </Typography>
                    </Stack>
                    {step === 0 &&
                        <CadastrarFormStepGeneral cadastro={cadastro} onChange={handleOnChange} error={error} setError={setError} setStep={setStep}/>
                    }
                    {step === 1 &&
                        <CadastrarFormStepSelect cadastro={cadastro} onChange={handleOnChange} error={error} setError={setError} setStep={setStep}/>
                    }
                    {error.message != null &&
                        <Alert severity="error">
                            {error.message}
                        </Alert>
                    }
                </Stack>
            </motion.div>
        </Box>
    );
}


export default CadastrarForm;