import React from "react";
import {Box, Container, Stack, styled} from '@mui/system';
import {useTheme} from "@mui/system";
import theme from "../themes";
import Center from "../layouts/Center";
import rocket from "../../public/assets/images/rocket.svg";
import LoginForm from "../features/Login/LoginForm";
import Logo from "../components/Logo";
import useResize from "../hooks/useResize";
import {Separator} from "../components/Separator";

function PageLogin() {

    const theme = useTheme();

    return (
        <Box component={Container} height="100vh">
            <Center>
                <LayoutStack>
                    <StackItem flex={useResize().width > theme.breakpoints['lg'] ? 6 : 4}>
                        <Center>
                            <Stack direction="column" spacing={3}>
                                <Logo/>
                                <object type="image/svg+xml" data={rocket} width="100%">svg-animation</object>
                            </Stack>
                        </Center>
                    </StackItem>
                    {useResize().width > theme.breakpoints['lg'] &&
                        <Separator/>
                    }
                    <StackItem flex={6}>
                        <Center>
                            <LoginForm/>
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

export default PageLogin;