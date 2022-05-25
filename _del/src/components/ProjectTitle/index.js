import { Typography } from "@material-ui/core";
import React from "react";

import { THEME_ACCENT_COLOR, THEME_WHITE } from "../../theme/styles/colors";
import { ViewPortMeasureContext } from "../../theme/ViewPortMeasureContext";

export default function Helloworld({ children }) {
  let { xl_up, md_up } = React.useContext(ViewPortMeasureContext);
  return (
    <>
      <Typography
        variant="h4"
        component="h2"
        style={{
          textAlign: "center",
          fontFamily: "Nunito,sans-serif",
          color: xl_up || md_up ? THEME_ACCENT_COLOR : THEME_WHITE,
        }}
      >
        {children}
      </Typography>
    </>
  );
}
