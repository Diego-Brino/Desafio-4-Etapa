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
import CpfField from "../../components/fields/CpfField";
import SenhaField from "../../components/fields/SenhaField";
import LembrarSenhaField from "../../components/fields/LembrarSenhaField";
import ButtonRow from "../../components/ButtonRow";
import {setToken} from "../../services/slices/authSlice";

function EntrarForm() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const layout = useContext(LayoutContext);

  const validationSchema = yup.object({
    cpf: yup
      .string()
      .min(11, "Campo CPF é inválido!")
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
        sessionStorage.setItem("token", res.data);
        dispatch(setToken(res.data));
        navigate("/projetos");
      })
      .catch((err) => {
        let data = err.response.data;
        formik.setErrors({
          cpf: data.attribute === "cpf" ? data.message : formik.errors.cpf,
          senha:
            data.attribute === "senha" ? data.message : formik.errors.senha,
        });
      });
  };

  return (
    <Box
      width={[layout === "desktop" ? "350px" : "100%"]}
      maxWidth={[layout === "desktop" ? "initial" : "350px"]}
      padding={"25px 25px"}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
      >
        <Stack spacing={4}>
          <Typography variant="h3" fontWeight="bold" textAlign="center">
            Login
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={2}>
              <CpfField formik={formik} />
              <Box>
                <SenhaField formik={formik} />
                {/*<LembrarSenhaField formik={formik} />*/}
              </Box>
              <ButtonRow>
                <Link as={RouterLink} to="/cadastrar" variant="primary">
                  Criar Conta
                </Link>
                <LoadingButton type="submit" loading={loading}>
                  Entrar
                </LoadingButton>
              </ButtonRow>
            </Stack>
          </form>
        </Stack>
      </motion.div>
    </Box>
  );
}

export default EntrarForm;
