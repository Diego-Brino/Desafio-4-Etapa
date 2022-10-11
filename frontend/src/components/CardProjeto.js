import React from "react";
import {Box, Stack, useTheme} from "@mui/system";
import {Divider, Grid, Typography} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';

function CardProjeto(props){

    const theme = useTheme();

    return(
        <Grid item xs={12} md={6} lg={4}>
            <Stack spacing={'25px'} height="fit-content" backgroundColor={theme.palette.secondary.main} borderRadius='25px' padding='25px' boxShadow="#00000030 0px 19px 38px, #00000022 0px 15px 12px" >
                <Stack direction='row' justifyContent='space-between'>
                    <Typography variant='body1'>{props.title}</Typography>
                    <Stack direction='row' spacing={1}>
                        <PersonIcon/>
                        <Typography variant='body1'>{props.author}</Typography>
                    </Stack>
                </Stack>
                <Divider/>
                <Typography variant='body1' textAlign='justify' textJustify='inter-word'>{props.description}</Typography>
            </Stack>
        </Grid>
    )
}

export default CardProjeto;