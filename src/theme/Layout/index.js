import { useTheme, Stack, Box, Grid } from "@mui/material";
import React from "react";
import { use100vh } from "react-div-100vh";
import LayoutProviders from "@theme/LayoutProviders";
import { PageMetadata, ThemeClassNames, useKeyboardNavigation } from "@docusaurus/theme-common";
import SkipToContent from "@theme/SkipToContent";
import AnnouncementBar from "@theme/AnnouncementBar";
import ErrorBoundary from "@docusaurus/ErrorBoundary";
import ErrorPageContent from "@theme/ErrorPageContent";
import Navbar from "@theme/Navbar";

import NavFirst from "../LeftNavBar/NavFirst";
import NavSecond from "../LeftNavBar/NavSecond";
import NavThird from "../LeftNavBar/NavThird";

export default function Layout(props) {
  const height_100vh = use100vh();
  const { palette } = useTheme();
  const {
    children,
    noFooter,
    wrapperClassName,
    // Not really layout-related, but kept for convenience/retro-compatibility
    title,
    description,
  } = props;

  return (
    <>
      <LayoutProviders>
        <PageMetadata title={title} description={description} />

        {/* <SkipToContent /> */}

        <AnnouncementBar />
        <Navbar />

        <ErrorBoundary fallback={ErrorPageContent}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={0}>
            <Box
              sx={{
                width: { xs: "100vw", md: "calc( 100vw / 7 )" },
                height: { xs: height_100vh / 5, md: height_100vh },
                backgroundColor: palette.primary.main,
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: { xs: "100vw", md: "calc( 100vw / 7 )" },
                  height: { xs: height_100vh / 5, md: height_100vh },
                  backgroundColor: palette.primary.main,
                  position: "fixed",
                }}
              >
                <Grid
                  container
                  spacing={2}
                  justifyContent="space-between"
                  flexDirection="column"
                  sx={{ height: { xs: height_100vh / 5, md: height_100vh } }}
                >
                  <NavFirst />
                  <NavSecond />
                  <NavThird />
                </Grid>
              </Box>
            </Box>
            <Box
              sx={{
                width: { xs: "100vw", md: "calc( 100vw * 6 / 7 )" },
                height: { xs: height_100vh / 5, md: height_100vh },
              }}
            >
              {children}
            </Box>
          </Stack>
        </ErrorBoundary>
      </LayoutProviders>
    </>
  );
}
