import { Avatar, Grid, Typography, useTheme, Stack } from "@mui/material";
import React from "react";
import Link from "@docusaurus/Link";
import { use100vh } from "react-div-100vh";

export default function NavSecond() {
  const { palette } = useTheme();

  return (
    <>
      <Grid item>
        <Stack spacing={2}>
          <Link isNavLink to="/projectList" style={{ color: palette.primary.contrastText }}>
            <Typography component="h2">PROJECTS</Typography>
          </Link>
          <Link isNavLink to="/docs/about_louis" style={{ color: palette.primary.contrastText }}>
            <Typography component="h2">ABOUT</Typography>
          </Link>
          <Link isNavLink to="/docs/credits" style={{ color: palette.primary.contrastText }}>
            <Typography component="h2">CREDITS</Typography>
          </Link>
          <Link
            isNavLink
            to="https://louiscklaw.github.io/travis-playlist"
            style={{ color: palette.primary.contrastText }}
          >
            <Typography component="h2">TRAVIS BUILD DASHBOARD</Typography>
          </Link>
        </Stack>
      </Grid>
    </>
  );
}
