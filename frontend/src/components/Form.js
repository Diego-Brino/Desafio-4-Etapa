import React from "react";
import {Box, Stack, useTheme} from "@mui/system";
import {Divider, Grid, Typography} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';

function Form(props){

    const theme = useTheme();

    return(
       <form onSubmit={props.handleSubmit}>

       </form>
    )
}

export default Form;