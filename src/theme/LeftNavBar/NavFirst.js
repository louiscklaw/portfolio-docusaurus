import { Box, Avatar, Grid, Typography, useTheme, Button } from "@mui/material";
import React, { useContext } from "react";
import { use100vh } from "react-div-100vh";

import { ViewPortMeasureContext } from "../Layout/ViewPortMeasureContext";

export default function NavFirst() {
  let height_100vh = use100vh();
  let { palette } = useTheme();

  const { md_up } = useContext(ViewPortMeasureContext);
  return (
    <>
      <Grid
        item
        container
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={{ xs: "row", md: "column" }}
        spacing={{ xs: 1, md: 2 }}
        sx={{
          width: "100%",
          height: "100%",
          maxHeight: { xs: height_100vh / 8, md: height_100vh / 5 },
        }}
      >
        <Grid item>
          <Box sx={{ color: palette.primary.contrastText }}>
            <Typography variant="h5" component="h2" align="center">
              Hi, I'm louis
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <Avatar
              alt="louiscklaw"
              src="https://aboutme.louislabs.com/static/590d0885a3f4457b6437115b0e72272d/9dc27/avatar.jpg"
              sx={{
                width: { xs: "50px", md: "100px" },
                height: { xs: "50px", md: "100px" },
                alignSelf: "center",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
