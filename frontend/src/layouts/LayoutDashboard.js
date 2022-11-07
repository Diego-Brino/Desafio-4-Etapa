import center from "./Center";
import { Box, Stack, useTheme } from "@mui/system";
import React, {useContext, useEffect, useState} from "react";
import { LayoutContext } from "../providers/LayoutProvider";
import {
  Divider,
  Drawer, IconButton,
  Link,
  List,
  ListItemButton, Paper,
  Typography,
} from "@mui/material";
import { Link as RouterLink, Outlet, useLocation } from "react-router-dom";
import Image from "../components/Image";
import logo from "../../public/assets/images/logo.png";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import PersonIcon from "@mui/icons-material/Person";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";

function LayoutDashboard(props) {

  const layout = useContext(LayoutContext);
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    layout === 'desktop' ? setOpen(true) : setOpen(false);
  }, [layout])

  //region styles
  const sxFlexLayout = {
    minHeight: "100vh",
    display: "flex",
  };
  const sxSidebarPaper = {
    padding: "15px",
    width: "220px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };
  const sxSidebarHeading = {
    height: 'calc(96px - 30px)',
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  };
  const sxSidebarHeadingTitle = {
    fontWeight: "bold",
  };
  const sxLogo = {
    width: "auto",
    height: "35px",
  };
  const sxSidebarLinkButton = {
    display: "flex",
    gap: "10px",
  };
  const sxItemSairWrapper = {
    margin: 'auto 0 0 0'
  };
  const sxSidebarSair = {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  };
  const sxContent = {
    margin: [(open && layout === 'desktop') ? "0 0 0 220px" : "0"],
    padding: "15px",
    width: "100%",
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  };
  //endregion

  return (
    <Box sx={sxFlexLayout}>
      <Drawer
        variant={layout === 'desktop' ? 'persistent' : 'temporary'}
        open={layout === 'desktop' ? true : open}
        onClose={() => {setOpen(!open)}}
        PaperProps={{ sx: sxSidebarPaper }}
      >
        <Stack direction="row" spacing={1} sx={sxSidebarHeading}>
          <Image src={logo} alt="logo" sx={sxLogo} />
          <Typography variant="h4" sx={sxSidebarHeadingTitle}>
            SciLink
          </Typography>
        </Stack>
        <Box>
          <Divider />
          <List>
            <Link as={RouterLink} to="/perfil" variant="no-underline">
              <ListItemButton sx={sxSidebarLinkButton}>
                <PersonIcon />
                <Typography>Perfil</Typography>
              </ListItemButton>
            </Link>
            <Link as={RouterLink} to="/projetos" variant="no-underline">
              <ListItemButton sx={sxSidebarLinkButton}>
                <ContactPageIcon />
                <Typography>Meus Projetos</Typography>
              </ListItemButton>
            </Link>
          </List>
          <Divider />
          <List>
            <Link as={RouterLink} to="/pesquisadores" variant="no-underline">
              <ListItemButton sx={sxSidebarLinkButton}>
                <PersonSearchIcon />
                <Typography>Pesquisadores</Typography>
              </ListItemButton>
            </Link>
            <Link as={RouterLink} to="/projetos" variant="no-underline">
              <ListItemButton sx={sxSidebarLinkButton}>
                <FindInPageIcon />
                <Typography>Projetos</Typography>
              </ListItemButton>
            </Link>
          </List>
          <Divider />
        </Box>
        <Box sx={sxItemSairWrapper}>
          <Divider />
          <List>
            <Link as={RouterLink} to="#" variant="no-underline">
              <ListItemButton sx={sxSidebarSair}>
                <LogoutIcon />
                <Typography>Sair</Typography>
              </ListItemButton>
            </Link>
          </List>
        </Box>
      </Drawer>
      <Box sx={sxContent}>
       <Outlet context={{open, setOpen}}/>
      </Box>
    </Box>
  );
}

export default LayoutDashboard;
