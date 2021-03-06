import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

export const ViewPortMeasureContext = React.createContext();

export function ViewPortMeasureProvider({ children }) {
  const theme = useTheme();
  const xs_up = useMediaQuery(theme.breakpoints.up("xs"));
  const md_up = useMediaQuery(theme.breakpoints.up("md"));
  const xl_up = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <>
      <ViewPortMeasureContext.Provider
        value={{ hello: "world", xs_up, md_up, xl_up }}
      >
        {children}
      </ViewPortMeasureContext.Provider>
    </>
  );
}
