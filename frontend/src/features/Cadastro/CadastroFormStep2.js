import React, {useState} from "react";
import {Stack, useTheme} from "@mui/system";
import {Button, Typography} from "@mui/material";
import {motion} from "framer-motion";
import InputText from "../../components/controls/InputText";
import InputEmail from "../../components/controls/InputEmail";
import LoadingButton from "../../components/buttons/LoadingButton";
import InputDate from "../../components/controls/InputDate";

function CadastroFormStep2(props) {

    const theme = useTheme();

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        setTimeout(() => {
            props.setStep(2);
            setLoading(false)
        }, 1000);
    }

    const handleGoBack = () => {
        props.setStep(0);
    }

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.25}}}>
            <form onSubmit={handleSubmit}>
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
                    <Stack direction='row' alignItems='center' justifyContent='space-between'>
                        <Button variant="contained" sx={{width: '120px'}} type='button' onClick={handleGoBack}>
                            <Typography color='secondary'>Voltar</Typography>
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

export default CadastroFormStep2;