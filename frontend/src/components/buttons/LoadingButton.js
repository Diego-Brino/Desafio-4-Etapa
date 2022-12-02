import React from "react";
import { Button, CircularProgress, Typography } from "@mui/material";

function LoadingButton(props) {
  return (
    <Button
      variant="contained"
      sx={props.sx}
      type={props.type}
      disabled={props.loading}
      onClick={props.onClick}
    >
      {!props.loading ? (
        <>{props.children}</>
      ) : (
        <CircularProgress size={24} color="secondary" />
      )}
    </Button>
  );
}

export default LoadingButton;