import { Avatar, Grid, Typography, useTheme, Stack } from "@mui/material";
import React, { useContext } from "react";
import Link from "@docusaurus/Link";
import { use100vh } from "react-div-100vh";
import { ViewPortMeasureContext } from "../Layout/ViewPortMeasureContext";

export default function NavSecond() {
  const { palette } = useTheme();
  const { md_up } = useContext(ViewPortMeasureContext);

  return (
    <>
      <Grid item container justifyContent={"center"} alignItems={"center"}>
        <Stack spacing={2} direction={{ xs: "row", md: "column" }}>
          <Link isNavLink to="/projectList" style={{ color: palette.primary.contrastText }}>
            <Typography component="h2" align="center">
              PROJECTS
            </Typography>
          </Link>
          <Link isNavLink to="/docs/about_louis" style={{ color: palette.primary.contrastText }}>
            <Typography component="h2" align="center">
              ABOUT
            </Typography>
          </Link>
          <Link isNavLink to="/docs/credits" style={{ color: palette.primary.contrastText }}>
            <Typography component="h2" align="center">
              CREDITS
            </Typography>
          </Link>
          <Link
            isNavLink
            to="https://louiscklaw.github.io/travis-playlist"
            style={{
              color: palette.primary.contrastText,
              textDecoration: "none",
              display: md_up ? "block" : "none",
            }}
          >
            <Typography component="h2" align="center">
              TRAVIS BUILD DASHBOARD
            </Typography>
          </Link>
        </Stack>
      </Grid>
    </>
  );
}
