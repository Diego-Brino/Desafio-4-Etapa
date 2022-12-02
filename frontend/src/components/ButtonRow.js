import React, { useContext } from "react";
import { Stack } from "@mui/system";
import { LayoutContext } from "../providers/LayoutProvider";

export default function ButtonRow(props) {
  const layout = useContext(LayoutContext);

  return (
    <Stack
      direction="row"
      spacing={4}
      sx={{
        justifyContent: "flex-end",
      }}
    >
      {props.children}
    </Stack>
  );
}
