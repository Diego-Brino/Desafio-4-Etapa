import React, {useState} from "react";
import {Stack, useTheme} from "@mui/system";
import InputMask from "react-input-mask";
import {Alert, Button, TextField, Typography} from "@mui/material";
import {motion} from "framer-motion";
import InputText from "../../components/controls/InputText";
import {login} from "../../services/authService";
import InputEmail from "../../components/controls/InputEmail";
import InputPassword from "../../components/controls/InputPassword";

function CadastroFormStep1(props) {

    const theme = useTheme();

    const [loading, setLoading] = useState(false);
    const [errorMessages, setErrorMessages] = useState({
        cpf: "",
        lattes: "",
        email: "",
        senha: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        setTimeout(() => {
            props.setStep(1);
        }, 1000);
    }

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.25}}}>
            <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                    <InputText
                        mask='999.999.999-99'
                        required={true}
                        value={props.cadastro.cpf}
                        name='cpf'
                        label='CPF'
                        onChange={props.handleOnChange}
                        autoFocus={true}
                        inputProps={{maxLength: 14}}
                        error={errorMessages.cpf !== ''}
                    />
                    <InputText
                        required={true}
                        value={props.cadastro.lattes}
                        name='lattes'
                        label='Lattes'
                        onChange={props.handleOnChange}
                        inputProps={{maxLength: 50}}
                        error={errorMessages.lattes !== ''}
                    />
                    <InputEmail
                        required={true}
                        value={props.cadastro.email}
                        name='email'
                        label='Email'
                        onChange={props.handleOnChange}
                        inputProps={{maxLength: 50}}
                        error={errorMessages.email !== ''}
                    />
                    <InputPassword
                        required={true}
                        value={props.cadastro.senha}
                        name='senha'
                        label='Senha'
                        onChange={props.handleOnChange}
                        inputProps={{maxLength: 10}}
                        error={errorMessages.senha !== ''}
                    />
                    {props.error &&
                        <Alert severity="error">
                            {props.errorMessage}
                        </Alert>
                    }
                    <Stack direction='row' justifyContent='flex-end'>
                        <Button variant="contained" sx={{width: '40%'}} type="submit">
                            <Typography color='secondary'>Avançar</Typography>
                        </Button>
                    </Stack>
                </Stack>
            </form>
        </motion.div>
    )
}

export default CadastroFormStep1;