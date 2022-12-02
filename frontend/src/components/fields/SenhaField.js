import React from "react";
import PasswordField from "../inputs/PasswordField";

export default function SenhaField(props){
  return(
    <PasswordField
      id="senha"
      name="senha"
      label="Senha"
      value={props.formik.values.senha}
      onChange={props.formik.handleChange}
      inputProps={{ maxLength: 10 }}
      error={Boolean(props.formik.errors.senha)}
      helperText={props.formik.errors.senha}
    />
  )
}