import React, {useContext} from "react";
import Center from "../layouts/Center";
import logo from "../../public/assets/images/logo.png";
import {Typography} from "@mui/material";
import {breakpoints, Stack, useTheme} from "@mui/system";
import useLayout from "../hooks/useLayout";
import theme from "../themes";
import Logo from "./Logo";
import rocket from "../../public/assets/images/rocket.svg";
import {LayoutContext} from "../providers/LayoutProvider";

function Presentation(props){

    const theme = useTheme();
    const layout = useContext(LayoutContext);

    return(
        <Stack direction='column' spacing={3} justifyContent='center'>
            <Stack direction='row' spacing={3} alignItems="center" justifyContent="center">
                <img
                    src={logo}
                    width={layout === 'desktop' ? '65px' : '90px'}
                    height={layout === 'desktop' ? '65px' : '90px'}
                    style={{filter: 'invert(100%) sepia(3%) saturate(185%) hue-rotate(227deg) brightness(112%) contrast(87%)'}}
                    alt='logo'
                />
                <Typography variant='h2' fontWeight='bold' textAlign='center'>SciLink</Typography>
            </Stack>
            <Center>
                <object type="image/svg+xml" data={rocket} width="350px">svg-animation</object>
            </Center>
        </Stack>
    )
}

export default Presentation;