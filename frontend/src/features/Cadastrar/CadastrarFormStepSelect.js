import React, {useContext, useState} from "react";
import {Box, Stack, useTheme} from "@mui/system";
import {Button, Checkbox, Grid, ListItemText, MenuItem, Typography} from "@mui/material";
import {motion} from "framer-motion";
import InputSelect from "../../components/inputs/InputSelect";
import {LayoutContext} from "../../providers/LayoutProvider";
import CloseIcon from '@mui/icons-material/Close';

function CadastrarFormStepSelect(props) {

    const theme = useTheme();

    const layout = useContext(LayoutContext)
    const [areasAtuacao, setAreasAtuacao] = useState([]);

    const values = [
        "123123123",
        "wefwefwefwef",
        "teswefwefte3",
        "teste4",
        "teste5",
        "teste6",
        "teste7",
        "teste8"
    ]

    const handleOnChangeAreasAtuacao = (e) => {
        let value = e.target.value;

        var match = false;
        if(areasAtuacao.length == 3){
            for (var i=0; i < areasAtuacao.length; i++){
                if(value[value.length-1] == areasAtuacao[i]){
                    match = true
                    break
                }
            }
        }
        else{
            match = true
        }
        if(!match){
            return
        }

        setAreasAtuacao(
            typeof value === 'string' ? value.split(',') : value,
        );
    }
    const removeAreaAtuacao = (value) => {
        setAreasAtuacao(
            areasAtuacao.filter(item => item !== value)
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
                                {values.map((name) => {
                                    return (
                                        <MenuItem key={name} value={name}>
                                            <Checkbox checked={areasAtuacao.indexOf(name) > -1}/>
                                            <ListItemText primary={name}/>
                                        </MenuItem>
                                    )
                                })}
                            </InputSelect>
                            {
                                areasAtuacao.map((value, index) => {
                                    return (
                                        <Box key={index} height='56px' display='flex' alignItems='center'
                                             justifyContent='space-between' padding='25px 12px'
                                             sx={{backgroundColor: theme.palette.background.light, borderRadius: '25px'}}>
                                            <Typography key={index} textAlign='center'>{value}</Typography>
                                            <CloseIcon sx={{cursor: 'pointer'}} value={value} onClick={() => {removeAreaAtuacao(value)}}/>
                                        </Box>
                                    )
                                })
                            }
                        </Stack>
                    </Grid>
                </Grid>
                <Stack direction='row' spacing={4} justifyContent={layout == 'desktop' ? 'flex-end' : 'center'}>
                    <Button variant="contained" sx={{width: '120px'}} type='button' onClick={handleGoBack}>
                        <Typography color='secondary'>Voltar</Typography>
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