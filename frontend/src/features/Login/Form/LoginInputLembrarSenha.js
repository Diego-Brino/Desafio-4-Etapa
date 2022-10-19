import React from "react";
import {Checkbox, FormControlLabel, TextField, Typography} from "@mui/material";
import {useTheme} from "@mui/system";

function LoginInputLembrarSenha(props){

    const theme = useTheme();

    return(
        <FormControlLabel
            control={<Checkbox value={props.value} onChange={(e) => setLembrarSenha(!lembrarSenha)}/>}
            label={<Typography whiteSpace='nowrap'>Lembrar Senha</Typography>}
            sx={{width: 'min-content'}}
        />
    )
}

export default LoginInputLembrarSenha;