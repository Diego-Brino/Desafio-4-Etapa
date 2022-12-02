import React, { useContext, useEffect, useState } from "react";
import {
  Divider,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, useTheme } from "@mui/system";
import { LayoutContext } from "../providers/LayoutProvider";
import { useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";

function PageProjetos() {
  const theme = useTheme();
  const layout = useContext(LayoutContext);
  const outlet = useOutletContext();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.value);

  const [projetos, setProjetos] = useState([]);
  const [filtro, setFiltro] = useState("");

  const { response, error, loading, fetchData } = useFetch(
    {
      method: "GET",
      url: `http://localhost:8080/projetos`,
      headers: {
        Authorization: token,
      },
    },
    false
  );

  useEffect(() => {
    fetchData()
      .then((res) => {
        setProjetos(res.data);
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
  const sxProjeto = {

  };
  const sxProjetoTitle = {
    height: "30px",
    borderRadius: "4px 4px 0 0",
    display: "flex",
    backgroundColor: theme.palette.tertiary.main,
    justifyContent: "center",
    alignItems: "center",
  };
  const sxProjetoDesc = {
    display: 'flex',
    gap: theme.spacing(2),
    flexDirection: 'column',
    height: "240px",
    padding: theme.spacing(2),
  };
  const sxProjetoData = {
    minHeight: '68px',
    display: "flex",
    alignItems: 'center',
    gap: theme.spacing(2),
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
          Projetos
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
          {projetos
            .filter((projeto) => projeto.titulo.includes(filtro))
            .map((value, index) => {
              return (
                <Grid item xs={12} lg={4} key={index}>
                  <Paper sx={sxProjeto}>
                    <Box sx={sxProjetoTitle}/>
                    <Box sx={sxProjetoDesc}>
                      <Typography variant="h6" textAlign={'center'}>{value.titulo}</Typography>
                      <Typography sx={{ textAlign: "justify" }}>
                        {value.resumo}
                      </Typography>
                    </Box>
                    <Divider />
                    <Box sx={sxProjetoData}>
                      <Typography sx={{ textAlign: "justify", height: 'min-content' }}>
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
                  </Paper>
                </Grid>
              );
            })}
        </Grid>
      </Paper>
    </>
  );
}

export default PageProjetos;
