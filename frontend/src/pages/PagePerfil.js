import React from "react";
import {Box, Stack, useTheme} from "@mui/system";
import GridLayout from "../layouts/GridLayout";
import {Button, Grid, InputAdornment, InputLabel, TextField, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {perfil} from "../services/testData";
import {Label} from "@mui/icons-material";
import Center from "../layouts/Center";

function PagePerfil() {

    const theme = useTheme();

    const meuPerfil = perfil;

    return (
        <GridLayout pageTitle='Perfil'>
            <Center>
                <Stack direction='column' spacing={'25px'} width={'fit-content'}
                       backgroundColor={theme.palette.secondary.main} borderRadius='25px' padding='25px'
                       boxShadow="#00000030 0px 19px 38px, #00000022 0px 15px 12px">
                    <Stack direction='column' spacing={'25px'}>
                        <Typography variant='h5'>Dados Pessoais</Typography>
                        <Grid container columnSpacing={'25px'} rowSpacing={'25px'} sx={{marginLeft: '-25px !important', marginTop: '0 !important'}}>
                            <Grid item xs={12} md={6} lg={4}>
                                <Stack spacing={1}>
                                    <InputLabel>Nome</InputLabel>
                                    <TextField value={meuPerfil.nome}/>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <Stack spacing={1}>
                                    <InputLabel>Lattes</InputLabel>
                                    <TextField value={meuPerfil.lattes}/>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <Stack spacing={1}>
                                    <InputLabel>Cpf</InputLabel>
                                    <TextField value={meuPerfil.cpf}/>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <Stack spacing={1}>
                                    <InputLabel>Email</InputLabel>
                                    <TextField value={meuPerfil.email}/>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <Stack spacing={1}>
                                    <InputLabel>Email Alternativo</InputLabel>
                                    <TextField value={meuPerfil.emailAlternativo}/>
                                </Stack>
                            </Grid>
                        </Grid>
                </Stack>
                <Stack direction='column' spacing={'25px'}>
                    <Typography variant='h5'>Redes Sociais</Typography>
                    <Grid container columnSpacing={'25px'} rowSpacing={'25px'} sx={{marginLeft: '-25px !important', marginTop: '0 !important'}}>
                        <Grid item xs={12} md={6} lg={4}>
                            <Stack spacing={1}>
                                <InputLabel>Instagram</InputLabel>
                                <TextField value={meuPerfil.instagram}/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <Stack spacing={1}>
                                <InputLabel>Facebook</InputLabel>
                                <TextField value={meuPerfil.facebook}/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <Stack spacing={1}>
                                <InputLabel>LinkedIn</InputLabel>
                                <TextField value={meuPerfil.linkedin}/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <Stack spacing={1}>
                                <InputLabel>Youtube</InputLabel>
                                <TextField value={meuPerfil.youtube}/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <Stack spacing={1}>
                                <InputLabel>TikTok</InputLabel>
                                <TextField value={meuPerfil.tiktok}/>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
                <Button variant='contained' sx={{width: '250px'}}>Salvar</Button>
            </Stack>
        </Center>
</GridLayout>
);
}

export default PagePerfil;