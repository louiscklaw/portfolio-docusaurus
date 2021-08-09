import React from "react";
import AnnouncementBar from "@theme/AnnouncementBar";
import LayoutProviders from "@theme/LayoutProviders";
import LayoutHead from "@theme/LayoutHead";
import "./styles.css";

import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { green } from "@material-ui/core/colors";
import { useTheme } from "@material-ui/core/styles";

import LeftNavBar from "../LeftNavBar";

import Link from "@docusaurus/Link";

import { THEME_ACCENT_COLOR, THEME_WHITE } from "../styles/colors";

import useMediaQuery from "@material-ui/core/useMediaQuery";

import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const test = 2 * (100 / 12);

function Layout(props) {
  const { children, noFooter, wrapperClassName, pageClassName } = props;

  const theme = useTheme();
  const matches_xs = useMediaQuery(theme.breakpoints.up("xs"));

  return (
    <>
      <PerfectScrollbar>
        <LayoutProviders>
          <LayoutHead {...props} />
          <AnnouncementBar />

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

          {/* <Navbar /> */}
          {/* <div
            className={clsx(
              ThemeClassNames.wrapper.main,
              wrapperClassName,
              pageClassName
            )}
          >
            children
          </div> */}
          {/* {!noFooter && <Footer />} */}
        </LayoutProviders>
      </PerfectScrollbar>
    </>
  );
}

export default Layout;
