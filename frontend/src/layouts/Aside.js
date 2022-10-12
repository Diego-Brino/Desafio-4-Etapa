import React from "react";
import {Box, Stack, useTheme} from "@mui/system";
import logo from "../../public/assets/images/logo.png";
import {Divider, Link, List, ListItem, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import Logout from "@mui/icons-material/Logout";

function Aside(){

    const theme = useTheme();

    return(
        <Box gridArea='aside' display='flex' flexDirection='column' padding='25px' backgroundColor={theme.palette.secondary.main} boxShadow="#00000030 0px 19px 38px, #00000022 0px 15px 12px">
            <Stack direction="column" justifyContent="space-between" height="100%">
                <Stack direction='column' spacing='25px'>
                    <Stack direction='row' spacing={1} sx={{alignItems:"center", justifyContent:"center"}}>
                        <img
                            src={logo}
                            width='40px'
                            height='40px'
                            style={{filter: 'invert(100%) sepia(3%) saturate(185%) hue-rotate(227deg) brightness(112%) contrast(87%)'}}
                            alt='logo'/>
                        <Typography variant='h4' fontWeight='bold' textAlign='left'>SciLink</Typography>
                    </Stack>
                    <Divider/>
                    <Stack direction='column' spacing={2}>
                        <Stack direction="row" spacing={1}>
                            <AccountCircleIcon/>
                            <Typography variant="body1" textAlign={"center"} noWrap={true}>
                                <Link as={RouterLink} to={"/perfil"} variant='no-underline'>Perfil</Link>
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <DescriptionIcon/>
                            <Typography variant="body1" textAlign={"center"} noWrap={true}>
                                <Link as={RouterLink} to={"/meus-projetos"} variant='no-underline'>Meus Projetos</Link>
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <FindInPageIcon/>
                            <Typography variant="body1" textAlign={"center"} noWrap={true}>
                                <Link as={RouterLink} to={"/pesquisar-projetos"} variant='no-underline'>Pesquisar Projetos</Link>
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack direction='column' spacing='25px'>
                    <Divider/>
                    <Stack direction="row" spacing={1} justifyContent="center">
                        <Logout/>
                        <Typography variant="body1" textAlign={"center"} noWrap={true}>
                            <Link as={RouterLink} to={"/login"} variant='no-underline'>Sair</Link>
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Aside;