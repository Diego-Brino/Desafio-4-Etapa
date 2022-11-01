import React, {useContext, useState} from "react";
import {Box, Stack, useTheme} from "@mui/system";
import {Button, Checkbox, Grid, ListItemText, MenuItem, Typography} from "@mui/material";
import {motion} from "framer-motion";
import MaskedField from "../../components/inputs/MaskedField";
import InputEmail from "../../components/inputs/InputEmail";
import LoadingButton from "../../components/buttons/LoadingButton";
import InputDate from "../../components/inputs/InputDate";
import InputSelect from "../../components/inputs/InputSelect";
import AddIcon from '@mui/icons-material/Add';
import {LayoutContext} from "../../providers/LayoutProvider";

function CadastrarFormStepSelect(props) {

    const theme = useTheme();

    const layout = useContext(LayoutContext)

    const [loading, setLoading] = useState(false);
    const [areasAtuacao, setAreasAtuacao] = useState([]);

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

    const handleOnChangeAreasAtuacao = (e) => {
        const {
            target: {value},
        } = e;
        setAreasAtuacao(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    }

    const handleGoBack = () => {
        props.setStep(0);
    }

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.25}}}>
            <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} lg={6}>
                            <InputSelect
                                value={areasAtuacao}
                                onChange={handleOnChangeAreasAtuacao}
                                values={values}
                                multiple={true}
                                label='Áreas de Atuação'
                                sx={{width: '100%'}} formControlSx={{width: '100%'}}
                                renderValue={(selected) => selected.join(', ')}
                            >
                                <MaskedField label='Filtro' variant='' sx={{width: "100%"}}></MaskedField>
                                {values.map((name) => {
                                    return (
                                        <MenuItem key={name} value={name}>
                                            <Checkbox checked={areasAtuacao.indexOf(name) > -1}/>
                                            <ListItemText primary={name}/>
                                        </MenuItem>
                                    )
                                })}
                            </InputSelect>
                        </Grid>
                        {/*<Grid item xs={12} lg={6}>*/}
                        {/*    <InputSelect value={areaAtuacao} onChange={handleOnChangeAreaAtuacao} values={values}*/}
                        {/*                 label='Titulação' sx={{width: '80%'}} formControlSx={{width: '100%'}}/>*/}
                        {/*</Grid>*/}
                    </Grid>
                    <Stack direction='row' spacing={4} justifyContent={layout == 'desktop' ? 'flex-end' : 'center'}>
                        <Button variant="contained" sx={{width: '120px'}} type='button' onClick={handleGoBack}>
                            <Typography color='secondary'>Cancelar</Typography>
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

export default CadastrarFormStepSelect;