import React, { useContext, useEffect, useState } from "react";
import { Stack, useTheme } from "@mui/system";
import {
  Button,
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
import { parseJwt, removeMaskTelefone } from "../utils/utils";
import InputSelect from "../components/inputs/InputSelect";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import moment from "moment";
import TitulacoesField from "../components/inputs/TitulacoesField";
import AreasAtuacaoField from "../components/inputs/AreasAtuacaoField";
import * as yup from "yup";
import axios from "axios";

function PagePerfil() {
  const theme = useTheme();
  const layout = useContext(LayoutContext);
  const outlet = useOutletContext();
  const token = useSelector((state) => state.token.value);

  const [loading, setLoading] = useState(true);

  const validationSchemaStepGeneral = yup.object({
    cpf: yup
      .string()
      .min(11, "Campo CPF é inválido!")
      .required("Campo CPF é obrigatório!"),
    senha: yup.string().required("Campo Senha é obrigatório!"),
    lattes: yup.string().required("Campo Lattes é obrigatório!"),
    email: yup
      .string()
      .required("Campo Email é obrigatório!")
      .email("Campo Email inválido!"),
    emailAlternativo: yup.string().email("Campo Email Alternativo inválido!"),
    telefones: yup.array().of(
      yup
        .object()
        .shape({
          ddd: yup.string(),
          numero: yup.string(),
        })
        .test(
          "telefoneValidation",
          "Campo Telefone inválido!",
          function (telefone) {
            let telefoneCompleto =
              (telefone.ddd != undefined ? telefone.ddd : "") +
              (telefone.numero != undefined ? telefone.numero : "");
            return !(telefoneCompleto.length < 11 && telefoneCompleto != "");
          }
        )
    ),
  });
  const formik = useFormik({
    initialValues: {
      idCientista: "",
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
      areasAtuacao: [
        {
          nome: "",
        },
      ],
      formacoes: [
        {
          nome: "",
          dataInicio: "",
          dataTermino: "",
        },
      ],
      redesSociais: [
        {
          endereco: "",
          tipo: "I",
        },
        {
          endereco: "",
          tipo: "F",
        },
        {
          endereco: "",
          tipo: "L",
        },
        {
          endereco: "",
          tipo: "Y",
        },
        {
          endereco: "",
          tipo: "T",
        },
      ],
    },
    onSubmit: (values) => {
      console.log(values);
      handleSubmit(values);
    },
    validateOnBlur: false,
    validateOnChange: false,
  });

  const handleSubmit = (values) => {
    values.dataNascimento = moment(values.dataNascimento, "YYYY-MM-DD").format(
      "DD/MM/YYYY"
    );
    values.senha = "teste";

    axios
      .put(
        `http://localhost:8080/cientistas/editar/${parseJwt(token).sub}`,
        values,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { response, error, aloading, fetchData } = useFetch(
    {
      method: "GET",
      url: `http://localhost:8080/cientistas/${parseJwt(token).sub}`,
      headers: {
        Authorization: `${token}`,
      },
    },
    true
  );

  const [selectedAreaAtuacao, setSelectedAreaAtuacao] = useState("");

  useEffect(() => {
    fetchData()
      .then((res) => {
        formik.setFieldValue(
          "idCientista",
          res.data.idCientista.toString(),
          false
        );
        formik.setFieldValue("cpf", res.data.cpf, false);
        formik.setFieldValue("lattes", res.data.lattes, false);
        formik.setFieldValue("email", res.data.email, false);
        formik.setFieldValue(
          "emailAlternativo",
          res.data.emailAlternativo,
          false
        );
        if (res.telefones != undefined) {
          formik.setFieldValue(
            "telefones.0",
            {
              ddd: res.data.telefones[0].ddd,
              numero: res.data.telefones[0].numero,
            },
            false
          );
        }
        formik.setFieldValue("senha", res.data.senha, false);
        formik.setFieldValue("nome", res.data.nome, false);
        formik.setFieldValue(
          "dataNascimento",
          moment(res.data.dataNascimento, "DD/MM/YYYY").format("YYYY-MM-DD"),
          false
        );

        if(res.data.areasAtuacao.length == 0){
          formik.setFieldValue(
            "areasAtuacao",
            [
              {
                nome: "",
              },
            ],
            false
          );
        } else {
          formik.setFieldValue(
            "areasAtuacao",
            res.data.areasAtuacao.map(
              (v) =>
                (v = {
                  nome: v.nome,
                })
            ),
            false
          );
        }

        if(res.data.formacoes.length == 0){
          formik.setFieldValue(
            "formacoes",
            [
              {
                nome: "",
                dataInicio: "",
                dataTermino: "",
              },
            ],
            false
          );
        } else {
          formik.setFieldValue(
            "formacoes",
            res.data.formacoes.map(
              (v) =>
                (v = {
                  nome: v.nome,
                  dataInicio: v.dataInicio,
                  dataTermino: v.dataTermino,
                })
            ),
            false
          );
        }
        if (res.data.redesSociais[0] != null)
          formik.setFieldValue(
            "redesSociais.0",
            {
              tipo: res.data.redesSociais[0].tipo,
              endereco: res.data.redesSociais[0].endereco,
            },
            false
          );
        if (res.data.redesSociais[1] != null)
          formik.setFieldValue(
            "redesSociais.1",
            {
              tipo: res.data.redesSociais[1].tipo,
              endereco: res.data.redesSociais[1].endereco,
            },
            false
          );
        if (res.data.redesSociais[2] != null)
          formik.setFieldValue(
            "redesSociais.2",
            {
              tipo: res.data.redesSociais[2].tipo,
              endereco: res.data.redesSociais[2].endereco,
            },
            false
          );
        if (res.data.redesSociais[3] != null)
          formik.setFieldValue(
            "redesSociais.3",
            {
              tipo: res.data.redesSociais[3].tipo,
              endereco: res.data.redesSociais[3].endereco,
            },
            false
          );
        if (res.data.redesSociais[4] != null)
          formik.setFieldValue(
            "redesSociais.4",
            {
              tipo: res.data.redesSociais[4].tipo,
              endereco: res.data.redesSociais[4].endereco,
            },
            false
          );
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false)
      });
  }, []);

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
      {
        !loading &&
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
                          disabled={true}
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
                          disabled={true}
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
                          disabled={true}
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
                <Grid item xs={12} md={12} lg={12} xl={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h5" sx={sxColumnHeading}>
                        Titulações
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <TitulacoesField formik={formik} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <AreasAtuacaoField formik={formik} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" sx={sxColumnHeading}>
                    Redes Sociais
                  </Typography>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Stack spacing={2}>
                    <TextField
                      value={formik.values.redesSociais[0].endereco}
                      name="redesSociais.0.endereco"
                      label="Instagram"
                      variant="filled"
                      onChange={formik.handleChange}
                      inputProps={{ maxLength: 50 }}
                    />
                    <TextField
                      value={formik.values.redesSociais[1].endereco}
                      name="redesSociais.1.endereco"
                      label="Facebook"
                      variant="filled"
                      onChange={formik.handleChange}
                      inputProps={{ maxLength: 50 }}
                    />
                    <TextField
                      value={formik.values.redesSociais[2].endereco}
                      name="redesSociais.2.endereco"
                      label="Linkedin"
                      variant="filled"
                      onChange={formik.handleChange}
                      inputProps={{ maxLength: 50 }}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Stack spacing={2}>
                    <TextField
                      value={formik.values.redesSociais[3].endereco}
                      name="redesSociais.3.endereco"
                      label="Youtube"
                      variant="filled"
                      onChange={formik.handleChange}
                      inputProps={{ maxLength: 50 }}
                    />
                    <TextField
                      value={formik.values.redesSociais[4].endereco}
                      name="redesSociais.4.endereco"
                      label="TikTok"
                      variant="filled"
                      onChange={formik.handleChange}
                      inputProps={{ maxLength: 50 }}
                    />
                  </Stack>
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ padding: theme.spacing(2) }}>
                <Button
                  sx={{
                    paddingX: theme.spacing(2),
                    backgroundColor: theme.palette.tertiary.main,
                  }}
                  type="submit"
                  onClick={() => console.log("dddd")}
                >
                  <Typography>Salvar</Typography>
                </Button>
              </Grid>
            </form>
          </Paper>
        </>
      }
    </>
  );
}

export default PagePerfil;
