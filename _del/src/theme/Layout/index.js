import { Box, Grid, Stack, useTheme } from "@mui/material";
import React from "react";
import { use100vh } from "react-div-100vh";
import "./styles.css";

import NavFirst from "../LeftNavBar/NavFirst";
import NavSecond from "../LeftNavBar/NavSecond";
import NavThird from "../LeftNavBar/NavThird";

function Layout(props) {
  const height_100vh = use100vh();
  const { palette } = useTheme();
  const { children } = props;

  return (
    <>
      <Stack direction={{ xs: "column", md: "row" }} spacing={0}>
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
              justifyContent="space-between"
              flexDirection="column"
              sx={{ height: { xs: height_100vh / 5, md: height_100vh } }}
            >
              <NavFirst />
              <NavSecond />
              <NavThird />
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "100vw", md: "calc( 100vw * 6 / 7 )" },
            height: { xs: height_100vh / 5, md: height_100vh },
          }}
        >
          {children}
        </Box>
      </Stack>
    </>
  );
}

export default Layout;
