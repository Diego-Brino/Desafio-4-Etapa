import PageContainer from "./PageContainer";
import Center from "./Center";
import {Box, Stack, useTheme} from "@mui/system";
import Presentation from "../components/Presentation";
import {Separator} from "../components/Separator";
import React, {useContext} from "react";
import {LayoutContext} from "../providers/LayoutProvider";

function LayoutPresentation(props){

    const layout = useContext(LayoutContext);
    const theme = useTheme();

    return(
        <>
            <Box width={layout === 'desktop' ? "50vw" : "100vw"} height={layout === 'desktop' ? "100vh" : "50vh"} position={layout === 'desktop' ? 'absolute' : 'relative'} right={0} top={layout === 'desktop' ? 0 : 'auto'} bottom={layout === 'desktop' ? 'auto' : 0} zIndex={-1} sx={{backgroundColor: theme.palette.secondary.main}}
            <Stack direction={layout === "desktop" ? 'row' : 'column'} width='100%'>
                <Box display='flex' flexDirection='column' flex={layout === "desktop" ? 6 : 4} padding='25px'>
                    <Center>
                        <Presentation/>
                    </Center>
                </Box>
                <Box display='flex' flexDirection='column' flex={6} padding='25px'>
                    <Center>
                        {props.children}
                    </Center>
                </Box>
            </Stack>
        </>
    )
}

export default LayoutPresentation;