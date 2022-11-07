import React, { useContext } from "react";
import { Stack, useTheme } from "@mui/system";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";
import MaskedField from "../../components/inputs/MaskedField";
import PasswordField from "../../components/inputs/PasswordField";
import { useNavigate } from "react-router-dom";
import { LayoutContext } from "../../providers/LayoutProvider";
import { removeMaskTelefone } from "../../utils/utils";

function CadastrarFormStepGeneral(props) {
  const theme = useTheme();
  const navigate = useNavigate();
  const layout = useContext(LayoutContext);

  const handleStepBack = () => {
    navigate("/entrar");
  };

  //region styles
  const sxButtonStack = {
    justifyContent: [layout === "desktop" ? "flex-end" : "center"],
  };
  const sxButton = {
    width: "120px",
  };
  //endregion

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.25 } }}
    >
      <Stack spacing={2}>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={6}>
            <Stack spacing={2}>
              <MaskedField
                mask="999.999.999-99"
                value={props.formik.values.cpf}
                name="cpf"
                label="CPF *"
                onChange={props.formik.handleChange}
                autoFocus={true}
                inputProps={{ maxLength: 14 }}
                error={Boolean(props.formik.errors.cpf)}
                helperText={props.formik.errors.cpf}
              />
              <TextField
                value={props.formik.values.lattes}
                name="lattes"
                label="Lattes *"
                variant="filled"
                onChange={props.formik.handleChange}
                inputProps={{ maxLength: 50 }}
                error={Boolean(props.formik.errors.lattes)}
                helperText={
                  props.formik.errors.lattes != null
                    ? props.formik.errors.lattes
                    : " "
                }
              />
              <TextField
                value={props.formik.values.email}
                name="email"
                label="Email *"
                variant="filled"
                onChange={props.formik.handleChange}
                inputProps={{ maxLength: 50 }}
                error={Boolean(props.formik.errors.email)}
                helperText={
                  props.formik.errors.email != null
                    ? props.formik.errors.email
                    : " "
                }
              />
              <PasswordField
                value={props.formik.values.senha}
                name="senha"
                label="Senha *"
                onChange={props.formik.handleChange}
                inputProps={{ maxLength: 10 }}
                error={Boolean(props.formik.errors.senha)}
                helperText={props.formik.errors.senha}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Stack spacing={2}>
              <TextField
                value={props.formik.values.nome}
                name="nome"
                label="Nome"
                variant="filled"
                onChange={props.formik.handleChange}
                inputProps={{ maxLength: 50 }}
                helperText={
                  props.formik.errors.nome != null
                    ? props.formik.errors.nome
                    : " "
                }
              />
              <TextField
                value={props.formik.values.dataNascimento}
                name="dataNascimento"
                label="Data de Nascimento"
                InputLabelProps={{ shrink: true }}
                variant="filled"
                onChange={props.formik.handleChange}
                type="date"
                helperText={
                  props.formik.errors.dataNascimento != null
                    ? props.formik.errors.dataNascimento
                    : " "
                }
              />
              <TextField
                value={props.formik.values.emailAlternativo}
                name="emailAlternativo"
                label="Email Secundário"
                onChange={props.formik.handleChange}
                variant="filled"
                inputProps={{ maxLength: 50 }}
                error={Boolean(props.formik.errors.emailAlternativo)}
                helperText={
                  props.formik.errors.emailAlternativo != null
                    ? props.formik.errors.emailAlternativo
                    : " "
                }
              />
              <MaskedField
                mask={"(99)99999-9999"}
                value={
                  props.formik.values.telefones[0].ddd +
                  props.formik.values.telefones[0].numero
                }
                name="telefones.0"
                label="Telefone"
                inputProps={{ maxLength: 14 }}
                error={Boolean(props.formik.errors.telefones)}
                helperText={
                  props.formik.errors.telefones !== undefined
                    ? props.formik.errors.telefones
                    : " "
                }
                onChange={(e) => {
                  props.formik.handleChange;
                  let str = removeMaskTelefone(e.target.value);
                  let ddd = str.substring(0, 2);
                  let numero = str.substring(2, 11);
                  props.formik.setFieldValue("telefones.0.ddd", ddd, true);
                  props.formik.setFieldValue(
                    "telefones.0.numero",
                    numero,
                    true
                  );
                }}
              />
            </Stack>
          </Grid>
        </Grid>
        <Stack sx={sxButtonStack} direction="row" spacing={4}>
          <Button
            variant="contained"
            sx={sxButton}
            type="button"
            onClick={() => {
              handleStepBack;
            }}
          >
            <Typography color="secondary">Voltar</Typography>
          </Button>
          <Button variant="contained" sx={sxButton} type="submit">
            <Typography color="secondary">Avançar</Typography>
          </Button>
        </Stack>
      </Stack>
    </motion.div>
  );
}

export default CadastrarFormStepGeneral;
