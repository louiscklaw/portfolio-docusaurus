import React from "react";
// import Link from "@docusaurus/Link";
import BackToCatalogue from "../BackToCatalogue";

import { Box, Grid, Typography } from "@material-ui/core";
import { FiCalendar, FiTag } from "react-icons/fi";

import ProjectTitle from "../ProjectTitle";
import ProjectUpdateLabel from "../ProjectUpdateLabel";
import { THEME_ACCENT_COLOR, THEME_WHITE } from "../../theme/styles/colors";

export default function ProjectPageHead({ title, keywords }) {
  return (
    <>
      <Grid container style={{ color: THEME_ACCENT_COLOR }}>
        <Grid
          item
          xs={3}
          style={{
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
          }}
        >
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <BackToCatalogue to={"/"} />
          </Box>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "center" }}>
          <Grid container>
            <Grid item xs={12}>
              <ProjectTitle>{title}</ProjectTitle>
            </Grid>
            <Grid item xs={12}>
              {keywords.map((x) => {
                return (
                  <Box component="span" m={"0.5rem"}>
                    <Box component="span">
                      <FiTag />
                      {x}
                    </Box>
                  </Box>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={3}
          style={{
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
          }}
        >
          <ProjectUpdateLabel>2021-08-09</ProjectUpdateLabel>
        </Grid>
      </Grid>
    </>
  );
}
