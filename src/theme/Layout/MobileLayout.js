import React from "react";
import "./styles.css";

import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";

import { THEME_ACCENT_COLOR, THEME_WHITE } from "../styles/colors";

import "react-perfect-scrollbar/dist/css/styles.css";
import { Avatar } from "@material-ui/core";

import { translate } from "@docusaurus/Translate";
import {
  FiGithub,
  FiLinkedin,
  FiSlack,
  FiSend,
  FiAtSign,
} from "react-icons/fi";

export default function MobileLayout(props) {
  const { children } = props;

  return (
    <>
      <Grid container direction={"column"}>
        <Grid
          item
          style={{
            height: "20vh",
            color: THEME_WHITE,
            backgroundColor: THEME_ACCENT_COLOR,
          }}
        >
          <Grid container style={{ textAlign: "center" }}>
            <Grid item xs></Grid>
            <Grid item xs={10} container>
              <Grid
                item
                container
                xs={12}
                style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
              >
                <Grid item xs></Grid>
                <Grid
                  item
                  xs={10}
                  style={{
                    display: "flex",
                    flexFlow: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    alt="louiscklaw"
                    src="https://aboutme.louislabs.com/static/590d0885a3f4457b6437115b0e72272d/9dc27/avatar.jpg"
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                  />

                  <Typography
                    variant="h6"
                    component="h1"
                    style={{
                      color: THEME_WHITE,
                      textAlign: "left",
                      paddingLeft: "1rem",
                    }}
                  >
                    Hi, I'm louis
                  </Typography>
                </Grid>

                <Grid item xs></Grid>
              </Grid>
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
              <Grid
                item
                container
                xs={12}
                style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
              >
                <Grid item xs></Grid>
                <Grid item xs={3}>
                  {translate({ message: "Project" })}
                </Grid>
                <Grid item xs={3}>
                  {translate({ message: "About" })}
                </Grid>
                <Grid item xs={3}>
                  {translate({ message: "Credits" })}
                </Grid>
                <Grid item xs></Grid>
              </Grid>
            </Grid>
            <Grid item xs></Grid>
          </Grid>
        </Grid>
        <Grid item style={{ height: "80vh", overflowY: "auto" }}>
          {children}
        </Grid>
      </Grid>
    </>
  );
}
