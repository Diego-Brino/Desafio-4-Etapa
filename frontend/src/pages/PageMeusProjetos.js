import React, {useState} from "react";
import {Box, Container, Stack, styled, width} from '@mui/system';
import {useTheme} from "@mui/system";
import {
    AppBar,
    Button,
    Chip,
    Divider,
    Grid,
    InputAdornment,
    Link,
    List,
    ListItem, Modal,
    TextField,
    Typography
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import GridLayout from "../layouts/GridLayout";
import CardProjeto from "../components/CardProjeto";
import {projetos} from "../services/testData";

function PageMeusProjetos() {

    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const meusProjetos = projetos;

    return (
        <>
            <GridLayout pageTitle="Pesquisar Projetos">
                <Stack direction='column' spacing={'25px'}>
                    <Box gridArea='input'>
                        <Button width="250px" variant='contained' onClick={() => setOpen(true)}>Adicionar Novo
                            Projeto</Button>
                    </Box>
                    <Divider/>
                    <Grid container columnSpacing={'25px'} rowSpacing={'25px'}
                          sx={{marginLeft: '-25px !important', marginTop: '0 !important'}}>
                        {
                            meusProjetos.map((projeto, index) => {
                                return (
                                    <CardProjeto
                                        key={index}
                                        title={projeto.titulo}
                                        description={projeto.descricao}
                                        author={'Diego Brino'}
                                    />
                                )
                            })
                        }
                    </Grid>
                </Stack>
            </GridLayout>

            <Modal open={open} onClose={() => setOpen(false)}>
                <Box height="fit-content" width='500px' backgroundColor={theme.palette.secondary.main}
                     borderRadius='25px'
                     padding='25px' boxShadow="#00000030 0px 19px 38px, #00000022 0px 15px 12px"
                     position='absolute' top='50%' left='50%' sx={{transform: 'translate(-50%, -50%)'}}>
                    <Stack spacing='25px'>
                        <Typography variant={'h5'} textAlign='left'>Adicionar Projeto</Typography>
                        <Divider/>
                        <TextField label='Título'/>
                        <TextField label='Descrição'
                                   multiline
                                   rows={3}
                                   maxRows={3}/>
                        <Stack direction='row' spacing={'25px'}>
                            <Box flex={5}>
                                <Button fullWidth variant='contained' onClick={() => setOpen(false)}>Salvar</Button>
                            </Box>
                            <Box flex={5}>
                                <Button fullWidth variant='contained' onClick={() => setOpen(false)}>Voltar</Button>
                            </Box>
                        </Stack>
                    </Stack>
                </Box>
            </Modal>
        </>
    );
}

export default PageMeusProjetos;