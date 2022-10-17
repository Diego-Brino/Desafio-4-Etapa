import React from "react";
import {Box, Container, styled} from "@mui/system";

function PageContainer(props){
    return(
        <Box
            component={Container}
            sx={props.sx}>
            {props.children}
        </Box>
    )
}

export default PageContainer;