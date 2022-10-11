import React from "react";
import {Box, Stack, styled} from "@mui/system";
import Aside from "./Aside";
import {Divider, Typography} from "@mui/material";

function GridLayout(props){
    return(
        <Box
            display='grid'
            gridTemplateAreas={`"aside main" "aside main"`}
            gridTemplateColumns= 'min-content auto'
            gridTemplateRows= '65px minmax(auto, auto)'
            minHeight= '100vh'
        >
            <Aside/>
            <Box gridArea='main' padding='25px'>
                <Stack spacing='25px'>
                    <Typography variant={'h4'}>{props.pageTitle}</Typography>
                    <Divider/>
                    {props.children}
                </Stack>
            </Box>
        </Box>
    )
}

export default GridLayout;