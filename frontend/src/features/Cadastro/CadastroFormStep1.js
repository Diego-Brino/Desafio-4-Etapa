import React, {useState} from "react";
import {Stack, useTheme} from "@mui/system";
import InputMask from "react-input-mask";
import {Alert, Button, TextField, Typography} from "@mui/material";
import {motion} from "framer-motion";
import InputText from "../../components/controls/InputText";
import {login} from "../../services/authService";
import InputEmail from "../../components/controls/InputEmail";
import InputPassword from "../../components/controls/InputPassword";
import LoadingButton from "../../components/buttons/LoadingButton";

function CadastroFormStep1(props) {

    const theme = useTheme();

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        setTimeout(() => {
            props.setStep(1);
            setLoading(false)
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
                    <Stack direction='row' justifyContent='flex-end'>
                        <LoadingButton sx={{width: '120px'}} type='submit' loading={loading}>
                            <Typography color='secondary'>Avançar</Typography>
                        </LoadingButton>
                    </Stack>
                </Stack>
            </form>
        </motion.div>
    )
}

export default CadastroFormStep1;