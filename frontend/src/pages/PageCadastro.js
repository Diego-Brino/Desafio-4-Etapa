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

function PageCadastro() {

    const theme = useTheme();
    const layout = useContext(LayoutContext);

    return (
        <PageContainer sx={{height: "100vh"}}>
            <Center>
                <Stack direction={layout === "desktop" ? 'row' : 'column'} width='100%' height={layout === "desktop" ? '80%' : '100%'}>
                    <Box display='flex' flexDirection='column' flex={layout === "desktop" ? 6 : 4} padding='5%'>
                        <Center>
                            <Box alignSelf={layout === "desktop" ? 'flex-end' : 'center'} width='min-content'>
                                <Presentation/>
                            </Box>
                        </Center>
                    </Box>
                    {layout === 'desktop' &&
                        <Center sx={{flex: '0'}}>
                            <Separator/>
                        </Center>
                    }
                    <Box display='flex' flexDirection='column' flex={6} padding='5%'>
                        <Center>
                            <Box alignSelf={layout === "desktop" ? 'flex-start' : 'center'} width={layout === "desktop" ? 'min-content' : '100%'}>
                                <CadastroForm/>
                            </Box>
                        </Center>
                    </Box>
                </Stack>
            </Center>
        </PageContainer>
    );
}

const LayoutStack = styled(Stack)({
    width: "100%",
    [theme.breakpoints.up('lg')] : {
        flexDirection: "row"
    },
    [theme.breakpoints.down('lg')] : {
        height: "100%",
        flexDirection: "column"
    }
})

const StackItem = styled(Box)({
    padding: "25px",
})

export default PageCadastro;