import React from "react";
import {Box, Container, styled} from "@mui/system";
import {Typography} from "@mui/material";
import {theme} from "../providers/themes";
import useResize from "../hooks/useResize";

function Header(){

    return(
        <HeaderPanel>
            <Container maxWidth={false} disableGutters sx={{height: "100%"}}>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} height={"100%"}>
                    { useResize().width > theme.breakpoints['sm']
                        ? (
                            <Typography variant="h2" fontWeight="bold">SciLink</Typography>
                        )
                        : (
                            <Typography width={"100%"} textAlign={"center"} variant="h2" fontWeight="bold" position={"relative"} >SciLink</Typography>
                        )
                    }
                </Box>
            </Container>
        </HeaderPanel>
    )
}

const HeaderPanel = styled(Box)({
    position: "relative",
    display: "flex",
    alignItems: "center",
    padding: "15px",
    width: "100vw",
    height: "10vh",
    backgroundColor: theme.palette.base.white,
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
    zIndex: 1
})

export default Header;