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

export default function AreasAtuacaoField(props) {
  const theme = useTheme();

  const { response, error, loading, fetchData } = useFetch(
    {
      url: "http://localhost:8080/areasAtuacao",
    },
    true
  );

  const [areasAtuacao, setAreasAtuacao] = useState({
    nome: "",
  });

  return (
    <>
      {response != null && (
        <Paper>
          <Stack direction="row">
            <FormControl sx={{ flex: 20 }}>
              <InputLabel variant="filled">Áreas Atuação</InputLabel>
              <Select
                variant="filled"
                value={areasAtuacao.nome}
                onChange={(e) => {
                  setAreasAtuacao((prevState) => ({
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
            <IconButton
              sx={{ width: "56px", height: "56px" }}
              onClick={() => {
                if (
                  props.formik.values.areasAtuacao.length === 3 ||
                  areasAtuacao.nome === ""
                )
                  return;
                props.formik.setFieldValue(
                  `areasAtuacao.${
                    props.formik.values.areasAtuacao.length -
                    (props.formik.values.areasAtuacao[0].nome === "" ? 1 : 0)
                  }`,
                  areasAtuacao
                );
              }}
            >
              <AddIcon />
            </IconButton>
          </Stack>
          {props.formik.values.areasAtuacao[0].nome !== "" && (
            <Stack spacing={2} sx={{ padding: theme.spacing(2) }}>
              {props.formik.values.areasAtuacao.map((value, index) => {
                return (
                  <Chip
                    key={index}
                    label={value.nome}
                    sx={{ width: "min-content" }}
                    onDelete={() => {
                      var array = [...props.formik.values.areasAtuacao];
                      var index = array.indexOf(value);
                      array.splice(index, 1);
                      if (array.length === 0)
                        array = [
                          {
                            nome: "",
                          },
                        ];
                      props.formik.setFieldValue("areasAtuacao", array);
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
