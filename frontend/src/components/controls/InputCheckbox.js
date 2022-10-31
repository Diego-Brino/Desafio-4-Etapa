import React from "react";
import {Checkbox, FormControl, FormControlLabel, Typography} from "@mui/material";

function InputCheckbox(props) {
    return (
        <FormControlLabel
            sx={{width: 'min-content'}}
            control={<Checkbox onChange={props.onChange}/>}
            label={<Typography sx={{userSelect: 'none'}} whiteSpace='nowrap'>{props.label}</Typography>}
        />
    )
}

export default InputCheckbox;