import React, {useState} from "react";
import {Box, Stack, useTheme} from "@mui/system";
import {Button, Typography} from "@mui/material";
import {motion} from "framer-motion";
import InputText from "../../components/controls/InputText";
import InputEmail from "../../components/controls/InputEmail";
import LoadingButton from "../../components/buttons/LoadingButton";
import InputDate from "../../components/controls/InputDate";
import InputSelect from "../../components/controls/InputSelect";
import AddIcon from '@mui/icons-material/Add';

function CadastroFormStep3(props) {

    const theme = useTheme();

    const [loading, setLoading] = useState(false);
    const [areasAtuacao, setAreasAtuacao] = useState([]);
    const [areaAtuacao, setAreaAtuacao] = useState('');

    const values = [
        "teste1",
        "teste2",
        "teste3",
        "teste4"
    ]

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        setTimeout(() => {
            props.setStep(3);
            setLoading(false)
        }, 1000);
    }

    const handleAddAreaAtuacao = () => {
        setAreasAtuacao(prevState => [...prevState, areaAtuacao])
    }

    const handleOnChangeAreaAtuacao = (e) => {
        setAreaAtuacao(e.target.value);
    }

    const handleGoBack = () => {
        props.setStep(1);
    }

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.25}}}>
            <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                    <Stack direction='row' alignItems='center' width='100%'>
                        <InputSelect value={areaAtuacao} onChange={handleOnChangeAreaAtuacao} values={values} label='Área de Atuação' sx={{width: '80%'}} formControlSx={{width: '100%'}}/>
                        <Button variant="contained" sx={{width: '50px'}} type='button' onClick={handleAddAreaAtuacao}>
                            <AddIcon/>
                        </Button>
                    </Stack>
                    {
                        areasAtuacao.map((val, index) => {
                            return (
                                <p key={index}>{val}</p>
                            )
                        })
                    }
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

export default CadastroFormStep3;