import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { use100vh } from "react-div-100vh";
import Link from "@docusaurus/Link";
import { FiAtSign, FiGithub, FiLinkedin, FiSend, FiSlack } from "react-icons/fi";

export default function NavThird() {
  const theme = useTheme();

  return (
    <>
      <Grid
        item
        container
        flexDirection="column"
        spacing={2}
        justifyContent={"center"}
        alignItems="center"
      >
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <Stack spacing={2} direction="row" justifyContent={"center"}>
            <Link isNavLink to="/" style={{ color: theme.palette.primary.contrastText }}>
              <FiGithub size="1.5rem" />
            </Link>
            <Link isNavLink to="/" style={{ color: theme.palette.primary.contrastText }}>
              <FiLinkedin size="1.5rem" />
            </Link>
            <Link isNavLink to="/" style={{ color: theme.palette.primary.contrastText }}>
              <FiSlack size="1.5rem" />
            </Link>
            <Link isNavLink to="/" style={{ color: theme.palette.primary.contrastText }}>
              <FiSend size="1.5rem" />
            </Link>
            <Link isNavLink to="/" style={{ color: theme.palette.primary.contrastText }}>
              <FiAtSign size="1.5rem" />
            </Link>
          </Stack>
        </Grid>
        <Grid item sx={{ display: { xs: "none", md: "block" } }}>
          <Box
            style={{
              height: "1rem",
              width: "5rem",

              backgroundImage: `url(https://github.com/louiscklaw/portfolio-gatsby/actions/workflows/build.yml/badge.svg)`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </Grid>
        <Grid item sx={{ display: { xs: "none", md: "block" } }}>
          <Typography component="h3">source code</Typography>
        </Grid>
        <Grid item sx={{ display: { xs: "none", md: "block" } }}>
          <Typography
            variant="body2"
            style={{ fontSize: "10px" }}
            gutterBottom={false}
            align="center"
          >
            💖 coded by louiscklaw. <br />
            Built on the solder of
            <br />
            <Link isNavLink to="/" style={{ color: theme.palette.primary.contrastText }}>
              THESE GIANTS
            </Link>
          </Typography>
        </Grid>
        <Grid item sx={{ display: { xs: "none", md: "block" } }}>
          <Typography variant="body2" style={{ color: theme.palette.primary.contrastText }}>
            last update: 2021-Jan-11
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
