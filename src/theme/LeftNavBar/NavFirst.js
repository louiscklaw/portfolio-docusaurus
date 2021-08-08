import { Box, Avatar, Typography, Grid } from "@material-ui/core";
import React from "react";
import { THEME_ACCENT_COLOR, THEME_WHITE } from "../styles/colors";

export default function NavFirst() {
  return (
    <>
      <Box style={{ height: "33vh" }}>
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justify="center"
          style={{ height: "100%" }}
        >
          <Grid item xs />
          <Grid item xs={10}>
            <Box>
              <Typography
                variant="h4"
                component="h1"
                style={{
                  color: THEME_WHITE,
                  textAlign: "center",
                }}
              >
                Hi, I'm louis
              </Typography>
            </Box>

            <Box mt={"2rem"}>
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
              >
                <Grid item>
                  <Avatar
                    alt="louiscklaw"
                    src="https://aboutme.louislabs.com/static/590d0885a3f4457b6437115b0e72272d/9dc27/avatar.jpg"
                    style={{
                      width: "100px",
                      height: "100px",
                      alignSelf: "center",
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs />
        </Grid>
      </Box>
    </>
  );
}
