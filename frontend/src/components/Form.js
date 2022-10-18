import React, {useContext} from "react";
import {Box, Stack, useTheme} from "@mui/system";
import {Divider, Grid, Typography} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import {LayoutContext} from "../providers/LayoutProvider";
import Center from "../layouts/Center";

function Form(props){

    const theme = useTheme();
    const layout = useContext(LayoutContext);

    return(
        <Box
            sx={props.sx}
            borderRadius="5px" padding="25px 25px">
            <Center>
                <Stack spacing={4} width='100%'>
                    <Typography variant='h3' align='center' fontWeight="bold">
                        {props.heading}
                    </Typography>
                    <form onSubmit={props.onSubmit}>
                        <Stack spacing={4}>
                            {props.children}
                        </Stack>
                    </form>
                </Stack>
            </Center>
        </Box>
    )
}

export default Form;