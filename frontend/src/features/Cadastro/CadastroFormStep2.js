import React from "react";
import {Stack, useTheme} from "@mui/system";
import InputMask from "react-input-mask";
import {Alert, Button, TextField, Typography} from "@mui/material";
import {motion} from "framer-motion";

function CadastroFormStep1(props) {

    const theme = useTheme();

    const validateStep = (e) => {
        e.preventDefault();
        props.setStep(1);
    }

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.25}}}>
            <form onSubmit={validateStep}>
                <Stack spacing={4}>
                    <InputMask
                        mask='999.999.999-99'
                        maskChar={''}
                        value={props.cadastro.cpf}
                        onChange={e => {
                            props.setCadastro(prevState => ({...prevState, cpf: e.target.value}))
                        }}>
                        {() => <TextField
                            autoFocus={true}
                            inputProps={{color: theme.palette.text.secondary, maxLength: 14}}
                            label="Cpf"
                            variant="filled"
                            type="text"
                            error={props.error}
                            required
                        />}
                    </InputMask>
                    <TextField
                        register='lattes'
                        label="Lattes"
                        variant="filled"
                        type="text"
                        value={props.cadastro.lattes}
                        required
                        inputProps={{maxLength: 50}}
                        onChange={e => {
                            props.setCadastro(prevState => ({...prevState, lattes: e.target.value}))
                        }}
                    />
                    <TextField
                        label="Email"
                        variant="filled"
                        type="email"
                        required
                        value={props.cadastro.email}
                        inputProps={{maxLength: 50}}
                        onChange={e => {
                            props.setCadastro(prevState => ({...prevState, email: e.target.value}))
                        }}
                    />
                    <TextField
                        label="Senha"
                        variant="filled"
                        type="password"
                        required
                        inputProps={{maxLength: 10}}
                        value={props.cadastro.senha}
                        onChange={e => {
                            props.setCadastro(prevState => ({...prevState, senha: e.target.value}))
                        }}
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