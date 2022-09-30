import React, {useState} from "react";
import {Box, Container, Stack, styled, useTheme} from "@mui/system";
import {
    Breadcrumbs,
    Button,
    Drawer,
    IconButton,
    Link,
    List,
    ListItem,
    Menu,
    MenuItem,
    Switch,
    Typography
} from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import { Link as RouterLink} from 'react-router-dom';
import useResize from "../hooks/useResize";
import theme from "../themes";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

function Header(){

    const [open, setOpen] = useState(false);
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(open);
    };

    return(
        <Panel>
            <Wrapper>
                <Typography variant="h2">SciLink</Typography>
                {useResize().width > theme.breakpoints['sm']
                    ? (
                        <>
                            <Breadcrumbs>
                                <Link as={RouterLink} to={"#"} variant={"underline-black"}>
                                    <Typography variant={"body1"}>Login</Typography>
                                </Link>
                                <Link as={RouterLink} to={"#"} variant={"underline-black"}>
                                    <Typography variant={"body1"}>Cadastrar-se</Typography>
                                </Link>
                            </Breadcrumbs>
                        </>
                    ) : (
                        <>
                            <IconButton sx={{position: "absolute", right: "10px"}} onClick={toggleDrawer(true)}>
                                <MenuRoundedIcon sx={{fontSize: 30}} htmlColor={theme.palette.base.black}/>
                            </IconButton>
                            <Drawer
                                PaperProps={{sx: { width: "175px", maxWidth: "80%", backgroundColor: "#f2f2f2"}}}
                                open={open}
                                onClose={toggleDrawer(false)}>
                                <List>
                                    <ListItem>
                                        <Link as={RouterLink} to={"#"} variant={"underline-black"}>
                                            <Typography variant={"body1"}>Login</Typography>
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link as={RouterLink} to={"#"} variant={"underline-black"}>
                                            <Typography variant={"body1"}>Cadastrar-se</Typography>
                                        </Link>
                                    </ListItem>
                                </List>
                            </Drawer>
                        </>
                    )
                }
            </Wrapper>
        </Panel>
    );
}

const Panel = styled(Box)({
    display: "flex",
    alignItems: "center",
    padding: "15px 25px",
    justifyContent: "center",
    width: "100vw",
    height: "100%",
    //backgroundColor: theme.palette.base.white,
    //boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
    zIndex: 1
})

const Wrapper = styled(Box)({
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1920px"
})


export default Header;