import React from "react";
import {Box, Stack, styled} from '@mui/system';
import {useTheme} from "@mui/system";
import {Grid} from "@mui/material";
import theme from "../../themes";
import Center from "../../layouts/Center";
import rocket from "../../../public/assets/images/rocket.svg";
import PageContainer from "../../layouts/PageContainer";
import LoginForm from "./LoginForm";
import LoginLogo from "../../features/Login/LoginLogo";

function LoginDesktopLayout() {

    const theme = useTheme();

    return (
        <Grid container columns={13} spacing={12} wrap='nowrap' height='80%' width='100%'>
            <Grid item xs={6} display='flex' justifyContent='flex-end' alignItems='center'>
                <Stack spacing={4}>
                    <LoginLogo/>
                    <object type="image/svg+xml" data={rocket}>svg-animation</object>
                </Stack>
            </Grid>
            <Grid item xs={1} display='flex' justifyContent='center' alignItems='center'>
                <Separator/>
            </Grid>
            <Grid item xs={6} display='flex' justifyContent='flex-start' alignItems='center'>
                <LoginForm/>
            </Grid>
        </Grid>
    );
}

const Separator = styled(Box)({
    height: '100%',
    minWidth: '6px',
    width: '6px',
    borderRadius: '15px',
    backgroundColor: theme.palette.secondary.main
})

export default LoginDesktopLayout;