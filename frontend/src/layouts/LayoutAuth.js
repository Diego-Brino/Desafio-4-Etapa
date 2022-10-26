import PageContainer from "./PageContainer";
import Center from "./Center";
import {Box, Container, Stack, useTheme} from "@mui/system";
import {Separator} from "../components/Separator";
import React, {useContext} from "react";
import {LayoutContext} from "../providers/LayoutProvider";
import {Grid, Typography} from "@mui/material";
import logo from "../../public/assets/images/logo.png";
import rocket from "../../public/assets/images/rocket.svg";
import {Outlet, Route, Routes} from "react-router-dom";
import PageCadastro from "../pages/PageCadastro";
import PagePerfil from "../pages/PagePerfil";
import PageLogin from "../pages/PageLogin";

function LayoutAuth(props) {

    const layout = useContext(LayoutContext);
    const theme = useTheme();

    const Presentation = () => {
        return(
            <Stack direction='column' spacing={3} justifyContent='center'>
                <Stack direction='row' spacing={3} alignItems="center" justifyContent="center">
                    <img
                        src={logo}
                        width='65px'
                        height='auto'
                        style={{filter: 'invert(100%) sepia(3%) saturate(185%) hue-rotate(227deg) brightness(112%) contrast(87%)'}}
                        alt='logo'
                    />
                    <Typography variant='h2' color={theme.palette.text.secondary} fontWeight='bold' textAlign='center'>SciLink</Typography>
                </Stack>
                <Center>
                    <object type="image/svg+xml" data={rocket} width={layout === 'desktop' ? '350px' : '100%'}>svg-animation</object>
                </Center>
            </Stack>
        )
    }

    return (
        <Grid container sx={{minHeight: '100vh'}}>
            <Grid item xs={12} lg={6} padding='25px' sx={{backgroundColor: theme.palette.primary.main}}>
                <Center>
                    <Presentation/>
                </Center>
            </Grid>
            <Grid item xs={12} lg={6} padding='25px' sx={{backgroundColor: theme.palette.secondary.main}}>
                <Center>
                    <Outlet/>
                </Center>
            </Grid>
        </Grid>
    )
}

export default LayoutAuth;