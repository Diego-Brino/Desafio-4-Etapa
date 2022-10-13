import React from "react";
import {Box, Container, Stack, styled} from '@mui/system';
import {useTheme} from "@mui/system";
import theme from "../themes";
import Center from "../layouts/Center";
import rocket from "../../public/assets/images/rocket.svg";
import Logo from "../components/Logo";
import useLayout from "../hooks/useLayout";
import CadastroForm from "../features/Cadastro/CadastroForm";
import {Separator} from "../components/Separator";

function PageCadastro() {

    const theme = useTheme();

    return (
        <Box component={Container} height="100vh" sx={{overflowX: "hidden"}}>
            <Center>
                <LayoutStack>
                    <StackItem flex={useLayout().width > theme.breakpoints['lg'] ? 6 : 4}>
                        <Center>
                            <Stack direction="column" spacing={3}>
                                <Logo/>
                                <object type="image/svg+xml" data={rocket} width="100%">svg-animation</object>
                            </Stack>
                        </Center>
                    </StackItem>
                    {useLayout().width > theme.breakpoints['lg'] &&
                        <Separator/>
                    }
                    <StackItem flex={6}>
                        <Center>
                            <CadastroForm/>
                        </Center>
                    </StackItem>
                </LayoutStack>
            </Center>
        </Box>
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