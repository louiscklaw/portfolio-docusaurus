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
import { Avatar } from "@material-ui/core";

import { translate } from "@docusaurus/Translate";
import {
  FiGithub,
  FiLinkedin,
  FiSlack,
  FiSend,
  FiAtSign,
} from "react-icons/fi";

import { ViewPortMeasureProvider } from "../ViewPortMeasureContext";

const test = 2 * (100 / 12);

function DesktopLayout(props) {
  const { children, noFooter, wrapperClassName, pageClassName } = props;

  return (
    <>
      desktop layout
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

function TabletLayout(props) {
  const { children, noFooter, wrapperClassName, pageClassName } = props;

  return (
    <>
      tablet layout
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

function MobileLayout(props) {
  const { children, noFooter, wrapperClassName, pageClassName } = props;

  return (
    <>
      <Grid
        container
        style={{
          color: "white",
          backgroundColor: THEME_ACCENT_COLOR,
          textAlign: "center",
        }}
      >
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs container>
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
            <Grid item xs={1}></Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </>
  );
}

function Layout(props) {
  const { children, noFooter, wrapperClassName, pageClassName } = props;

  const theme = useTheme();
  const xs_up = useMediaQuery(theme.breakpoints.up("xs"));
  const md_up = useMediaQuery(theme.breakpoints.up("md"));
  const xl_up = useMediaQuery(theme.breakpoints.up("xl"));

  const SwitchLayout = (props) => {
    if (xl_up) {
      return <DesktopLayout {...props} />;
    } else if (md_up) {
      return <TabletLayout {...props} />;
    } else if (xs_up) {
      return <MobileLayout {...props} />;
    } else {
      return <DesktopLayout {...props} />;
    }
  };

  return (
    <>
      <PerfectScrollbar>
        <ViewPortMeasureProvider>
          <LayoutProviders>
            <LayoutHead {...props} />
            <AnnouncementBar />

            <SwitchLayout {...props} />

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
        </ViewPortMeasureProvider>
      </PerfectScrollbar>
    </>
  );
}

export default Layout;
