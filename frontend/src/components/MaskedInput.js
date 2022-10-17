import React from "react";
import {TextField} from "@mui/material";
import InputMask from "react-input-mask";

function MaskedInput(props){
    return(
        <InputMask
            mask={props.mask}
            value={props.value}
            maskChar={null}
            onChange={props.onChange}>
            {() => <TextField
                label={props.label}
                variant={"outlined"}
                fullWidth
                type={"text"}
                required={props.required}
                error={props.error}/>}
        </InputMask>
    )
}

export default MaskedInput;
