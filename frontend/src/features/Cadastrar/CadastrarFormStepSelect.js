import React, {useContext, useState} from "react";
import {Box, Stack, useTheme} from "@mui/system";
import {Button, Checkbox, Grid, ListItemText, MenuItem, Paper, TextField, Typography} from "@mui/material";
import {motion} from "framer-motion";
import MaskedField from "../../components/inputs/MaskedField";
import InputEmail from "../../components/inputs/InputEmail";
import LoadingButton from "../../components/buttons/LoadingButton";
import InputDate from "../../components/inputs/InputDate";
import InputSelect from "../../components/inputs/InputSelect";
import AddIcon from '@mui/icons-material/Add';
import {LayoutContext} from "../../providers/LayoutProvider";
import Center from "../../layouts/Center";

function CadastrarFormStepSelect(props) {

    const theme = useTheme();

    const layout = useContext(LayoutContext)
    const [areasAtuacao, setAreasAtuacao] = useState([]);
    const [areasAtuacaoFiltered, setAreasAtuacaoFiltered] = useState([]);

    const values = [
        "teste1",
        "teste2",
        "teste3",
        "teste4",
        "teste5",
        "teste6",
        "teste7",
        "teste8"
    ]

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const handleOnChangeAreasAtuacao = (e) => {
        const {
            target: {value},
        } = e;
        setAreasAtuacao(
            typeof value === 'string' ? value.split(',') : value,
        );
    }

    const handleGoBack = () => {
        props.setStep(0);
    }

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.25}}}>
            <Stack spacing={2}>
                <Grid container spacing={4}>
                    <Grid item xs={12} lg={6}>
                        <Stack spacing={4} sx={{height: '363.63px'}}>
                            <InputSelect
                                MenuProps={{PaperProps: {sx: {height: '200px'}}}}
                                value={areasAtuacao}
                                onChange={handleOnChangeAreasAtuacao}
                                values={values}
                                multiple={true}
                                label='Áreas de Atuação'
                                sx={{width: '100%'}} formControlSx={{width: '100%'}}
                                renderValue={(selected) => selected.join(', ')}>
                                <Center>
                                    <TextField label='Filtro' variant='standard' sx={{width: '80%'}}/>
                                </Center>
                                {values.map((name) => {
                                    return (
                                        <MenuItem key={name} value={name}>
                                            <Checkbox checked={areasAtuacao.indexOf(name) > -1}/>
                                            <ListItemText primary={name}/>
                                        </MenuItem>
                                    )
                                })}
                            </InputSelect>
                            <Paper sx={{height: '284.69px'}} variant='outlined'>
                                {
                                    areasAtuacao.map((value, index) =>{
                                        return(
                                            <Stack spacing={2} height='78.91px'>
                                                <Typography key={index} height='100%' textAlign='center'>{value}</Typography>
                                            </Stack>
                                        )
                                    })
                                }
                            </Paper>

                        </Stack>
                    </Grid>
                </Grid>
                <Stack direction='row' spacing={4} justifyContent={layout == 'desktop' ? 'flex-end' : 'center'}>
                    <Button variant="contained" sx={{width: '120px'}} type='button' onClick={handleGoBack}>
                        <Typography color='secondary'>Cancelar</Typography>
                    </Button>
                    <Button variant="contained" sx={{width: '120px'}} type='submit'>
                        <Typography color='secondary'>Avançar</Typography>
                    </Button>
                </Stack>
            </Stack>
        </motion.div>
    )
}

export default CadastrarFormStepSelect;