import React, { useContext, useEffect } from "react";
import { Stack, useTheme } from "@mui/system";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { LayoutContext } from "../../providers/LayoutProvider";
import TitulacoesField from "../../components/inputs/TitulacoesField";
import AreasAtuacaoField from "../../components/inputs/AreasAtuacaoField";

function CadastrarFormStepSelect(props) {
  const theme = useTheme();
  const layout = useContext(LayoutContext);

  const handleGoBack = () => {
    props.setStep(1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.25 } }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <Stack spacing={2}>
            <TextField
              value={props.formik.values.redesSociais[0].endereco}
              name="redesSociais.0.endereco"
              label="Instagram"
              variant="filled"
              onChange={props.formik.handleChange}
              inputProps={{ maxLength: 50 }}
            />
            <TextField
              value={props.formik.values.redesSociais[1].endereco}
              name="redesSociais.1.endereco"
              label="Facebook"
              variant="filled"
              onChange={props.formik.handleChange}
              inputProps={{ maxLength: 50 }}
            />
            <TextField
              value={props.formik.values.redesSociais[2].endereco}
              name="redesSociais.2.endereco"
              label="Linkedin"
              variant="filled"
              onChange={props.formik.handleChange}
              inputProps={{ maxLength: 50 }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Stack spacing={2}>
            <TextField
              value={props.formik.values.redesSociais[3].endereco}
              name="redesSociais.3.endereco"
              label="Youtube"
              variant="filled"
              onChange={props.formik.handleChange}
              inputProps={{ maxLength: 50 }}
            />
            <TextField
              value={props.formik.values.redesSociais[4].endereco}
              name="redesSociais.4.endereco"
              label="TikTok"
              variant="filled"
              onChange={props.formik.handleChange}
              inputProps={{ maxLength: 50 }}
            />
          </Stack>
        </Grid>
      </Grid>
      <Stack
        direction="row"
        spacing={4}
        justifyContent={layout === "desktop" ? "flex-end" : "center"}
      >
        <Button
          variant="contained"
          sx={{ width: "120px" }}
          type="button"
          onClick={handleGoBack}
        >
          <Typography color="secondary">Voltar</Typography>
        </Button>
        <Button variant="contained" sx={{ width: "120px" }} type="submit">
          <Typography color="secondary">Avançar</Typography>
        </Button>
      </Stack>
    </motion.div>
  );
}

export default CadastrarFormStepSelect;
