import React from "react";
import {TextField} from "@mui/material";
import {useTheme} from "@mui/system";

function LoginInputCpf(props){

    const theme = useTheme();

    return(
        <TextField
            inputProps={{color: theme.palette.text.secondary}}
            label="Cpf"
            variant="filled"
            type="text"
            error={props.error}
            required={true}
            onChange={props.onChange}
        />
    )
}

export default LoginInputCpf;