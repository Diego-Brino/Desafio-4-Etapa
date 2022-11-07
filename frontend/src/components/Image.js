import React from "react";
import { Box } from "@mui/system";

function Image(props) {
  return <Box component="img" sx={props.sx} src={props.src} alt={props.alt} />;
}

export default Image;