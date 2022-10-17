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

function PageLogin() {

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
                                <LoginForm/>
                            </Box>
                        </Center>
                    </Box>
                </Stack>
            </Center>
        </PageContainer>
    );
}

export default PageLogin;