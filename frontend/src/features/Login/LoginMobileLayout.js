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

function LoginMobileLayout() {

    const theme = useTheme();

    return (
        <Stack sx={{height: "100%"}}>
            <Box flex={4}>
                <Center>
                    <Stack spacing={2} alignItems='center' padding='25px'>
                        <LoginLogo/>
                        <object type="image/svg+xml" data={rocket}>svg-animation</object>
                    </Stack>
                </Center>
            </Box>
            <Box flex={6}>
                <Center>
                    <LoginForm/>
                </Center>
            </Box>
        </Stack>
    );
}

const Separator = styled(Box)({
    height: '100%',
    minWidth: '6px',
    width: '6px',
    borderRadius: '15px',
    backgroundColor: theme.palette.secondary.main
})

export default LoginMobileLayout;