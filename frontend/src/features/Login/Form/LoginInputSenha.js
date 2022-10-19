import React from "react";
import {TextField} from "@mui/material";
import {useTheme} from "@mui/system";

function LoginInputSenha(props){

    const theme = useTheme();

    return(
        <TextField
            inputProps={{color: theme.palette.text.secondary}}
            label="Senha"
            variant="filled"
            type="password"
            error={props.error}
            required={true}
            onChange={props.onChange}
        />
    )
}

export default LoginInputSenha;