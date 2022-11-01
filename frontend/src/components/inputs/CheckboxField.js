import React from "react";
import {Checkbox, FormControl, FormControlLabel, Typography} from "@mui/material";

function CheckboxField(props) {
    return (
        <FormControlLabel
            sx={{width: 'min-content'}}
            control={
                <Checkbox
                    id={props.id}
                    name={props.name}
                    onChange={props.onChange}
                />
            }
            label={
                <Typography
                    sx={{userSelect: 'none'}}
                    whiteSpace='nowrap'>
                    {props.label}
                </Typography>
            }
        />
    )
}

export default CheckboxField;