import React, {useState} from "react";
import {FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import InputMask from "react-input-mask";

function InputSelect(props) {

    return (
        <FormControl sx={{width: '100%'}}>
            <InputLabel variant='filled'>{props.label}</InputLabel>
            <Select
                label={props.label}
                MenuProps={props.MenuProps}
                multiple={props.multiple}
                sx={props.sx}
                variant='filled'
                value={props.value}
                onChange={props.onChange}
                renderValue={props.renderValue}
                IconComponent={props.IconComponent}>
                {props.children}
            </Select>
        </FormControl>
    )
}

export default InputSelect;