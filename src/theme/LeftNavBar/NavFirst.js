import { Avatar, Grid, Typography, useTheme, Button } from "@mui/material";
import React from "react";
import { use100vh } from "react-div-100vh";

export default function NavFirst() {
  let height_100vh = use100vh();
  let { palette } = useTheme();
  return (
    <>
      <Grid
        item
        container
        justifyContent={"center"}
        alignItems={"center"}
        direction={{ xs: "row", md: "column" }}
        spacing={{ xs: 1, md: 2 }}
        sx={{
          width: "100%",
          height: "100%",
          maxHeight: { xs: height_100vh / 8, md: height_100vh / 5 },
        }}
      >
        <Grid item>
          <Typography variant="h4" component="h1" sx={{ color: palette.primary.contrastText }}>
            Hi, I'm louis
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            alt="louiscklaw"
            src="https://aboutme.louislabs.com/static/590d0885a3f4457b6437115b0e72272d/9dc27/avatar.jpg"
            sx={{
              width: { xs: "50px", md: "100px" },
              height: { xs: "50px", md: "100px" },
              alignSelf: "center",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
