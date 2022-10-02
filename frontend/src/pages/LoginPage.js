import React from "react";
import {Box, Stack, styled} from '@mui/system';
import {useTheme} from "@mui/system";
import {Grid} from "@mui/material";
import theme from "../themes";
import Center from "../layouts/Center";
import rocket from "../../public/assets/images/rocket.svg";
import PageContainer from "../layouts/PageContainer";
import LoginForm from "../features/Login/LoginForm";
import LoginLogo from "../features/Login/LoginLogo";
import Align from "../layouts/Align";
import useResize from "../hooks/useResize";
import LoginDesktopLayout from "../features/Login/LoginDesktopLayout";
import LoginMobileLayout from "../features/Login/LoginMobileLayout";

function LoginPage() {

    const theme = useTheme();

    return (
        <PageContainer>
            <Center>
                {useResize().width < theme.breakpoints['lg'] ?
                    (<LoginMobileLayout/>) : (<LoginDesktopLayout/>)
                }
            </Center>
        </PageContainer>
    );
}

export default LoginPage;