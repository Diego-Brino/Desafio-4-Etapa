import React from "react";
import {Link as RouterLink} from "react-router-dom";
import {Box, Stack, styled, useTheme, width} from "@mui/system";
import {theme} from "../../themes";
import {Button, Input, Link, TextField, Typography} from "@mui/material";
import Center from "../../layouts/Center";
import logo from "../../../public/assets/images/logo.svg";

function LoginLogo(){

    const theme = useTheme();

    return(
        <LogoWrapper>
            <img src={logo} width={"auto"} height={"70px"} alt="logo"/>
            <Typography variant={"h2"} fontWeight={"bold"} >SciLink</Typography>
        </LogoWrapper>
    );
}

const LogoWrapper = styled(Box)({
    position: "absolute",
    left: "25px",
    top: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px"
})

export default LoginLogo;