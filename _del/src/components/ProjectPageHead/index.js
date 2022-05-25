import React from "react";
// import Link from "@docusaurus/Link";
import BackToCatalogue from "../BackToCatalogue";

import { Box, Grid, Typography } from "@material-ui/core";
import { FiCalendar, FiTag } from "react-icons/fi";

import ProjectTitle from "../ProjectTitle";
import ProjectUpdateLabel from "../ProjectUpdateLabel";
import { THEME_ACCENT_COLOR, THEME_WHITE } from "../../theme/styles/colors";

import { ViewPortMeasureContext } from "../../theme/ViewPortMeasureContext";

export default function ProjectPageHead({ title, keywords, last_update }) {
  let { xl_up, md_up } = React.useContext(ViewPortMeasureContext);

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
            color: xl_up || md_up ? THEME_ACCENT_COLOR : THEME_WHITE,
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
              {keywords &&
                keywords.map((x) => {
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
            color: xl_up || md_up ? THEME_ACCENT_COLOR : THEME_WHITE,
          }}
        >
          {last_update == "" ? (
            <></>
          ) : (
            <>
              <ProjectUpdateLabel>{last_update}</ProjectUpdateLabel>
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
}
