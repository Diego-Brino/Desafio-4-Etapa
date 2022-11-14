import React, { useContext, useState } from "react";
import { Stack, useTheme } from "@mui/system";
import {
  Divider,
  Grid,
  IconButton,
  MenuItem,
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
import InputSelect from "../components/inputs/InputSelect";
import AddIcon from "@mui/icons-material/Add";

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
      formacoes: [
        {
          nome: "",
          dataInicio: "",
          dataTermino: "",
        },
      ],
      areasAtuacao: [
        {
          nome: "",
        },
      ],
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
    validateOnBlur: false,
    validateOnChange: false,
  });

  const handleSubmit = () => {};

  const [selectedAreaAtuacao, setSelectedAreaAtuacao] = useState("");

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
  const sxGridContainer = {
    maxWidth: "1264px",
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
          <Grid container spacing={2} sx={sxGridContainer}>
            <Grid item xs={12} md={12} lg={12} xl={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h5" sx={sxColumnHeading}>
                    Dados Básicos
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Stack spacing={2}>
                    <MaskedField
                      mask="999.999.999-99"
                      value={formik.values.cpf}
                      name="cpf"
                      label="CPF *"
                      onChange={formik.handleChange}
                      autoFocus={true}
                      inputProps={{ maxLength: 14 }}
                      error={Boolean(formik.errors.cpf)}
                      helperText={formik.errors.cpf}
                    />
                    <TextField
                      value={formik.values.lattes}
                      name="lattes"
                      label="Lattes *"
                      variant="filled"
                      onChange={formik.handleChange}
                      inputProps={{ maxLength: 50 }}
                      error={Boolean(formik.errors.lattes)}
                      helperText={
                        formik.errors.lattes != null
                          ? formik.errors.lattes
                          : " "
                      }
                    />
                    <TextField
                      value={formik.values.email}
                      name="email"
                      label="Email *"
                      variant="filled"
                      onChange={formik.handleChange}
                      inputProps={{ maxLength: 50 }}
                      error={Boolean(formik.errors.email)}
                      helperText={
                        formik.errors.email != null ? formik.errors.email : " "
                      }
                    />
                    <PasswordField
                      value={formik.values.senha}
                      name="senha"
                      label="Senha *"
                      onChange={formik.handleChange}
                      inputProps={{ maxLength: 10 }}
                      error={Boolean(formik.errors.senha)}
                      helperText={formik.errors.senha}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Stack spacing={2}>
                    <TextField
                      value={formik.values.nome}
                      name="nome"
                      label="Nome"
                      variant="filled"
                      onChange={formik.handleChange}
                      inputProps={{ maxLength: 50 }}
                      helperText={
                        formik.errors.nome != null ? formik.errors.nome : " "
                      }
                    />
                    <TextField
                      value={formik.values.dataNascimento}
                      name="dataNascimento"
                      label="Data de Nascimento"
                      InputLabelProps={{ shrink: true }}
                      variant="filled"
                      onChange={formik.handleChange}
                      type="date"
                      helperText={
                        formik.errors.dataNascimento != null
                          ? formik.errors.dataNascimento
                          : " "
                      }
                    />
                    <TextField
                      value={formik.values.emailAlternativo}
                      name="emailAlternativo"
                      label="Email Secundário"
                      onChange={formik.handleChange}
                      variant="filled"
                      inputProps={{ maxLength: 50 }}
                      error={Boolean(formik.errors.emailAlternativo)}
                      helperText={
                        formik.errors.emailAlternativo != null
                          ? formik.errors.emailAlternativo
                          : " "
                      }
                    />
                    <MaskedField
                      mask={"(99)99999-9999"}
                      value={
                        formik.values.telefones[0].ddd +
                        formik.values.telefones[0].numero
                      }
                      name="telefones.0"
                      label="Telefone"
                      inputProps={{ maxLength: 14 }}
                      error={Boolean(formik.errors.telefones)}
                      helperText={
                        formik.errors.telefones !== undefined
                          ? formik.errors.telefones
                          : " "
                      }
                      onChange={(e) => {
                        formik.handleChange;
                        let str = removeMaskTelefone(e.target.value);
                        let ddd = str.substring(0, 2);
                        let numero = str.substring(2, 11);
                        formik.setFieldValue("telefones.0.ddd", ddd, true);
                        formik.setFieldValue(
                          "telefones.0.numero",
                          numero,
                          true
                        );
                      }}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} lg={12} xl={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h5" sx={sxColumnHeading}>
                    Titulações
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Paper sx={{ height: "340.667px" }}>
                    <Stack direction="row">
                      <InputSelect
                        label="Áreas de Atuação"
                        value={selectedAreaAtuacao}
                        onChange={(e) => {
                          setSelectedAreaAtuacao(e.target.value);
                        }}
                      >
                        <MenuItem value="admin">Admin</MenuItem>
                        <MenuItem value="user1">User1</MenuItem>
                        <MenuItem value="user2">User2</MenuItem>
                      </InputSelect>
                      <IconButton sx={{width: '56px'}}>
                        <AddIcon />
                      </IconButton>
                    </Stack>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}></Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} lg={12} xl={6}></Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
}

export default PagePerfil;
