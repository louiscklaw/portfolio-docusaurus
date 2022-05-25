import { Avatar, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { use100vh } from "react-div-100vh";

export default function NavFirst() {
  let height_100vh = use100vh();
  let { palette } = useTheme();
  return (
    <>
      <Grid item>
        <Grid
          item
          container
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ height: { xs: height_100vh / 3 } }}
          direction={{ xs: "row", md: "column" }}
          spacing={{ xs: 2, md: 2 }}
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
      </Grid>
    </>
  );
}
