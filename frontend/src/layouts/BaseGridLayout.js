import React from "react";
import {Box, Container, styled} from "@mui/system";
import Header from "./Header";
import theme from "../themes";

function BaseGridLayout(props){
    return(
        <Grid>
            <Box gridArea={"header"}>
                {props.showHeader &&
                    <Header/>
                }
            </Box>
            <Box gridArea={"content"}>
                <Container>
                    {props.children}
                </Container>
            </Box>
            <Box gridArea={"footer"}>
                {props.showFooter &&
                    <></>
                }
            </Box>
        </Grid>
    );
}

const Grid = styled(Box)({
    minHeight: "100vh",
    width: "100vw",
    display: "grid",
    gridTemplateAreas:
        "'header' " +
        "'content' " +
        "'footer'",
    [theme.breakpoints.up('sm')]: {gridTemplateRows: "10vh minmax(80vh, auto) 10vh",},
    [theme.breakpoints.down('sm')]: {gridTemplateRows: "8vh minmax(84vh, auto) 8vh",},
    gridTemplateColumns: "100vw"
})

export default BaseGridLayout;