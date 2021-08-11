import React from "react";
import { Grid } from "@material-ui/core";
import { translate } from "@docusaurus/Translate";

import DocusaurusSvg from "./construction-svgrepo-com.svg";
import { THEME_WHITE } from "../../theme/styles/colors";

export default function WorkInProgressTile() {
  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          color: THEME_WHITE,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Grid container>
          <Grid item xs></Grid>
          <Grid item xs={10}>
            <DocusaurusSvg />
          </Grid>
          <Grid item xs></Grid>
        </Grid>

        <Grid container style={{ color: THEME_WHITE, textAlign: "center" }}>
          <Grid item xs></Grid>
          <Grid item xs={10}>
            {translate({
              id: "work_in_progress_tile",
              message: "sorry work in progress",
              description: "sorry work in progress",
            })}{" "}
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </div>
    </>
  );
}
