import React from "react";
import Center from "../layouts/Center";
import logo from "../../public/assets/images/logo.png";
import {Typography} from "@mui/material";
import {breakpoints, Stack, useTheme} from "@mui/system";
import useLayout from "../hooks/useLayout";
import theme from "../themes";

function Logo(props){

    const theme = useTheme();

    return(
        <Stack direction='row' spacing={3} alignItems="center" justifyContent="center">
                <img
                    src={logo}
                    width={useLayout().width > theme.breakpoints['lg'] ? '90px' : '50px'}
                    height={useLayout().width > theme.breakpoints['lg'] ? '90px' : '50px'}
                    style={{filter: 'invert(100%) sepia(3%) saturate(185%) hue-rotate(227deg) brightness(112%) contrast(87%)'}}
                    alt='logo'
                />
                <Typography variant={useLayout().width > theme.breakpoints['lg'] ? 'h1' : 'h2'} fontWeight='bold' textAlign='center'>SciLink</Typography>
        </Stack>
    )
}

export default Logo;