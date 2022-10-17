import React, {useContext} from "react";
import {Box, Container, Stack, styled} from '@mui/system';
import {useTheme} from "@mui/system";
import theme from "../themes";
import Center from "../layouts/Center";
import rocket from "../../public/assets/images/rocket.svg";
import Logo from "../components/Logo";
import useLayout from "../hooks/useLayout";
import CadastroForm from "../features/Cadastro/CadastroForm";
import {Separator} from "../components/Separator";
import PageContainer from "../layouts/PageContainer";
import Presentation from "../components/Presentation";
import LoginForm from "../features/Login/LoginForm";
import {LayoutContext} from "../providers/LayoutProvider";
import LayoutPresentation from "../layouts/LayoutPresentation";

function PageCadastro() {

    const theme = useTheme();
    const layout = useContext(LayoutContext);

    return (
        <PageContainer sx={{height:"100vh"}}>
            <Center>
                <LayoutPresentation>
                    <CadastroForm/>
                </LayoutPresentation>
            </Center>
        </PageContainer>
    );
}

export default PageCadastro;