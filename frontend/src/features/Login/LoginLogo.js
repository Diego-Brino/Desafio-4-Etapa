import React from "react";
import Center from "../../layouts/Center";
import logo from "../../../public/assets/images/logo.svg";
import {Typography} from "@mui/material";
import {breakpoints, Stack, useTheme} from "@mui/system";
import useResize from "../../hooks/useResize";
import theme from "../../themes";

function LoginLogo(props){

    const theme = useTheme();

    return(
        <Stack direction='row' spacing={3}>
                <img
                    src={logo}
                    width={useResize().width > theme.breakpoints['lg'] ? '90px' : '50px'}
                    style={{filter: 'invert(100%) sepia(3%) saturate(185%) hue-rotate(227deg) brightness(112%) contrast(87%)'}}
                />
                <Typography variant={useResize().width > theme.breakpoints['lg'] ? 'h1' : 'h2'} fontWeight='bold' textAlign='center'>SciLink</Typography>
        </Stack>
    )
}

export default LoginLogo;