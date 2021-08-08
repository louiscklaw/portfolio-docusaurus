import React from "react";
import Link from "@docusaurus/Link";

import { THEME_WHITE } from "../styles/colors";
import { Box } from "@material-ui/core";

export default function NavSecond() {
  return (
    <>
      <Box style={{ height: "34vh" }}>
        <div>
          <Link isNavLink to={"/"} style={{ color: THEME_WHITE }}>
            PROJECTS
          </Link>
        </div>
        <div>
          <Link isNavLink to={"/"} style={{ color: THEME_WHITE }}>
            ABOUT
          </Link>{" "}
        </div>
        <div>
          <Link isNavLink to={"/"} style={{ color: THEME_WHITE }}>
            CREDITS
          </Link>{" "}
        </div>
        <div>
          <Link isNavLink to={"/"} style={{ color: THEME_WHITE }}>
            TRAVIS BUILD DASHBOARD
          </Link>
        </div>
      </Box>
    </>
  );
}
