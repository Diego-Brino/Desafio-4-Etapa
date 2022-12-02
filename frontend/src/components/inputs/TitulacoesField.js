import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import AddIcon from "@mui/icons-material/Add";
import {
  Chip,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Stack, useTheme } from "@mui/system";
import Center from "../../layouts/Center";

export default function TitulacoesField(props) {
  const theme = useTheme();

  const { response, error, loading, fetchData } = useFetch(
    {
      url: "http://localhost:8080/titulacoes",
    },
    true
  );

  const [titulacao, setTitulacao] = useState({
    nome: "",
    dataInicio: "",
    dataTermino: "",
  });

  return (
    <>
      {response != null && (
        <Paper>
          <Stack direction="row">
            <FormControl sx={{ flex: 15 }}>
              <InputLabel variant="filled">Titulação</InputLabel>
              <Select
                variant="filled"
                value={titulacao.nome}
                onChange={(e) => {
                  setTitulacao((prevState) => ({
                    ...prevState,
                    nome: e.target.value,
                  }));
                }}
              >
                {response.map((value, index) => {
                  return (
                    <MenuItem value={value.nome} key={index}>
                      {value.nome}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <TextField
              sx={{ flex: 10 }}
              value={titulacao.dataInicio}
              onChange={(e) => {
                setTitulacao((prevState) => ({
                  ...prevState,
                  dataInicio: e.target.value.replaceAll("-", "/"),
                }));
              }}
              name={"formacoes." + props.index + ".dataInicio"}
              label="Data Início"
              InputLabelProps={{ shrink: true }}
              variant="filled"
              type="date"
            />
            <TextField
              sx={{ flex: 10 }}
              name={"formacoes." + props.index + ".dataFim"}
              label="Data Fim"
              InputLabelProps={{ shrink: true }}
              variant="filled"
              value={titulacao.dataTermino}
              onChange={(e) => {
                setTitulacao((prevState) => ({
                  ...prevState,
                  dataTermino: e.target.value.replaceAll("-", "/")
                }));
              }}
              type="date"
            />
            <IconButton
              sx={{ width: "56px", height: "56px" }}
              onClick={() => {
                if (props.formik.values.formacoes.length === 3 || titulacao.nome === "") return;
                props.formik.setFieldValue(
                  `formacoes.${
                    props.formik.values.formacoes.length -
                    (props.formik.values.formacoes[0].nome === "" ? 1 : 0)
                  }`,
                  titulacao
                );
              }}
            >
              <AddIcon />
            </IconButton>
          </Stack>
          {props.formik.values.formacoes[0].nome !== "" && (
            <Stack spacing={2} sx={{ padding: theme.spacing(2) }}>
              {props.formik.values.formacoes.map((value, index) => {
                return (
                  <Chip
                    key={index}
                    label={`${value.nome} - ${value.dataInicio} - ${value.dataTermino}`}
                    sx={{ width: "min-content" }}
                    onDelete={() => {
                      var array = [...props.formik.values.formacoes];
                      var index = array.indexOf(value);
                      array.splice(index, 1);
                      if (array.length === 0)
                        array = [
                          {
                            nome: "",
                            dataInicio: "",
                            dataTermino: "",
                          },
                        ];
                      props.formik.setFieldValue("formacoes", array);
                    }}
                  />
                );
              })}
            </Stack>
          )}
        </Paper>
      )}
    </>
  );
}
