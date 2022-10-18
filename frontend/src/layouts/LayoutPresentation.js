import PageContainer from "./PageContainer";
import Center from "./Center";
import {Box, Container, Stack, useTheme} from "@mui/system";
import Presentation from "../components/Presentation";
import {Separator} from "../components/Separator";
import React, {useContext} from "react";
import {LayoutContext} from "../providers/LayoutProvider";
import {Grid} from "@mui/material";

function LayoutPresentation(props) {

    const layout = useContext(LayoutContext);
    const theme = useTheme();

    return (
        <>
            <Grid container sx={{minHeight: '100vh'}} position='absolute'>
                <Grid item xs={12} lg={6} zIndex={-1} height='50vh' sx={{backgroundColor: theme.palette.primary.main}}/>
                <Grid item xs={12} lg={6} zIndex={-1} height='60vh' sx={{backgroundColor: theme.palette.secondary.main}}/>
            </Grid>
            <Container>
                <Grid container sx={{minHeight: '100vh'}}>
                    <Grid item xs={12} lg={6} padding='25px'>
                        <Center>
                            <Presentation/>
                        </Center>
                    </Grid>
                    <Grid item xs={12} lg={6} padding='25px'>
                        <Center>
                            {props.children}
                        </Center>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default LayoutPresentation;