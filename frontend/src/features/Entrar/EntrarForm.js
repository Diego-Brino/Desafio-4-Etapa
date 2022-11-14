import React, { useContext } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Box, Stack, useTheme } from "@mui/system";
import { Link, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { LayoutContext } from "../../providers/LayoutProvider";
import { motion } from "framer-motion";
import PasswordField from "../../components/inputs/PasswordField";
import CheckboxField from "../../components/inputs/CheckboxField";
import LoadingButton from "../../components/buttons/LoadingButton";
import useFetch from "../../hooks/useFetch";
import { useFormik } from "formik";
import * as yup from "yup";
import MaskedField from "../../components/inputs/MaskedField";
import { removeMaskCpf } from "../../utils/utils";

function EntrarForm() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const layout = useContext(LayoutContext);

  const validationSchema = yup.object({
    cpf: yup
      .string()
      .required("Campo CPF é obrigatório!"),
    senha: yup.string().required("Campo Senha é obrigatório!"),
  });
  const formik = useFormik({
    initialValues: {
      cpf: "",
      senha: "",
      lembrarSenha: false,
    },
    onSubmit: (values) => {
      values.cpf = removeMaskCpf(values.cpf)
      handleSubmit(values);
    },
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
  });

  const { response, error, loading, fetchData } = useFetch(
    {
      method: "POST",
      url: "http://localhost:8080/auth/login",
      data: formik.values,
    },
    false
  );

  const handleSubmit = (values) => {
    fetchData()
      .then((res) => {
        values.lembrarSenha
          ? localStorage.setItem("token", res.data)
          : localStorage.removeItem("token");
        navigate("/meus-projetos");
      })
      .catch((err) => {
        let data = err.response.data;
        formik.setErrors({
          cpf: data.attribute === "cpf" ? data.message : formik.errors.cpf,
          senha:
            data.attribute === "senha" ? data.message : formik.errors.senha,
          lembrarSenha: formik.errors.lembrarSenha,
        });
      });
  };

  //region styles
  const sxFormWrapper = {
    width: [layout === "desktop" ? "350px" : "100%"],
    maxWidth: [layout === "desktop" ? "initial" : "350px"],
    padding: "25px 25px",
  };
  const sxFormTitle = {
    fontWeight: "bold",
    textAlign: "center",
  };
  const sxButtonStack = {
    justifyContent: [layout === "desktop" ? "space-between" : "center"],
  };
  const sxLink = {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
  };
  const sxButton = {
    width: "120px",
  };
  //endregion

  return (
    <Box sx={sxFormWrapper}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.25 } }}
      >
        <Stack spacing={4}>
          <Typography variant="h3" sx={sxFormTitle}>
            Login
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={2}>
              <MaskedField
                helperText={formik.errors.cpf}
                mask="999.999.999-99"
                maskChar=""
                id="cpf"
                name="cpf"
                label="CPF"
                value={formik.values.cpf}
                onChange={formik.handleChange}
                autoFocus={true}
                inputProps={{ maxLength: 14 }}
                error={Boolean(formik.errors.cpf)}
              />
              <Stack>
                <PasswordField
                  id="senha"
                  name="senha"
                  label="Senha"
                  value={formik.values.senha}
                  onChange={formik.handleChange}
                  inputProps={{ maxLength: 10 }}
                  error={Boolean(formik.errors.senha)}
                  helperText={formik.errors.senha}
                />
                <CheckboxField
                  id="lembrarSenha"
                  name="lembrarSenha"
                  label="Lembrar Senha"
                  onChange={formik.handleChange}
                />
              </Stack>
              <Stack direction="row" spacing={4} sx={sxButtonStack}>
                <Typography variant="body1" sx={sxLink}>
                  <Link as={RouterLink} to="/cadastrar" variant="primary">
                    Criar Conta
                  </Link>
                </Typography>
                <LoadingButton type="submit" loading={loading} sx={sxButton}>
                  <Typography color="secondary">Entrar</Typography>
                </LoadingButton>
              </Stack>
            </Stack>
          </form>
        </Stack>
      </motion.div>
    </Box>
  );
}

export default EntrarForm;
