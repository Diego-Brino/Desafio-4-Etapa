import React, {useState} from "react";
import {Box, Stack, useTheme} from '@mui/system';
import {Chip, Divider, Grid, InputAdornment, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import GridLayout from "../layouts/GridLayout";
import CardProjeto from "../components/CardProjeto";
import {projetos} from "../services/testData";

function PagePesquisarProjetos() {

    const theme = useTheme();

    const todosProjetos = projetos;

    const [filtros, setFiltros] = useState([]);
    const [filtro, setFiltro] = useState("");

    return (
        <GridLayout pageTitle="Pesquisar Projetos">
            <Stack direction='column' spacing={'25px'}>
                <Stack direction='row' spacing={2} alignItems='center'>
                    <Box gridArea='input'>
                        <TextField
                            value={filtro}
                            onChange={(e) => setFiltro(e.target.value)}
                            sx={{width: "250px"}}
                            placeholder='Pesquisar'
                            InputProps={{
                                endAdornment:
                                    <InputAdornment position="end" sx={{'&:hover': {cursor: 'pointer'}}}
                                                    onClick={() => {
                                                        setFiltros(prevFiltros => [...prevFiltros, filtro]);
                                                        setFiltro("")
                                                    }}>
                                        <SearchIcon sx={{color: theme.palette.text.primary}}/>
                                    </InputAdornment>,
                            }}
                        />
                    </Box>
                    <Grid container columnSpacing={1} rowSpacing={1} sx={{marginTop: '-8px !important'}}>
                        {
                            filtros.map((filtro, index) => {
                                return (
                                    <Grid item key={index}>
                                        <Chip label={filtro} onDelete={() => setFiltros(() => {
                                            var array = [...filtros];
                                            array.splice(index, 1);
                                            return array;
                                        })}/>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Stack>
                <Divider/>
                <Grid container columnSpacing={'25px'} rowSpacing={'25px'}
                      sx={{marginLeft: '-25px !important', marginTop: '0 !important'}}>
                    {
                        todosProjetos.map((projeto, index) => {
                            return (
                                <CardProjeto
                                    key={index}
                                    title={projeto.titulo}
                                    description={projeto.descricao}
                                    author={projeto.autor}
                                />
                            )
                        })
                    }
                </Grid>
            </Stack>
        </GridLayout>
    );
}

export default PagePesquisarProjetos;