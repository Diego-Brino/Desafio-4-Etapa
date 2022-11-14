import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Stack, useTheme } from "@mui/system";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { LayoutContext } from "../../providers/LayoutProvider";
import { motion } from "framer-motion";
import CadastrarFormStepGeneral from "./CadastrarFormStepGeneral";
import CadastrarFormStepSelect from "./CadastrarFormStepSelect";
import useFetch from "../../hooks/useFetch";
import * as yup from "yup";
import { useFormik } from "formik";
import CadastrarFormStepRedesSociais from "./CadastrarFormStepRedesSociais";
import {removeMaskCpf} from "../../utils/utils";

function CadastrarForm() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const layout = useContext(LayoutContext);

  const [step, setStep] = useState(0);

  const validationSchemaStepGeneral = yup.object({
    cpf: yup
      .string()
      .required("Campo CPF é obrigatório!"),
    senha: yup.string().required("Campo Senha é obrigatório!"),
    lattes: yup
      .string()
      .required("Campo Lattes é obrigatório!")
      .url("Campo Lattes inválido!"),
    email: yup
      .string()
      .required("Campo Email é obrigatório!")
      .email("Campo Email inválido!"),
    emailAlternativo: yup.string().email("Campo Email Alternativo inválido!"),
    telefones: yup.array().of(
      yup
        .object()
        .shape({
          ddd: yup.string(),
          numero: yup.string(),
        })
        .test(
          "telefoneValidation",
          "Campo Telefone inválido!",
          function (telefone) {
            let telefoneCompleto =
              (telefone.ddd != undefined ? telefone.ddd : "") +
              (telefone.numero != undefined ? telefone.numero : "");
            return !(telefoneCompleto.length < 11 && telefoneCompleto != "");
          }
        )
    ),
  });
  const formik = useFormik({
    initialValues: {
      cpf: "",
      senha: "",
      email: "",
      lattes: "",
      emailAlternativo: "",
      nome: "",
      telefones: [
        {
          ddd: "",
          numero: "",
        },
      ],
      dataNascimento: "",
      areasAtuacao: [
        {
          nome: "",
        },
      ],
      formacoes: [
        {
          nome: "",
          dataInicio: "",
          dataTermino: "",
        },
      ],
      redesSociais: [
        {
          endereco: "",
          tipo: "I",
        },
        {
          endereco: "",
          tipo: "F",
        },
        {
          endereco: "",
          tipo: "L",
        },
        {
          endereco: "",
          tipo: "Y",
        },
        {
          endereco: "",
          tipo: "T",
        },
      ],
    },
    onSubmit: (values) => {
      values.cpf = removeMaskCpf(values.cpf)
      handleSubmit(values);
    },
    validationSchema: validationSchemaStepGeneral,
    validateOnBlur: false,
    validateOnChange: false,
  });

  const { response, error, loading, fetchData } = useFetch(
    {
      method: "POST",
      url: "http://localhost:8080/auth/cadastrar",
      data: formik.values,
    },
    false
  );

  const handleSubmit = () => {
    if (step !== 2) {
      setStep(step + 1);
      return;
    }

    fetchData()
      .then((res) => {
        navigate("/meus-projetos");
      })
      .catch((err) => {
        let data = err.response.data;
        console.log(data);
      });
  };

  //region styles
  const sxFormWrapper = {
    width: [layout === "desktop" ? "682px" : "100%"],
    maxWidth: [layout === "desktop" ? "initial" : "350px"],
    padding: "25px 25px",
  };
  const sxFormTitle = {
    textAlign: "center",
    fontWeight: "bold",
  };
  //endregion

  return (
    <Box sx={sxFormWrapper}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.25 } }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={4}>
            <Typography sx={sxFormTitle} variant="h3">
              Cadastro
            </Typography>
            {step === 0 && (
              <CadastrarFormStepGeneral formik={formik} setStep={setStep} />
            )}
            {step === 1 && (
              <CadastrarFormStepSelect formik={formik} setStep={setStep} />
            )}
            {step === 2 && (
              <CadastrarFormStepRedesSociais formik={formik} setStep={setStep} />
            )}
          </Stack>
        </form>
      </motion.div>
    </Box>
  );
}

export default CadastrarForm;
