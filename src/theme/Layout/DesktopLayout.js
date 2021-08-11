import React from "react";
import "./styles.css";

import Grid from "@material-ui/core/Grid";

import LeftNavBar from "../LeftNavBar";

import { THEME_ACCENT_COLOR } from "../styles/colors";

import "react-perfect-scrollbar/dist/css/styles.css";

const test = 2 * (100 / 12);

export default function DesktopLayout(props) {
  const { children } = props;

  return (
    <>
      <Grid container style={{ height: "100vh" }}>
        <Grid
          item
          xs={2}
          style={{ height: "100vh", backgroundColor: THEME_ACCENT_COLOR }}
        >
          <div
            style={{
              position: "fixed",
              height: "100vh",
              width: test + "%",
              backgroundColor: THEME_ACCENT_COLOR,
            }}
          >
            <LeftNavBar />
          </div>
        </Grid>
        <Grid item xs={10}>
          {children}
        </Grid>
      </Grid>
    </>
  );
}
