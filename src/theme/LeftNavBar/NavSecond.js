import React from "react";
import Link from "@docusaurus/Link";

import { THEME_WHITE } from "../styles/colors";
import { Box, Grid } from "@material-ui/core";

export default function NavSecond() {
  return (
    <>
      <Box style={{ height: "34vh" }}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ height: "100%" }}
        >
          <Box mt={2}>
            <Link isNavLink to={"/"} style={{ color: THEME_WHITE }}>
              PROJECTS
            </Link>
          </Box>

          <Box mt={2}>
            <Link
              isNavLink
              to={"/docs/about_louis"}
              style={{ color: THEME_WHITE }}
            >
              ABOUT
            </Link>{" "}
          </Box>
          <Box mt={2}>
            <Link isNavLink to={"/docs/credits"} style={{ color: THEME_WHITE }}>
              CREDITS
            </Link>{" "}
          </Box>
          <Box mt={2}>
            <Link
              isNavLink
              to={"https://louiscklaw.github.io/travis-playlist/"}
              style={{ color: THEME_WHITE }}
            >
              TRAVIS BUILD DASHBOARD
            </Link>
          </Box>
        </Grid>
      </Box>
    </>
  );
}
