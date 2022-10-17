import React, {useContext, useEffect} from "react";
import {Box, Container, Stack, styled} from '@mui/system';
import {useTheme} from "@mui/system";
import theme from "../themes";
import Center from "../layouts/Center";
import rocket from "../../public/assets/images/rocket.svg";
import LoginForm from "../features/Login/LoginForm";
import Logo from "../components/Logo";
import useLayout from "../hooks/useLayout";
import {Separator} from "../components/Separator";
import {Typography} from "@mui/material";
import {LayoutContext} from "../providers/LayoutProvider";
import PageContainer from "../layouts/PageContainer";
import Presentation from "../components/Presentation";
import LayoutPresentation from "../layouts/LayoutPresentation";

function PageLogin() {

    const theme = useTheme();
    const layout = useContext(LayoutContext);

    return (
        <Center>
            <LayoutPresentation>
                <LoginForm/>
            </LayoutPresentation>
        </Center>
    );
}

export default PageLogin;