import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  InputLabel,
  Paper,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, useTheme } from "@mui/system";
import { LayoutContext } from "../providers/LayoutProvider";
import { useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import AddIcon from "@mui/icons-material/Add";
import { parseJwt } from "../utils/utils";
import { useFormik } from "formik";
import * as yup from "yup";
import MaskedField from "../components/inputs/MaskedField";
import axios from "axios";
import moment from "moment";

function PageProjetos() {
  const theme = useTheme();
  const layout = useContext(LayoutContext);
  const outlet = useOutletContext();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.value);

  const [projetos, setProjetos] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState("cadastrar");

  const { response, error, loading, fetchData } = useFetch(
    {
      method: "GET",
      url: `http://localhost:8080/projetos/${parseJwt(token).sub}`,
      headers: {
        Authorization: token,
      },
    },
    false
  );
  const validationSchema = yup.object({
    titulo: yup.string().required("É obrigatório"),
    resumo: yup.string().required("É obrigatório"),
    dataInicio: yup.date().required("É obrigatório"),
    dataTermino: yup.date().required("É obrigatório"),
    publico: yup.number().required("É obrigatório"),
  });
  const formik = useFormik({
    initialValues: {
      idProjeto: '',
      titulo: "",
      resumo: "",
      dataInicio: "",
      dataTermino: "",
      publico: "1",
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
    validationSchema: validationSchema,
  });

  const handleSubmit = (values) => {
    values.dataInicio = values.dataInicio.replaceAll("-", "/");
    values.dataTermino = values.dataTermino.replaceAll("-", "/");
    values.dataInicio = moment(values.dataInicio).format("DD/MM/YYYY");
    values.dataTermino = moment(values.dataTermino).format("DD/MM/YYYY");

    if(action == 'cadastrar'){
      axios
        .post("http://localhost:8080/projetos/cadastrarProjeto", values, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          formik.resetForm();
          setOpen(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .put(`http://localhost:8080/projetos/editar/${values.idProjeto}`, values, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          formik.resetForm();
          setOpen(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }


  };

  const handleExcluir = (id) => {
    axios
      .delete(`http://localhost:8080/projetos/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        fetchData()
          .then((res) => {
            setProjetos(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOpenEditar = (id) => {
    var projeto = projetos.find((projeto) => (projeto.idProjeto == id));

    formik.setFieldValue('idProjeto', projeto.idProjeto, false);
    formik.setFieldValue("titulo", projeto.titulo, false);
    formik.setFieldValue("resumo", projeto.resumo, false);
    formik.setFieldValue("dataInicio", moment(projeto.dataInicio, 'DD/MM/YYYY').format('YYYY-MM-DD'), false);
    formik.setFieldValue("dataTermino", moment(projeto.dataTermino, 'DD/MM/YYYY').format('YYYY-MM-DD'), false);
    formik.setFieldValue("publico", projeto.publico.toString(), false);
    
    setOpen(true);

    setAction("editar");
  };

  useEffect(() => {
    fetchData()
      .then((res) => {
        setProjetos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [open]);

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
  const sxContentMain = {
    width: "100%",
    height: "100%",
    padding: "15px",
  };
  const sxProjeto = {};
  const sxProjetoTitle = {
    height: "30px",
    borderRadius: "4px 4px 0 0",
    display: "flex",
    backgroundColor: theme.palette.tertiary.main,
    justifyContent: "center",
    alignItems: "center",
  };
  const sxProjetoDesc = {
    display: "flex",
    gap: theme.spacing(2),
    flexDirection: "column",
    height: "240px",
    padding: theme.spacing(2),
  };
  const sxProjetoData = {
    minHeight: "68px",
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    padding: theme.spacing(2),
  };
  const sxActions = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: theme.spacing(2),
    padding: theme.spacing(2),
  };
  const sxDialog = {
    padding: theme.spacing(2),
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
          Meus Projetos
        </Typography>
      </Paper>
      <Divider />
      <Paper sx={sxContentMain}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: theme.spacing(2),
            }}
          >
            <TextField
              variant="filled"
              label="Filtro"
              onChange={(e) => {
                setFiltro(e.target.value);
              }}
            />
            <Button
              sx={{
                paddingX: theme.spacing(2),
                backgroundColor: theme.palette.tertiary.main,
                height: "56px",
              }}
              onClick={() => {
                setAction("cadastrar");
                setOpen(true);
              }}
            >
              <Typography>Novo Projeto</Typography>
              <AddIcon />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          {projetos.length != 0 ? (
            projetos
              .filter((projeto) => projeto.titulo.includes(filtro))
              .map((value, index) => {
                return (
                  <Grid item xs={12} lg={4} key={index}>
                    <Paper sx={sxProjeto}>
                      <Box sx={sxProjetoTitle} />
                      <Box sx={sxProjetoDesc}>
                        <Typography variant="h6" textAlign={"center"}>
                          {value.titulo}
                        </Typography>
                        <Typography sx={{ textAlign: "justify" }}>
                          {value.resumo}
                        </Typography>
                      </Box>
                      <Divider />
                      <Box sx={sxProjetoData}>
                        <Typography
                          sx={{ textAlign: "justify", height: "min-content" }}
                        >
                          Início: {value.dataInicio}
                        </Typography>
                        <Divider
                          orientation="vertical"
                          variant="middle"
                          flexItem
                        />
                        <Typography sx={{ textAlign: "justify" }}>
                          Fim: {value.dataTermino}
                        </Typography>
                      </Box>
                      <Divider />
                      <Box sx={sxActions}>
                        <Button
                          sx={{ backgroundColor: theme.palette.tertiary.main }}
                          onClick={() => {
                            handleOpenEditar(value.idProjeto);
                          }}
                        >
                          Editar
                        </Button>
                        <Button
                          sx={{ backgroundColor: "red" }}
                          onClick={() => {
                            handleExcluir(value.idProjeto);
                          }}
                        >
                          Excluir
                        </Button>
                      </Box>
                    </Paper>
                  </Grid>
                );
              })
          ) : (
            <Box sx={{ padding: theme.spacing(2) }}>
              <Typography>Nenhum Projeto Cadastrado!</Typography>
            </Box>
          )}
        </Grid>
      </Paper>
      <Dialog
        open={open}
        onClose={() => {
          formik.resetForm();
          setOpen(false);
        }}
      >
        <Paper sx={sxDialog}>
          <DialogTitle>
            {action == "editar" ? "Editar Projeto" : "Novo Projeto"}
          </DialogTitle>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="filled"
                  value={formik.values.titulo}
                  name="titulo"
                  label="Título *"
                  onChange={formik.handleChange}
                  inputProps={{ maxLength: 50 }}
                  error={Boolean(formik.errors.titulo)}
                  helperText={formik.errors.titulo}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="filled"
                  multiline
                  rows={2}
                  value={formik.values.resumo}
                  name="resumo"
                  label="Resumo *"
                  onChange={formik.handleChange}
                  inputProps={{ maxLength: 250 }}
                  error={Boolean(formik.errors.resumo)}
                  helperText={formik.errors.resumo}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  focused={true}
                  fullWidth
                  type="date"
                  variant="filled"
                  value={formik.values.dataInicio}
                  name="dataInicio"
                  label="Data Início *"
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.dataInicio)}
                  helperText={formik.errors.dataInicio}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  focused={true}
                  fullWidth
                  type="date"
                  variant="filled"
                  value={formik.values.dataTermino}
                  name="dataTermino"
                  label="Data Término *"
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.dataTermino)}
                  helperText={formik.errors.dataTermino}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  gap: theme.spacing(2),
                  alignItems: "center",
                }}
              >
                Público
                <ToggleButtonGroup
                  name="publico"
                  value={formik.values.publico}
                  color="primary"
                  exclusive
                  onChange={(e) => {
                    formik.setFieldValue("publico", e.target.value, false);
                  }}
                >
                  <ToggleButton value={"1"}>Sim</ToggleButton>
                  <ToggleButton value={"0"}>Não</ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ display: "flex", gap: theme.spacing(2) }}
              >
                <Button
                  sx={{
                    paddingX: theme.spacing(2),
                    backgroundColor: theme.palette.tertiary.main,
                  }}
                  type="submit"
                >
                  <Typography>Salvar</Typography>
                </Button>
                <Button
                  sx={{
                    paddingX: theme.spacing(2),
                    backgroundColor: theme.palette.tertiary.main,
                  }}
                  onClick={() => {
                    formik.resetForm();
                    setOpen(false);
                  }}
                >
                  <Typography>Voltar</Typography>
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Dialog>
    </>
  );
}

export default PageProjetos;
