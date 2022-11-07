import React, { useContext } from "react";
import { Stack, useTheme } from "@mui/system";
import {
  Divider,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useOutletContext } from "react-router-dom";
import { LayoutContext } from "../providers/LayoutProvider";
import { useFormik } from "formik";
import MaskedField from "../components/inputs/MaskedField";
import PasswordField from "../components/inputs/PasswordField";
import { removeMaskTelefone } from "../utils/utils";

function PagePerfil() {
  const theme = useTheme();
  const layout = useContext(LayoutContext);
  const outlet = useOutletContext();

  const formik = useFormik({
    initialValues: {
      cpf: "",
      senha: "",
      email: "",
      lattes: "",
      emailAlternativo: "",
      nome: "",
      telefones: [
        {
          ddd: "",
          numero: "",
        },
      ],
      dataNascimento: "",
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
    validateOnBlur: false,
    validateOnChange: false,
  });

  const handleSubmit = () => {};

  //region styles
  const sxHeadingWrapper = {
    minHeight: "calc(96px - 30px)",
    display: "flex",
    alignItems: "center",
    padding: "15px",
  };
  const sxHeading = {
    fontWeight: "bold",
    margin: [layout === "desktop" ? "" : "0 calc(50% - 40px)"],
    transform: [layout === "desktop" ? "" : "translateX(-50%)"],
  };
  const sxColumnHeading = {
    fontWeight: "bold",
  };
  const sxContentMain = {
    width: "100%",
    height: "100%",
    padding: "15px",
  };
  const sxGridDadosBasicos = {
    width: 'calc(100% - 32px)'
  };
  const sxGridItem = {
    width: '350px'
  };

  //endregion

  return (
    <>
      <Paper sx={sxHeadingWrapper}>
        {layout === "mobile" && (
          <IconButton
            onClick={() => {
              outlet.setOpen(!outlet.open);
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h4" sx={sxHeading}>
          Perfil
        </Typography>
      </Paper>
      <Divider />
      <Paper sx={sxContentMain}>
        <form onSubmit={formik.handleSubmit}>
          <Stack>
            <Typography variant="h5" sx={sxColumnHeading}>
              Dados Básicos
            </Typography>
            <Grid container>
              <Grid item>
                <Typography variant="h5" sx={sxColumnHeading}>
                  Dados Básicos
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5" sx={sxColumnHeading}>
                  Dados Básicos
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </form>
      </Paper>
    </>
  );
}

export default PagePerfil;
