import ErrorBoundary from "@docusaurus/ErrorBoundary";
import { PageMetadata } from "@docusaurus/theme-common";
import { Box, createTheme, Stack, ThemeProvider, useTheme } from "@mui/material";
import AnnouncementBar from "@theme/AnnouncementBar";
import ErrorPageContent from "@theme/ErrorPageContent";
import LayoutProviders from "@theme/LayoutProviders";
import Navbar from "@theme/Navbar";
import React from "react";
import { use100vh } from "react-div-100vh";
import LeftNavBar from "../LeftNavBar";

import MuiTheme from "../../MuiTheme";

function PageLayout({ children }) {
  const height_100vh = use100vh();
  const { palette } = useTheme();

  return (
    <>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={0}
        sx={{ backgroundColor: palette.background.paper }}
      >
        <LeftNavBar />
        <Box
          sx={{
            width: { xs: "100vw", md: "calc( 100vw * 6 / 7 )" },
            height: { xs: height_100vh / 5, md: height_100vh },
          }}
        >
          {children}
        </Box>
      </Stack>
    </>
  );
}

export default function Layout(props) {
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
      <ThemeProvider theme={MuiTheme}>
        <LayoutProviders>
          <PageMetadata title={title} description={description} />

          {/* <SkipToContent /> */}

          <AnnouncementBar />
          <Navbar />

          <ErrorBoundary fallback={ErrorPageContent}>
            <PageLayout>{children}</PageLayout>
          </ErrorBoundary>
        </LayoutProviders>
      </ThemeProvider>
    </>
  );
}
