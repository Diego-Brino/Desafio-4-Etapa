import React from "react";
import MaskedField from "../inputs/MaskedField";

export default function CpfField(props){
  return(
    <MaskedField
      helperText={props.formik.errors.cpf}
      mask="999.999.999-99"
      maskChar=""
      id="cpf"
      name="cpf"
      label="CPF"
      value={props.formik.values.cpf}
      onChange={(e) => {
        let cpf = e.target.value;
        cpf = cpf.replaceAll(".", "");
        cpf = cpf.replaceAll("-", "");
        props.formik.setFieldValue('cpf', cpf)
      }}
      autoFocus={true}
      inputProps={{ maxLength: 14 }}
      error={Boolean(props.formik.errors.cpf)}
    />
  )
}