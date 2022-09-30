import React from "react";
import {Link as RouterLink} from "react-router-dom";
import {Box, Stack, styled, useTheme, width} from "@mui/system";
import {theme} from "../../themes";
import {Button, Input, Link, TextField, Typography} from "@mui/material";
import Center from "../../layouts/Center";
import background from "../../../public/assets/images/login-bg.png";

function LoginBackground(){

    const theme = useTheme();

    return(
        <Background/>
    );
}

const Background = styled(Box)({
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    bottom: 0,
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    zIndex: -1
})

export default LoginBackground;