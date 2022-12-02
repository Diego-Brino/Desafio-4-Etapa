import React, {useState} from "react";
import {FormControl, InputAdornment, TextField} from "@mui/material";
import InputMask from "react-input-mask";

function MaskedField(props) {

    return (
        <InputMask
            disabled={props.disabled}
            mask={props.mask}
            maskChar={''}
            value={props.value}
            onChange={props.onChange}>
            {() => <TextField
                disabled={props.disabled}
                helperText={props.helperText != null ? props.helperText : ' '}
                error={props.error}
                required={props.required}
                variant="filled"
                name={props.name}
                autoFocus={props.autoFocus}
                inputProps={props.inputProps}
                label={props.label}
                type={props.type}
            />}
        </InputMask>
    )
}

export default MaskedField;