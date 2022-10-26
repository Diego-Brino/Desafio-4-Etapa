import React, {useState} from "react";
import {FormControl, InputAdornment, TextField} from "@mui/material";
import InputMask from "react-input-mask";

function InputText(props) {

    return (
        <FormControl>
            {props.mask != null
                ? <InputMask
                    mask={props.mask}
                    maskChar={''}
                    value={props.value}
                    onChange={props.onChange}>
                    {() => <TextField
                        error={props.error}
                        required={props.required}
                        variant="filled"
                        name={props.name}
                        autoFocus={props.autoFocus}
                        inputProps={props.inputProps}
                        label={props.label}
                        type='text'
                    />}
                </InputMask>
                : <TextField
                    error={props.error}
                    required={props.required}
                    variant="filled"
                    name={props.name}
                    autoFocus={props.autoFocus}
                    inputProps={props.inputProps}
                    label={props.label}
                    value={props.value}
                    onChange={props.onChange}
                    type='text'
                />
            }
        </FormControl>
    )
}

export default InputText;