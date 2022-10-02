import React from "react";
import {Box, styled} from "@mui/system";

function Align(props){
    return(
        <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems={props.align}
            flexDirection="column"
            sx={props.sx}>
            {props.children}
        </Box>
    )
}

export default Align;