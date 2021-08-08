/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import SkipToContent from "@theme/SkipToContent";
import AnnouncementBar from "@theme/AnnouncementBar";
import Navbar from "@theme/Navbar";
import Footer from "@theme/Footer";
import LayoutProviders from "@theme/LayoutProviders";
import LayoutHead from "@theme/LayoutHead";
import useKeyboardNavigation from "@theme/hooks/useKeyboardNavigation";
import { ThemeClassNames } from "@docusaurus/theme-common";
import "./styles.css";

import Stack from "@material-ui/core/Stack";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { styled } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

import Link from "@docusaurus/Link";

const THEME_ACCENT_COLOR = "#2C3E50";
const THEME_BACKGROUND_COLOR = "#555555";

const test = 2 * (100 / 12);

function Layout(props) {
  const { children, noFooter, wrapperClassName, pageClassName } = props;
  useKeyboardNavigation();
  return (
    <>
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

                backgroundColor: "tomato",
              }}
            >
              <>left nav bar</>
              <Link isNavLink to={"/"}>
                {"home"}
              </Link>
            </div>
          </Grid>
          <Grid item xs={10} style={{}}>
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
    </>
  );
}

export default Layout;
