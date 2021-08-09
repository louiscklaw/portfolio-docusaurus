import React from "react";
import Link from "@docusaurus/Link";

import { THEME_WHITE } from "../styles/colors";
import { Box, Grid, Typography } from "@material-ui/core";
import {
  FiGithub,
  FiLinkedin,
  FiSlack,
  FiSend,
  FiAtSign,
} from "react-icons/fi";

export default function NavThird() {
  return (
    <>
      <Box style={{ height: "33vh", color: THEME_WHITE }} mt={2}>
        <Grid container style={{ height: "100%", textAlign: "center" }}>
          <Grid item container xs={12}>
            <Grid item xs>
              <FiGithub size={"1rem"} />
            </Grid>
            <Grid item xs>
              <FiLinkedin size={"1rem"} />
            </Grid>
            <Grid item xs>
              <FiSlack size={"1rem"} />
            </Grid>
            <Grid item xs>
              <FiSend size={"1rem"} />
            </Grid>
            <Grid item xs>
              <FiAtSign size={"1rem"} />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box mt={2}>
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
              >
                <Grid item>
                  <Box
                    style={{
                      height: "20px",
                      width: "100px",

                      backgroundImage: `url(https://github.com/louiscklaw/portfolio-gatsby/actions/workflows/build.yml/badge.svg)`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>{" "}
          <Grid item xs={12} style={{ width: "100%" }}>
            <Box style={{ textAlign: "center" }}>
              <Link isNavLink to={"/"} style={{ color: THEME_WHITE }}>
                souce code
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box style={{ textAlign: "center" }}>
              <Typography variant="p">
                💖 coded by louiscklaw. <br />
                Built on the solder of
                <br />
                <Link isNavLink to={"/"} style={{ color: THEME_WHITE }}>
                  THESE GIANTS
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box style={{ textAlign: "center" }}>
              <Typography variant="p" style={{ color: THEME_WHITE }}>
                last build: 2021-Jan-11
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
