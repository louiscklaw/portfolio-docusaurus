import Link from "@docusaurus/Link";
import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { FiAtSign, FiGithub, FiLinkedin, FiSend, FiSlack } from "react-icons/fi";

export default function NavThird() {
  const theme = useTheme();
  return (
    <>
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ color: theme.palette.primary.contrastText }}
        spacing={2}
      >
        <Grid item>
          <Stack spacing={2} direction="row">
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

        <Grid item>
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
        <Grid item>
          <Typography component="h3">source code</Typography>
        </Grid>
        <Grid item>
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
        <Grid item>
          <Typography variant="body2" style={{ color: theme.palette.primary.contrastText }}>
            last update: 2021-Jan-11
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
