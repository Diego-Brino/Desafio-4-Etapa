import React, {useState} from "react";
import {FormControl, InputAdornment, TextField} from "@mui/material";
import InputMask from "react-input-mask";

function InputDate(props) {

    return (
        <FormControl>
            <TextField
                error={props.error}
                required={props.required}
                variant="filled"
                name={props.name}
                autoFocus={props.autoFocus}
                inputProps={props.inputProps}
                label={props.label}
                value={props.value}
                onChange={props.onChange}
                type='date'
            />
        </FormControl>
    )
}

export default InputDate;