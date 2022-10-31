import Center from "./Center";
import center from "./Center";
import {Stack, useTheme} from "@mui/system";
import React, {useContext} from "react";
import {LayoutContext} from "../providers/LayoutProvider";
import {Grid, Typography} from "@mui/material";
import logo from "../../public/assets/images/logo.png";
import rocket from "../../public/assets/images/rocket.svg";
import {Outlet, useLocation} from "react-router-dom";
import Image from "../components/Image";
import Object from "../components/Object";

function LayoutEntrarCadastrar(props) {

    const layout = useContext(LayoutContext);
    const theme = useTheme();

    const pathname = useLocation().pathname;

    //region styles
    const sxGridContainer = {
        minHeight: '100vh',
        container: true
    }
    const sxGridItemLeft = {
        backgroundColor: theme.palette.primary.main,
        transition: '0.5s',
        padding: '25px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
    const sxGridItemRight = {
        backgroundColor: theme.palette.secondary.main,
        transition: '0.5s',
        padding: '25px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
    const sxLeftStack = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
    const sxLeftStackImg = {
        width: '65px',
        height: 'auto',
        filter: 'invert(100%) sepia(3%) saturate(185%) hue-rotate(227deg) brightness(112%) contrast(87%)'
    }
    const sxLeftStackTypography = {
        color: theme.palette.text.secondary,
        fontWeight: 'bold',
        textAlign: 'center'
    }
    const sxLeftStackObject = {
        width: [layout === 'desktop' ? '350px' : '100%']
    }
    //endregion

    return (
        <Grid sx={sxGridContainer} container>
            <Grid sx={sxGridItemLeft} item xs={12} lg={pathname === '/entrar' ? 6 : 4}>
                <Stack direction='column' spacing={4}>
                    <Stack sx={sxLeftStack} direction='row' spacing={4}>
                        <Image sx={sxLeftStackImg} src={logo} alt='logo'/>
                        <Typography sx={sxLeftStackTypography} variant='h2'>SciLink</Typography>
                    </Stack>
                    <Object sx={sxLeftStackObject} type="image/svg+xml" data={rocket}/>
                </Stack>
            </Grid>
            <Grid sx={sxGridItemRight} item xs={12} lg={pathname === '/entrar' ? 6 : 8}>
                <Outlet/>
            </Grid>
        </Grid>
    )
}

export default LayoutEntrarCadastrar;