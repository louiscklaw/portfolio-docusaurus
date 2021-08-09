import { Typography } from "@material-ui/core";
import React from "react";

export default function Helloworld({ desc }) {
  return (
    <>
      <Typography
        variant="h4"
        component="h2"
        style={{ textAlign: "center", fontFamily: "Nunito,sans-serif" }}
      >
        {desc}
      </Typography>
    </>
  );
}
