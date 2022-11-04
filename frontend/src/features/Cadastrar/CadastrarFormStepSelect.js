import React, {useContext, useState} from "react";
import {Stack, useTheme} from "@mui/system";
import {
    Autocomplete,
    Button,
    Checkbox, Chip,
    Grid,
    IconButton,
    InputAdornment,
    ListItemText,
    MenuItem,
    TextField,
    Typography
} from "@mui/material";
import {motion} from "framer-motion";
import InputSelect from "../../components/inputs/InputSelect";
import {LayoutContext} from "../../providers/LayoutProvider";
import SearchIcon from "@mui/icons-material/Search";
import Center from "../../layouts/Center";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function CadastrarFormStepSelect(props) {

    const theme = useTheme();

    const layout = useContext(LayoutContext)
    const [areasAtuacao, setAreasAtuacao] = useState(["123123123",
        "wefwefwefwef",
        "teswefwefte3",
        "teste4",
        "teste5",
        "teste6",
        "teste7",
        "teste8"]);
    const [areasAtuacaoList, setAreasAtuacaoList] = useState(["123123123",
        "wefwefwefwef",
        "teswefwefte3",
        "teste4",
        "teste5",
        "teste6",
        "teste7",
        "teste8"]);
    const [areasAtuacaoFiltered, setAreasAtuacaoFiltered] = useState(areasAtuacaoList);

    const filterAreasAtuacao = (e) => {
        setAreasAtuacaoFiltered(areasAtuacaoList.filter((value) => {
            value.includes(e.target.value);
        }))
    }

    const handleOnChangeAreasAtuacao = (e) => {
        let value = e.target.value;

        var match = false;
        if (areasAtuacao.length == 3) {
            for (var i = 0; i < areasAtuacao.length; i++) {
                if (value[value.length - 1] == areasAtuacao[i]) {
                    match = true
                    break
                }
            }
        } else {
            match = true
        }
        if (!match) {
            return
        }

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
                    <Grid item xs={12} lg={12}>
                        <Stack spacing={4} sx={{height: '363.63px'}}>
                            <Autocomplete
                                multiple
                                options={areasAtuacao}
                                ChipProps={{
                                    sx: {
                                        height: '100%'
                                    }
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="filled"
                                        label='Áreas de Atuação'
                                    />)}
                            />
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