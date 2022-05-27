import { Box, Avatar, Grid, Typography, useTheme, Button, Stack } from "@mui/material";
import React, { useContext } from "react";
import { use100vh } from "react-div-100vh";

import { ViewPortMeasureContext } from "../Layout/ViewPortMeasureContext";

export default function NavFirst() {
  let height_100vh = use100vh();
  let { palette } = useTheme();

  const { md_up } = useContext(ViewPortMeasureContext);
  return (
    <>
      <Stack
        direction={{ xs: "row", md: "column" }}
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ padding: { xs: "2rem", md: "0.5rem" } }}
      >
        <Box>
          <Typography
            variant="h5"
            component="h2"
            align="center"
            sx={{ color: palette.primary.contrastText }}
          >
            Hi, I'm louis
          </Typography>
        </Box>
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
      </Stack>
    </>
  );
}
