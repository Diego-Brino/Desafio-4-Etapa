import React, {useState} from "react";
import {FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import InputMask from "react-input-mask";

function InputDate(props) {

    return (
        <FormControl>
            <Select
                sx={props.sx}
                variant='filled'
                value={props.value}
                label={props.label}
                onChange={props.onChange}>
                {
                    props.values.map((text, index) => {
                        return(
                            <MenuItem key={index} value={text}>{text}</MenuItem>
                        )
                    })
                }
            </Select>
        </FormControl>
    )
}

export default InputDate;