import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export const ViewPortMeasureContext = React.createContext();

export function ViewPortMeasureProvider({ children }) {
  const theme = useTheme();
  const xs_up = useMediaQuery(theme.breakpoints.up("xs"));
  const sm_up = useMediaQuery(theme.breakpoints.up("sm"));
  const md_up = useMediaQuery(theme.breakpoints.up("md"));
  const lg_up = useMediaQuery(theme.breakpoints.up("lg"));
  const xl_up = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <>
      <ViewPortMeasureContext.Provider
        value={{ hello: "world", sm_up, lg_up, xs_up, md_up, xl_up }}
      >
        {children}
      </ViewPortMeasureContext.Provider>
    </>
  );
}
