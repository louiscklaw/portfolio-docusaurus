import React from "react";
import Link from "@docusaurus/Link";

import { THEME_WHITE } from "../styles/colors";
import { Box, Typography } from "@material-ui/core";

export default function NavThird() {
  return (
    <>
      <Box style={{ height: "33vh" }}>
        <div>
          <div
            style={{
              height: "20px",
              width: "100px",
              backgroundImage: `url(https://github.com/louiscklaw/portfolio-gatsby/actions/workflows/build.yml/badge.svg)`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {" "}
          </div>
        </div>
        <div>
          <Link isNavLink to={"/"} style={{ color: THEME_WHITE }}>
            souce code
          </Link>{" "}
        </div>

        <div>
          💖 coded by louiscklaw. Built on the solder of
          <div>
            <Link isNavLink to={"/"} style={{ color: THEME_WHITE }}>
              THESE GIANTS
            </Link>{" "}
          </div>
        </div>

        <Typography variant="p" style={{ color: THEME_WHITE }}>
          last build: 2021-Jan-11
        </Typography>
      </Box>
    </>
  );
}
