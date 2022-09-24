import React from "react";
import LoginForm from "../features/Login/LoginForm";
import {Stack, styled} from '@mui/system';
import {Container, Box, useTheme} from "@mui/system";
import {Button, Grid, Link, TextField, Typography} from "@mui/material";
import {theme} from "../providers/themes";
import Center from "../layouts/Center";
import logo from "../../public/assets/images/logo.svg"
import LoginLogo from "../features/Login/LoginLogo";

function LoginPage(){

    const theme = useTheme();

    return(
       <LayoutWrapper>
           <ContainerWrapper>
               <Center sx={{gap: "30px", padding: "0 0 102px 0"}}>
                   <LoginLogo/>
                   <LoginForm/>
               </Center>
           </ContainerWrapper>
       </LayoutWrapper>
    );
}

const LayoutWrapper = styled(Box)({
    height: "100vh",
    width: "100vw",
    backgroundColor: theme.palette.primary.main
})

const ContainerWrapper = styled(Container)({
    height: "100%",
    width: "100%",
})

export default LoginPage;