import React, { useContext, useEffect } from "react";
import { Stack, useTheme } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { LayoutContext } from "../../providers/LayoutProvider";
import TitulacoesField from "../../components/inputs/TitulacoesField";
import AreasAtuacaoField from "../../components/inputs/AreasAtuacaoField";

function CadastrarFormStepSelect(props) {
  const theme = useTheme();
  const layout = useContext(LayoutContext);

  const handleGoBack = () => {
    props.setStep(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.25 } }}
    >
      <Stack spacing={2}>
        <TitulacoesField formik={props.formik} />
        <AreasAtuacaoField formik={props.formik} />
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
      </Stack>
    </motion.div>
  );
}

export default CadastrarFormStepSelect;
