import React, { useContext, useEffect, useState } from "react";
import {
  Chip,
  Divider,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, styled, useTheme } from "@mui/system";
import { LayoutContext } from "../providers/LayoutProvider";
import { useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { parseJwt } from "../utils/utils";
import { setToken } from "../services/slices/authSlice";
import axios from "axios";

function PageCientistas() {
  const theme = useTheme();
  const layout = useContext(LayoutContext);
  const outlet = useOutletContext();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.value);

  const [cientistas, setCientistas] = useState([]);
  const [filtro, setFiltro] = useState("");

  const { response, error, loading, fetchData } = useFetch(
    {
      method: "GET",
      url: `http://localhost:8080/cientistas`,
      headers: {
        Authorization: token,
      },
    },
    false
  );

  useEffect(() => {
    fetchData()
      .then((res) => {
        setCientistas(res.data);
      })
      .catch((err) => {
        console.log(err);
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
  const sxContentMain = {
    width: "100%",
    height: "100%",
    padding: "15px",
  };
  const sxCientista = {};
  const sxCientistaNome = {
    borderRadius: "4px 4px 0 0",
    height: "30px",
    display: "flex",
    backgroundColor: theme.palette.tertiary.main,
    justifyContent: "center",
    alignItems: "center",
  };
  const sxCientistaDesc = {
    padding: theme.spacing(2),
    height: "60%",
  };
  const sxCientistaFormacoes = {
    flexWrap: "wrap",
    minHeight: "64px",
    display: "flex",
    gap: theme.spacing(2),
    padding: theme.spacing(2),
    alignItems: "center",
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
          Cientistas
        </Typography>
      </Paper>
      <Divider />
      <Paper sx={sxContentMain}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="filled"
              label="Filtro"
              onChange={(e) => {
                setFiltro(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          {cientistas
            .filter(
              (cientista) =>
                filtro == "" ||
                (cientista.areasAtuacao[0] != null &&
                  cientista.areasAtuacao[0].nome.includes(filtro)) ||
                (cientista.areasAtuacao[1] != null &&
                  cientista.areasAtuacao[1].nome.includes(filtro)) ||
                (cientista.areasAtuacao[2] != null &&
                  cientista.areasAtuacao[2].nome.includes(filtro)) ||
                (cientista.formacoes[0] != null &&
                  cientista.formacoes[0].nome.includes(filtro)) ||
                (cientista.formacoes[1] != null &&
                  cientista.formacoes[1].nome.includes(filtro)) ||
                (cientista.formacoes[2] != null &&
                  cientista.formacoes[2].nome.includes(filtro))
            )
            .map((value, index) => {
              return (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <Paper sx={sxCientista}>
                    <Box sx={sxCientistaNome}></Box>
                    <Box sx={sxCientistaDesc}>
                      <Typography>
                        Nome: {value.nome != null ? value.nome : "-"}
                      </Typography>
                      <Typography>Lattes: {value.lattes}</Typography>
                      <Typography>Email: {value.email}</Typography>
                      <Typography>
                        Data Nascimento:{" "}
                        {value.dataNascimento != null
                          ? value.dataNascimento
                          : "-"}
                      </Typography>
                      <Typography>
                        Telefone:{" "}
                        {value.telefones[0] != null
                          ? `(${value.telefones[0].ddd})${value.telefones[0].numero}`
                          : "-"}
                      </Typography>
                    </Box>
                    <Divider />
                    <Box sx={sxCientistaFormacoes}>
                      <Typography fontWeight="bold">
                        Áreas de Atuação:{" "}
                      </Typography>
                      {value.areasAtuacao.map((value, index) => {
                        return <Chip key={index} label={value.nome} />;
                      })}
                    </Box>
                    <Divider />
                    <Box sx={sxCientistaFormacoes}>
                      <Typography fontWeight="bold">Formações: </Typography>
                      {value.formacoes.map((value, index) => {
                        return <Chip key={index} label={value.nome} />;
                      })}
                    </Box>
                  </Paper>
                </Grid>
              );
            })}
        </Grid>
      </Paper>
    </>
  );
}

export default PageCientistas;
