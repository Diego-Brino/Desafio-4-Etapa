import React from 'react';
import {Box} from "@mui/system";

function Object(props){
    return(
        <Box component='object' sx={props.sx} type={props.type} data={props.data}/>
    )
}

export default Object;