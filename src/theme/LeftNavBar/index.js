import React from "react";
import { useTheme, Stack, Box, Grid } from "@mui/material";
import { use100vh } from "react-div-100vh";

import NavFirst from "./NavFirst";
import NavSecond from "./NavSecond";
import NavThird from "./NavThird";

export default function LeftNavBar({ children }) {
  const height_100vh = use100vh();
  const { palette } = useTheme();
  return (
    <>
      <Box
        sx={{
          width: { xs: "100vw", md: "calc( 100vw / 7 )" },
          height: { xs: height_100vh / 5, md: height_100vh },
          backgroundColor: palette.primary.main,
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: { xs: "100vw", md: "calc( 100vw / 7 )" },
            height: { xs: height_100vh / 5, md: height_100vh },
            backgroundColor: palette.primary.main,
            position: "fixed",
          }}
        >
          <Grid
            container
            spacing={2}
            justifyContent="space-evenly"
            flexDirection={{ xs: "row", md: "column" }}
            sx={{ height: { xs: height_100vh / 5, md: height_100vh } }}
          >
            <NavFirst />
            <NavSecond />
            <NavThird />
          </Grid>
        </Box>
      </Box>
    </>
  );
}
