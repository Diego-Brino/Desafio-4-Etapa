import React from "react";
import {Box, Stack, styled} from '@mui/system';
import {useTheme} from "@mui/system";
import {Grid} from "@mui/material";
import theme from "../themes";
import Center from "../layouts/Center";
import rocket from "../../public/assets/images/rocket.svg";
import PageContainer from "../layouts/PageContainer";
import LoginForm from "../features/Login/LoginForm";
import Logo from "../components/Logo";
import Align from "../layouts/Align";
import useResize from "../hooks/useResize";
import LoginDesktopLayout from "../features/Login/LoginDesktopLayout";
import LoginMobileLayout from "../features/Login/LoginMobileLayout";
import CadastroMobileLayout from "../features/Cadastro/CadastroMobileLayout";
import CadastroDesktopLayout from "../features/Cadastro/CadastroDesktopLayout";

function CadastroPage() {

    const theme = useTheme();

    return (
        <PageContainer>
            <Center>
                {useResize().width < theme.breakpoints['lg'] ?
                    (<CadastroMobileLayout/>) : (<CadastroDesktopLayout/>)
                }
            </Center>
        </PageContainer>
    );
}

export default CadastroPage;