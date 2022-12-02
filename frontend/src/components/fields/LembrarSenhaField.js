import React from "react";
import CheckboxField from "../inputs/CheckboxField";

export default function LembrarSenhaField(props){
  return(
    <CheckboxField
      id="lembrarSenha"
      name="lembrarSenha"
      label="Lembrar Senha"
      onChange={props.formik.handleChange}
    />
  )
}